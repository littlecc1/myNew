<template>
  <div>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.modifyWait.h3")}}</h3>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form">
              <div class="form-group">
                <p class="word-p" v-show="!modifyStatus & successStatus">{{$t("htmlMsg.modifyWait.p1Front")}}{{email}}，{{$t("htmlMsg.modifyWait.p1Behind")}}</p>
                <p class="word-p" v-show="modifyStatus & successStatus">{{$t("htmlMsg.modifyWait.p2")}}</p>
                <p class="word-p" v-show="!successStatus">{{$t("htmlMsg.modifyWait.p3")}}！</p>
                <button v-show="modifyStatus" type="button" class="btn button-color" @click="backToLogin">{{$t("htmlMsg.modifyWait.btnSave")}}</button>
                <button v-show="!modifyStatus" type="button" class="btn button-color" @click="backToCenter">{{$t("htmlMsg.modifyWait.btnSave")}}</button>
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
import {logout, expiringCodeContext, changeEmailByUser} from '../../service/user';

export default {
  name: 'modifyWait',
  data () {
    return {
      newHtml: '',
      email: this.$route.query.email,
      oldEmail: this.$route.query.password,
      modifyStatus: '',
      successStatus: true
    };
  },
  mounted: function () {
    this.checkCode();
  },
  methods: {
    backToLogin: function () {
      logout();
    },
    backToCenter: function () {
      this.$router.push('/userCenter');
    },
    checkCode: function () {
      var form;// 用来接收和传输三个数据
      let searchURL = window.location.search;
      searchURL = searchURL.substring(1, searchURL.length);
      if (searchURL === '') {
        return;
      }
      this.email = searchURL.split('&')[1].split('=')[1];// 获取&后面的邮箱地址
      var expiringCode = searchURL.split('&')[0].split('=')[1];
      if (this.expiringCode === '') {
        return;
      }
      let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!reg.test(this.expiringCode)) {
        expiringCodeContext({
          params: {
            email: this.email,
            code: expiringCode
          }
        }).then(response => {
          form = response.data;
          changeEmailByUser(qs.stringify({
            email: form.email,
            newEmail: form.new_email,
            expiringCode: expiringCode
          })).then(response => {
            this.email = '';
            this.successStatus = false;
          }).catch(error => {
            this.$message({
              message: error.response.data,
              type: 'warning'
            });
          });
        }).catch(error => {
          this.modifyStatus = true;
          this.$message({
            message: error.response.data,
            type: 'warning'
          });
        });
      }
    }
  }
};
</script>

<style scoped>

</style>
