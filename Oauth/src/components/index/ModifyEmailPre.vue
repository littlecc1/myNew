<template>
  <div>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.modifyEmailPre.h3")}}</h3>
              <p class="word-p" v-show="!modifyStatus">{{$t("htmlMsg.modifyEmailPre.p")}}{{oldEmail}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form" onsubmit="return false;">
              <div class="form-group">
                <component-loading v-show="modifyStatus"></component-loading>
                <label class="sr-only" for="email">新邮箱</label>
                <input v-show="!modifyStatus" class="form-control input" id="email" v-model="email"
                       type="email"
                       :placeholder="$t('placeholder.modifyEmailPre.newEmail')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
              </div>
              <div class="form-group">
                <button type="button" id="btnSave" class="btn button-color" @click="toSubmit">{{$t("htmlMsg.modifyEmailPre.btnSave")}}</button>
                <button type="button" id="btnCancel" class="btn button-color" @click="callBack">{{$t("htmlMsg.modifyEmailPre.btnCancel")}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import {checkEmail, changeEmail} from '../../service/user';

export default {
  name: 'modifyEmailPre',
  // components: {'component-loading': Loading},
  data () {
    return {
      oldEmail: this.$route.query.email,
      email: '',
      modifyStatus: false
    };
  },
  methods: {
    toSubmit: function () {
      if (this.email === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyEmailPre.email'),
          type: 'warning'
        });
        return;
      }
      if (this.email === this.oldEmail) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyEmailPre.sameEmail'),
          type: 'warning'
        });
        this.email = '';
        return;
      }
      var sendEmail = this.email;
      var sendOldEmail = this.oldEmail;
      let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!reg.test(this.email)) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyEmailPre,checkEmail'),
          type: 'warning'
        });
        this.email = '';
        return;
      }
      this.modifyStatus = true;
      checkEmail({
        params: {
          email: this.email
        }
      }).then(response => {
        if (!response.data.isEmailExist) {
          changeEmail(qs.stringify({
            email: sendOldEmail,
            newEmail: sendEmail
          })).then(response => {
            this.$router.push({name: 'modifyWait', query: {email: sendEmail, oldEmail: sendOldEmail}});
          }).catch(error => {
            this.modifyStatus = false;
            this.email = '';
            this.$message({
              message: error.error.data.message,
              type: 'warning'
            });
          });
        } else {
          this.modifyStatus = false;
          this.email = '';
          this.$message({
            message: this.$i18n.t('jsMsg.modifyEmailPre.errorEmail'),
            type: 'warning'
          });
        }
      });
    },
    callBack: function () {
      this.$router.push('/userCenter');
    }
  }
};
</script>

<style scoped>

</style>
