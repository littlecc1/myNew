<template>
  <div>
    <nav class="navbar navbar-default" role="navigation" style="float: right">
      <div class="container-fluid">
        <ul class="nav nav-tabs" >
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">{{this.userData.username}}
              <span class="caret"></span></a>
            <ul class="dropdown-menu" id="menu">
              <li ><a class="list pointer word-p " style="color: rgb(136, 136, 136);"  @click="backToCenter">{{$t("htmlMsg.applicationCenter.li1")}}</a></li>
              <li ><a class="list pointer word-p " style="color: rgb(136, 136, 136);" @click="backToLogin">{{$t("htmlMsg.applicationCenter.li2")}}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box" style="max-width: 75%">
          <div class="form-top" id="form-applicationTop">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.applicationCenter.application")}}</h3>
            </div>
          </div>
            <div class="card card-table">
                <table class="table table-striped table-hover table-margin">
                  <thead style="padding-left:25px">
                  <tr>
                    <th style="width:45%;"><p id="word-h1">{{$t("htmlMsg.applicationCenter.wordH1")}}</p></th>
                    <th style="width:35%;"><p id="word-h2">{{$t("htmlMsg.applicationCenter.wordH2")}}</p></th>
                    <th style="width:20%;"></th>
                  </tr>
                  </thead>
                  <tbody style="padding-left:25px">
                  <tr v-for="tableData in tableDatas" v-bind:key="tableData.clientId">
                    <td><p class="word-msg">{{tableData.additionalInformationStr.name }}</p></td>
                    <td><p class="word-msg">{{tableData.lastLoginTime | data}}</p></td>
                    <td><button class="btn button-color"  id="btnGo" @click="toApplication(tableData.additionalInformationStr.homepageUrl)">{{$t("htmlMsg.applicationCenter.btnGo")}}</button></td>
                  </tr>
                  </tbody>
                </table>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.min.js';
import {logout, applicationCurrent, current} from '../../service/user';
export default {
  name: 'applicationCenter',
  data () {
    return {
      userData: '',
      tableData: {
        lastLoginTime: '',
        additionalInformationStr: {
          name: '',
          homepageUrl: ''
        }
      },
      tableDatas: {}
    };
  },
  filters: {// 时间过滤择器
    data: function (input) {
      let d = new Date(input);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
      let hour = d.getHours();
      let minutes = d.getMinutes();
      let seconds = d.getSeconds();
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    }
  },
  mounted: function () {
    this.getCurrentuser();
    this.getCurrentuserApplication();
    this.isHaveApplication();
  },
  methods: {
    isHaveApplication: function () {
      let searchURL = window.location.search;
      searchURL = searchURL.substring(1, searchURL.length);
      let error = searchURL.split('&')[0].split('=')[1];
      if (error === 'NO_APP_AUTH') {
        this.$message({
          message: this.$i18n.t('jsMsg.applicationCenter.noApplication'),
          type: 'warning'
        });
      }
    },
    getCurrentuserApplication: function () {
      applicationCurrent(this.tableDatas
      ).then(response => {
        this.tableDatas = response.data;
        for (let i = 0; i < response.data.length; i++) {
          this.tableDatas[i].additionalInformationStr = JSON.parse(response.data[i].additionalInformationStr);
        }
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'warning'
        });
      });
    },
    getCurrentuser: function () {
      current(this.userData
      ).then(response => {
        this.userData = response.data;
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'warning'
        });
      });
    },
    backToCenter: function () {
      this.$router.push({name: 'userCenter'});
    },
    backToLogin: function () {
      logout();
    },
    toApplication: function (url) {
      window.location.href = url;
    }
  }
};
</script>
<style scoped>
  .pointer {
    width: 200px;
    cursor: pointer;
  }
  #menu {
    background-color: rgba(255,255,255,.2);
    padding: 5px 0 5px 0;
  }
  .list {
    padding: 0 0 0 10px;
  }
  #btnGo {
    margin-top: 10px;
    height:30px;
    line-height:30px;
  }
  .table-margin {
    margin-bottom: 0;
  }
  .word-msg {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 300;
    color: rgb(136, 136, 136);
    line-height: 30px;
    width: 100%;
    display: inline-block;
  }
</style>
