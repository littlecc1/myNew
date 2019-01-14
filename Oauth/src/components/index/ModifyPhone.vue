<template>
  <div>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.modifyPhone.h3")}}</h3>
              <p class="word-p">{{$t("htmlMsg.modifyPhone.p")}}{{this.$route.query.phone}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form" onsubmit="return false;">
              <div class="form-group">
                <label class="sr-only" for="phone">联系电话</label>
                <input class="form-control input"  id="phone" v-model="phone" type="tel"
                       :placeholder="$t('placeholder.modifyPhone.newPhone')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
              </div>
              <div class="form-group">
                <button type="button" id="btnSave" class="btn button-color" @click="toSubmit">{{$t("htmlMsg.modifyPhone.btnSave")}}</button>
                <button type="button" id="btnCancel" class="btn button-color" @click="callBack">{{$t("htmlMsg.modifyPhone.btnCancel")}}</button>
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
import {changePhone} from '../../service/user';

export default {
  name: 'modifyPhone',
  data () {
    return {
      email: this.$route.query.email,
      oldPhone: this.$route.query.phone,
      phone: ''
    };
  },
  methods: {
    toSubmit: function () {
      if (this.phone === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyPhone.newPhone'),
          type: 'warning'
        });
        return;
      }
      let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if (!reg.test(this.phone)) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyPhone.errorPhone'),
          type: 'warning'
        });
        this.phone = '';
        return;
      }
      if (this.oldPhone === this.phone) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyPhone.samePhone'),
          type: 'warning'
        });
        this.phone = '';
        return;
      }
      changePhone(qs.stringify({
        email: this.email,
        phone: this.phone
      })).then(response => {
        this.$router.push('/userCenter');
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'warning'
        });
        this.phone = '';
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
