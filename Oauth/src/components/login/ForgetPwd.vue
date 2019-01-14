<template>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.forgetPwd.h3")}}</h3>
              <p class="word-p" v-show="isCodeValid">{{$t("htmlMsg.forgetPwd.p")}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form">
              <p class="word-p" v-show="!isCodeValid">{{$t("htmlMsg.forgetPwd.back")}}</p>
              <div class="form-group">
                <label class="sr-only" for="pwd">密码</label>
                <input v-show="isCodeValid" class="form-control input" id="pwd" v-model="pwd" type="password"
                       :placeholder="$t('placeholder.forgetPwd.pwd')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
                <label class="sr-only" for="password">确认密码</label>
                <input v-show="isCodeValid" class="form-control input" id="password" v-model="password"
                       type="password" :placeholder="$t('placeholder.forgetPwd.confirmPwd')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
              </div>
              <button v-show="isCodeValid" type="button" class="btn button-color" @click="toSubmit">{{$t("htmlMsg.forgetPwd.btnSave")}}
              </button>
              <button v-show="!isCodeValid" type="button" class="btn button-color" @click="callback">{{$t("htmlMsg.forgetPwd.btnBack")}}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import crypto from 'crypto';
import qs from 'qs';
import {userResetPassword, expiringCodeContext} from '../../service/user';

export default {
  name: 'forgetPwd',
  data () {
    return {
      isCodeValid: '',
      pwd: '',
      password: '',
      email: '',
      newPwd: '',
      expiringCode: ''
    };
  },
  mounted: function () {
    this.checkCode();
  },
  methods: {
    toSubmit: function () {
      if (this.pwd === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.forgetPwd.pwd'),
          type: 'warning'
        });
        return;
      }
      let reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.~!@#$%^&*?()_+-,.\+\*\-:;^_`]+$)[,\.~!@#$%^&*?()_+-,.\+\*\-:;^_`0-9A-Za-z]{8,20}$/;
      // let reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,~!@#$%^&*?()_+-,.\-:;`]+$)[,~!@#$%^&*?()_+-,.\-:;`0-9A-Za-z]{8,20}$/;
      if (!reg.test(this.pwd)) {
        this.$message({
          message: this.$i18n.t('jsMsg.forgetPwd.email'),
          type: 'warning'
        });
        return;
      }
      if (this.password === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.forgetPwd.confirmPwd'),
          type: 'warning'
        });
        return;
      }
      if (this.password !== this.pwd) {
        this.$message({
          message: this.$i18n.t('jsMsg.forgetPwd.difference'),
          type: 'warning'
        });
        this.pwd = '';
        this.password = '';
        return;
      }
      if (this.password === this.pwd) {
        var sendPassword = this.password;
        const md5 = crypto.createHash('md5');
        md5.update(this.pwd);
        this.newPwd = md5.digest('hex');
        let searchURL = window.location.search;
        searchURL = searchURL.substring(1, searchURL.length);
        this.email = searchURL.split('&')[1].split('=')[1];// 以&为界的数组第二个元素
        this.expiringCode = searchURL.split('&')[0].split('=')[1];
        let form = {newPwd: this.newPwd, email: this.email, expiringCode: this.expiringCode};
        userResetPassword(qs.stringify(form))
          .then(response => {
            this.$router.push({name: 'forgetWait', params: {password: sendPassword}});
          }).catch(error => {
            this.$message({
              message: error.response.data,
              type: 'warning'
            });
          });
      }
    },
    checkCode: function () {
      let searchURL = window.location.search;
      searchURL = searchURL.substring(1, searchURL.length);
      this.email = searchURL.split('&')[1].split('=')[1];// 以&为界的数组第二个元素
      this.expiringCode = searchURL.split('&')[0].split('=')[1];
      expiringCodeContext({
        params: {
          email: this.email,
          code: this.expiringCode
        }
      }).then(response => {
        this.isCodeValid = true;
      }).catch(error => {
        this.isCodeValid = false;
        this.$message({
          message: error.response.data,
          type: 'warning'
        });
      });
    },
    callback: function () {
      window.location.href = 'login.html#/forgetPwdPre';
    }
  }
};
</script>

<style scoped>
</style>
