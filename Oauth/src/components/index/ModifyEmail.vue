<template>
  <div>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.modifyEmailPre.h3")}}</h3>
              <p class="word-p">{{$t("htmlMsg.modifyEmailPre.p")}}{{this.$route.query.email}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form">
              <div class="form-group">
                <label class="sr-only" for="email">邮箱</label>
                <input class="form-control input" id="email" v-model="email" type="email"
                       :placeholder="$t('placeholder.modifyEmailPre.newEmail')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
              </div>
              <div class="form-group">
                <button type="button" id="btnSave" class="btn button-color" @click="toSubmit">{{$t("htmlMsg.modifyEmailPre.btnSave")}}</button>
                <button type="button" id="btnCancel" class="btn button-color" @click="backToCenter">{{$t("htmlMsg.modifyEmailPre.btnCancel")}}</button>
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
import {changeEmailByUser} from '../../service/user';

export default {
  name: 'modifyEmail',
  data () {
    return {
      oldEmail: this.$route.query.email,
      email: ''
    };
  },
  methods: {
    backToCenter: function () {
      // window.location.href = '/#/'
      this.$router.push('/userCenter');
    },
    toSubmit: function () {
      if (this.email === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyEmailPre.email'),
          type: 'warning'
        });
        return;
      }
      let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!reg.test(this.email)) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyEmailPre,checkEmail'),
          type: 'warning'
        });
        this.email = '';
        return;
      }
      if (this.oldEmail === this.email) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyEmailPre.sameEmail'),
          type: 'warning'
        });
      } else {
        changeEmailByUser(qs.stringify({
          email: this.oldEmail,
          newEmail: this.email
        })).then(response => {
          this.$message({
            message: response.data,
            type: 'warning'
          });
          this.email = '';
        }).catch(error => {
          this.$message({
            message: error.response.data,
            type: 'warning'
          });
          this.email = '';
        });
      }
    }
  }
};
</script>

<style scoped>

</style>
