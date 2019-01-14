<template>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.forgetPwdPre.h3")}}</h3>
              <p class="word-p" v-show="!modifyStatus">{{$t("htmlMsg.forgetPwdPre.p")}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form">
              <loading v-show="modifyStatus" ></loading>
              <div class="form-group" v-show="!modifyStatus">
                <label  class="sr-only" for="email">邮箱</label>
                <input class="form-control input" id="email" v-model="email" type="email"
                       :placeholder="$t('placeholder.forgetPwdPre.email')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true">
              </div>
              <div v-show="!modifyStatus">
                <label class="sr-only">验证码</label>
                <input class="form-captcha" style="margin-bottom: 15px"
                       v-model="captcha" id="captcha" type="text" @keyup.enter="toSubmit"
                       autocomplete="false" :placeholder="$t('placeholder.forgetPwdPre.captcha')" required="required" aria-required="true">
                <img  class="code right" :src="path" @click="refreshCode($event)">
              </div>
              <div class="form-group">
                <button type="button" id="btnSave" class="btn button-color" @click="toSubmit">{{$t("htmlMsg.forgetPwdPre.btnSave")}}</button>
                <button type="button" id="btnCancel" class="btn button-color" @click="callBack">{{$t("htmlMsg.forgetPwdPre.btnCancel")}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import qs from 'qs';
import {emailResetPassword} from '../../service/user';
export default {
  name: 'forgetPwd',
  data () {
    return {
      oldEmail: this.$route.params.email,
      path: '/api/captcha',
      email: '',
      captcha: '',
      modifyStatus: false
    };
  },
  methods: {
    refreshCode: function (e) {
      e.target.src = '/api/captcha?' + new Date().getTime();
    },
    clear: function () {
      this.path = '/api/captcha?' + new Date().getTime();
      this.email = '';
      this.captcha = '';
    },
    toSubmit: function () {
      if (this.email === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.forgetPwdPre.emailAddress'),
          type: 'warning'
        });
        return;
      }
      if (this.captcha === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.forgetPwdPre.captcha'),
          type: 'warning'
        });
        return;
      }
      this.modifyStatus = true;
      var sendEmail = this.email;
      let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!reg.test(this.email)) {
        this.modifyStatus = false;
        this.clear();
        this.$message({
          message: this.$i18n.t('jsMsg.forgetPwdPre.emailFormat'),
          type: 'warning'
        });
        return;
      }
      emailResetPassword(qs.stringify({
        email: this.email,
        captcha: this.captcha
      })).then(response => {
        this.$router.push({name: 'forgetWait', params: {email: sendEmail}});
      }).catch(error => {
        this.modifyStatus = false;
        this.$message({
          message: error.response.data,
          type: 'warning'
        });
        this.clear();
      });
    },
    callBack: function () {
      this.$router.push('/');
    }
  }
};
</script>

<style src="../../styles/forget_pwd.css" scoped>
  .right {
    float:right;
  }
</style>
