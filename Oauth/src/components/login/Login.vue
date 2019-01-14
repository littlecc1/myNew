<template>
  <div align="center" class="bg-user bgOverflow">
    <button type="button" style="display:none" class="button btn btn-success" @click="changeLocale">{{language}}
    </button>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console" class="font-family">{{$t("htmlMsg.login.h3")}}</h3>
              <p class="word-p">{{$t("htmlMsg.login.p")}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form">
              <div class="form-group has-eeror">
                <label class="sr-only" for="username">用户名</label>
                <input class="form-control" id="username" v-model="username" type="text"
                       :placeholder="$t('placeholder.login.username')" autocomplete="true" autofocus="autofocus"
                       required="required"
                       aria-required="true">
              </div>
              <div class="form-group">
                <label class="sr-only" for="password">密码</label>
                <input class="form-control" id="pwd" v-model="pwd" type="password"
                       @change="pwdChange"
                       :placeholder="$t('placeholder.login.password')" autocomplete="false" required="required"
                       aria-required="true">
                <input class="form-control" id="password" v-model="password" type="hidden"
                       placeholder="$t('placeholder.password')" autocomplete="false" required="required"
                       aria-required="true">
              </div>
              <div class="">
                <label class="sr-only">验证码</label>
                <input @keyup.enter="toLogin" class="form-captcha"
                       v-model="captcha" id="captcha" autocomplete="false" type="text"
                       :placeholder="$t('placeholder.login.captcha')" required="required" aria-required="true">
                <img alt="暂无验证码" class="code" :src="path" @click="refreshCode($event)">
              </div>
              <div>
                <router-link to="/forgetPwdPre" class="link-lowlight"><p class="forgetPassword">
                  {{$t("htmlMsg.login.forgetPwd")}}</p></router-link>
              </div>
                <button type="button" class="btn button-color" @click="toLogin()">{{$t("htmlMsg.login.btn")}}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <p class="word-footer">{{$t("htmlMsg.login.footerFront")}} <a  href="http://www.miitbeian.gov.cn/" class="word-black">{{$t("htmlMsg.login.footerBehind")}}</a>
    </p>
  </div>
</template>

<script>
import crypto from 'crypto';
import qs from 'qs';
import {login} from '../../service/user';

export default {
  name: 'login',
  data () {
    return {
      language: '中文',
      path: '/api/captcha',
      username: '',
      pwd: '',
      password: '',
      captcha: ''
    };
  },
  methods: {
    changeLocale: function () {
      if (this.language === 'EN') {
        this.language = '中文';
      } else {
        this.language = 'EN';
      }
      let locale = this.$i18n.locale;
      console.log(this.$i18n);
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
    },
    pwdChange: function () {
      const md5 = crypto.createHash('md5');
      md5.update(this.pwd);
      this.password = md5.digest('hex');
    },
    refreshCode: function (e) {
      e.target.src = '/api/captcha?' + new Date().getTime();
    },
    toLogin: function () {
      if (this.username === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.login.username'),
          type: 'warning'
        });
        return;
      }
      if (this.captcha === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.login.captcha'),
          type: 'warning'
        });
        return;
      }
      let loginParams = {username: this.username, password: this.password, captcha: this.captcha};
      login(qs.stringify({
        username: loginParams.username,
        password: loginParams.password,
        captcha: loginParams.captcha
      })).then(response => {
        window.location.href = response.data.redirect_url;
      }).catch(error => {
        this.username = '';
        this.pwd = '';
        this.captcha = '';
        this.path = '/api/captcha?' + new Date().getTime();
        this.$message({
          message: error.response.data.message,
          type: 'warning'
        });
      });
    }
  }
};
</script>

<style scoped>
  .bgOverflow {
    overflow: hidden;
  }

  .button {
    width: 140px;
    float: right
  }

  .forgetPassword {
    float: right;
    margin: 10px;
    font-size: 16px;
    font-weight: 300;
    color: rgb(136, 136, 136);
    line-height: 30px;
    display: inline-block;
  }
</style>
