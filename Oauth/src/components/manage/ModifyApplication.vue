<template>
  <div>
    <el-row >
      <el-col :span="6" :offset="9" class="manager-form-top">
        <h1 class="manager-form-title">Oauth应用注册</h1>
      </el-col>
    </el-row>
      <el-form :model="form" :rules="rules" ref="form" class="demo-form">
        <el-row>
          <el-col :span="6" :offset="9" class="manager-form-bottom">
        <el-form-item prop="name">
          <el-input placeholder="请输入应用名称" v-model="form.additionalInformationStr.name"></el-input>
        </el-form-item>
        <el-form-item prop="mainUrl">
          <el-input placeholder="请输入主页URL" v-model="form.additionalInformationStr.url"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入应用描述" v-model="form.additionalInformationStr.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item prop="webServerRedirectUriStr">
          <el-input placeholder="请输入授权回调URL" v-model="form.webServerRedirectUriStr" @keyup="onSubmit"></el-input>
        </el-form-item>
          <el-row>
            <el-col :offset="8">
              <el-form-item>
              <el-button type="primary" @click="onSubmit()">注册</el-button>
              <el-button @click="backToCenter">取消</el-button>
            </el-form-item>
            </el-col>
          </el-row>
          </el-col>
        </el-row>
      </el-form>
  </div>
</template>

<script>
import {addApplication, modifyApplication} from '../../service/manager';
export default {
  name: 'modifyApplication',
  data () {
    return {
      form: {
        resourceIdsStr: 'resource_user_info',
        scopeStr: 'read,write',
        authorizedGrantTypeStr: 'password,authorization_code,refresh_token',
        webServerRedirectUriStr: '',
        authoritiesStr: 'ROLE_ADMIN,ROLE_USER',
        accessTokenValidity: 7200,
        refreshTokenValidity: 5184000,
        autoApproveScopes: '.*',
        additionalInformationStr: {
          name: '',
          Url: '',
          description: ''
        },
        clientId: Math.random().toString(36).substr(2),
        clientSecret: Math.random().toString(36).substr(2)
      },
      rules: {
        webServerRedirectUriStr: [
          {required: true, message: '授权回调URL不能为空', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '应用名不能为空', trigger: 'blur'}
        ],
        mainUrl: [
          {required: true, message: '主页URL不能为空', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    onSubmit: function () {
      let reg = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
      if (!reg.test(this.form.additionalInformationStr.url)) {
        this.$message({
          message: '主页URL不合法！请重新输入',
          type: 'warning'
        });
        this.form.additionalInformationStr.url = '';
        return;
      }
      if (!reg.test(this.form.webServerRedirectUriStr)) {
        this.$message({
          message: '授权回调URL不合法！请重新输入',
          type: 'warning'
        });
        this.form.webServerRedirectUriStr = '';
        return;
      }
      this.form.additionalInformationStr = JSON.stringify(this.form.additionalInformationStr);
      if (!this.$route.params.form.id) {
        addApplication(this.form)
          .then(response => {
            this.$router.push('/application');
            this.form = '';
          }).catch(response => {
            this.$message({
              message: '添加应用失败！',
              type: 'warning'
            });
            this.form = '';
          });
      } else {
        modifyApplication(this.form)
          .then(response => {
            // console.log(response)
            this.form = '';
            this.$router.push('/');
          }).catch(response => {
            this.$message({
              message: '修改应用失败！',
              type: 'warning'
            });
            this.form = '';
          });
      }
    },
    backToCenter: function () {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
</style>
