<template>
  <div>
    <el-row >
      <el-col :span="6" :offset="9" class="manager-form-top">
        <h1 class="manager-form-title">用户信息管理</h1>
      </el-col>
    </el-row>
    <el-form :model="form" :rules="rules" label-position="right" ref="form" class="demo-form">
      <el-row>
        <el-col :span="6" :offset="9" class="manager-form-bottom">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="组织" >
            <el-input v-model="form.organization"></el-input>
          </el-form-item>
          <el-row>
            <el-col :offset="8">
              <el-form-item>
                <el-button type="primary" @click="onSubmit()">确定</el-button>
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
import {modifyCurrentUser} from '../../service/manager';

export default {
  name: 'userMsg',
  data () {
    return {
      form: {
        username: '',
        password: '',
        phone: '',
        email: '',
        organization: '',
        creatorId: '',
        expireDate: ''
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 3, max: 20, message: '长度至为3个-20个字符', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '号码不能为空', trigger: 'blur'},
          {min: 11, max: 11, message: '请输入正确的号码', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱地址不能为空', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      }
    };
  },
  // mounted:function(){
  //
  // },
  methods: {
    backToCenter: function () {
      this.$router.push('/');
    },
    onSubmit: function () {
      modifyCurrentUser(this.form)
        .then(response => {
          this.$message({
            message: '修改用户成功',
            type: 'success'
          });
          // todo thisform
        }).catch(response => {
          this.$message({
            message: '修改用户失败',
            type: 'warning'
          });
          // this.form = this.$route.params.form;
        });
    }
  }
};
</script>

<style scoped>

</style>
