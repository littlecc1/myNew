<template>
  <div>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.modifyPwd.h3")}}</h3>
              <p class="word-p">{{$t("htmlMsg.modifyPwd.p")}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form" onsubmit="return false;">
              <div class="form-group">
                <label class="sr-only" for="oldPwd">当前密码</label>
                <input class="form-control input" id="oldPwd"
                       v-model="oldPwd" type="password"
                       :placeholder="$t('placeholder.modifyPwd.pwd')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true">
                <label class="sr-only" for="pwd">新密码</label>
                <input class="form-control input" id="pwd" v-model="pwd"
                       type="password"
                       :placeholder="$t('placeholder.modifyPwd.newPwd')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
                <label class="sr-only" for="password">确认新密码</label>
                <input class="form-control input" id="password"
                       v-model="password" type="password"
                       :placeholder="$t('placeholder.modifyPwd.confirmNewPwd')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
              </div>
              <div class="form-group">
                <button type="button" id="btnSave" class="btn button-color" @click="toSubmit">{{$t("htmlMsg.modifyPwd.btnSave")}}</button>
                <button type="button" id="btnCancel" class="btn button-color" @click="callBack">{{$t("htmlMsg.modifyPwd.btnBack")}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto';
import qs from 'qs';
import {changePassword} from '../../service/user';

export default {
  name: 'modifyPwd',
  data () {
    return {
      email: this.$route.query.email,
      pwd: '',
      password: '',
      oldPwd: ''
    };
  },
  methods: {
    clear: function () {
      this.oldPwd = '';
      this.pwd = '';
      this.password = '';
    },
    encryptPassword: function (pwd) {
      const md5 = crypto.createHash('md5');
      md5.update(pwd);
      let md5Pwd = md5.digest('hex');
      return md5Pwd;
    },
    toSubmit: function () {
      if (this.pwd === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyPwd.newPwd'),
          type: 'warning'
        });
        return;
      }
      let reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.~!@#$%^&*?()_+-,.\+\*\-:;^_`]+$)[,\.~!@#$%^&*?()_+-,.\+\*\-:;^_`0-9A-Za-z]{8,20}$/;
      // let reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,~!@#$%^&*?()_+-,.\-:;`]+$)[,~!@#$%^&*?()_+-,.\-:;`0-9A-Za-z]{8,20}$/;
      if (!reg.test(this.pwd)) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyPwd.checkPwd'),
          type: 'warning'
        });
        this.pwd = '';
        this.password = '';
        return;
      }
      if (this.pwd !== '' && this.password === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyPwd.confirmNewPwd'),
          type: 'warning'
        });
        return;
      }
      if (this.password !== this.pwd) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyPwd.difference'),
          type: 'warning'
        });
        this.clear();
      }
      if (this.pwd === this.password && this.pwd !== '') {
        let md5Pwd = this.encryptPassword(this.pwd);
        let md5OldPwd = this.encryptPassword(this.oldPwd);
        this.email = this.$route.query.email;
        // email, originPwd, newPwd,
        changePassword(qs.stringify({
          email: this.email,
          originPwd: md5OldPwd,
          newPwd: md5Pwd
        })).then(response => {
          if (response.status === 400) { // axios 400走then，then 报错才走catch（400为输入数据错）
            this.$message({
              message: response.data,
              type: 'warning'
            });
            this.clear();
          } else {
            this.$router.push({name: 'userCenter'});
          }
        }).catch(error => {
          console.log(error);
          this.$message({
            message: this.$i18n.t('jsMsg.modifyPwd.errorPwd'),
            type: 'warning'
          });
          this.clear();
        });
      }
    },
    callBack: function () {
      this.$router.push('/userCenter');
    }
  }
};
</script>

<style scoped>

</style>
