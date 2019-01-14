<template>
  <div>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box" style="max-width: 50%">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.userCenter.h3")}}</h3>
            </div>
          </div>
          <div class="form-bottom">
            <div class="config-group">
              <h4 id="word-h1">{{$t("htmlMsg.userCenter.wordH1")}}</h4>
              <span class="config-value company-name word-p">{{tableData.organization}}</span><router-link class="config-link word-p" :to="{name:'modifyOrganization',query:{organization:tableData.organization,email:tableData.email}}">{{$t("htmlMsg.userCenter.companyName")}}
            </router-link>
              <span class="config-value tel-number word-p">{{tableData.phone}}</span><router-link class="config-link word-p" :to="{name:'modifyPhone',query:{phone:tableData.phone,email:tableData.email}}">{{$t("htmlMsg.userCenter.telNumber")}}</router-link>
            </div>
            <div class="config-group">
              <h4 id="word-h2">{{$t("htmlMsg.userCenter.wordH2")}}</h4>
              <span class="config-value email word-p">{{tableData.email}}</span><router-link class="config-link word-p" :to="{name:'modifyEmailPre',query:{email:tableData.email}}" >{{$t("htmlMsg.userCenter.email")}}</router-link>
              <span class="config-value password word-p">********</span><router-link class="config-link word-p" :to="{name:'modifyPwd',query:{email:tableData.email}}">{{$t("htmlMsg.userCenter.password")}}</router-link></div>
            <div class="config-group">
              <span class="large help-block backToLatest" id="word-h3" @click="backToLatest">{{$t("htmlMsg.userCenter.back")}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {current} from '../../service/user';

export default {
  name: 'UserCenter',
  data () {
    return {
      tableData: {
        username: '',
        password: '',
        phone: '',
        email: '',
        organization: '',
        redirectUrl: ''
      }
    };
  },
  mounted: function () {
    this.getCurrentuser();
    this.getRedirectUrl();
  },
  methods: {
    getCurrentuser: function () {
      current(this.tableData
      ).then(response => {
        this.tableData = response.data;
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'warning'
        });
      }
      );
    },
    getRedirectUrl: function () {
      let searchURL = window.location.search;
      searchURL = searchURL.substring(1, searchURL.length);
      if (searchURL) {
        this.redirect = searchURL.split('&')[0].split('=')[1];
        sessionStorage.setItem('redirectUrl', this.redirect);
      } else {
        sessionStorage.setItem('redirectUrl', '');
      }
    },
    backToLatest: function () {
      this.redirectUrl = sessionStorage.getItem('redirectUrl');
      if (this.redirectUrl && this.redirectUrl !== 'NO_APP_AUTH') {
        window.location.href = this.redirectUrl;
      } else {
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
  @import "./../../styles/form-element.css";
  .backToLatest {
    cursor: pointer;
  }
</style>
