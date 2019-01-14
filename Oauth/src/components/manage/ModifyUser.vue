<template>
 <div>
   <el-row >
     <el-col :span="6" :offset="9" class="manager-form-top">
       <h1 class="manager-form-title">注册用户信息</h1>
     </el-col>
   </el-row>
   <el-form :model="form" :rules="rules" ref="form" class="demo-form">
     <el-row>
       <el-col :span="6" :offset="9" class="manager-form-bottom">
         <el-form-item prop="username">
           <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
         </el-form-item>
         <el-form-item prop="password">
           <el-input placeholder="请输入密码" v-model="form.password" type="password"></el-input>
         </el-form-item>
         <el-form-item prop="phone">
           <el-input placeholder="请输入联系方式" v-model="form.phone"></el-input>
         </el-form-item>
         <el-form-item prop="email">
           <el-input placeholder="请输入邮箱" v-model="form.email"></el-input>
         </el-form-item>
         <el-form-item >
           <el-input placeholder="请输入组织" v-model="form.organization"></el-input>
         </el-form-item>
         <el-form-item >
           <el-input placeholder="请输入关联模式" v-model="form.creatorId"></el-input>
         </el-form-item>
         <el-form-item label="失效时间">
           <el-col :span="11">
             <el-date-picker type="date" placeholder="选择日期" v-model="form.expireDate"
                             style="width: 100%;"></el-date-picker>
           </el-col>
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
import {modifyUser, addUser} from '../../service/manager';
export default {
  name: 'modifyUser',
  data () {
    return {
      btmsg: this.$route.params.form.id ? '确认修改' : '立即添加',
      form: {
        id: this.$route.params.form.id,
        username: this.$route.params.form.username,
        password: this.$route.params.form.password,
        phone: this.$route.params.form.phone,
        email: this.$route.params.form.email,
        organization: this.$route.params.form.organization,
        creatorId: this.$route.params.form.creatorId,
        expireDate: this.$route.params.form.expireDate
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '号码不能为空', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱地址不能为空', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      }
    };
  },
  // mounted:function(){
  //   if(this.$route.params.form.id === ''){
  //     btmsg:'立即创建'
  //   }else{
  //     btmsg:'确认修改'
  //   }
  // },
  methods: {
    onSubmit: function () {
      let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if (!reg.test(this.form.phone)) {
        this.$message({
          message: '联系方式不合法！请重新输入',
          type: 'warning'
        });
        this.form.phone = '';
        return;
      }
      reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.~!@#$%^&*?()_+-,.\+\*\-:;^_`]+$)[,\.~!@#$%^&*?()_+-,.\+\*\-:;^_`0-9A-Za-z]{8,20}$/;
      if (!reg.test(this.form.password)) {
        this.$message({
          message: '密码为8~20位数字,英文,符号至少两种组合的字符！',
          type: 'warning'
        });
        this.form.password = '';
        return;
      }
      if (this.$route.params.form.id) {
        modifyUser(this.form)
          .then(response => {
            // console.log(response)
            this.form = '';
            this.$router.push('/');
          }).catch(response => {
            this.$message({
              message: '修改用户失败',
              type: 'warning'
            });
            this.form = '';
          });
      } else {
        addUser(this.form)
          .then(response => {
            // console.log(response)
            this.form = '';
            this.$router.push('/');
          }).catch(response => {
            this.$message({
              message: '添加用户失败',
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
