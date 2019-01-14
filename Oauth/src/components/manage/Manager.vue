<template>
  <el-container>
    <el-header>
      <el-header><el-menu
        mode="horizontal"
        background-color="#446796"
        text-color="#fff"
        active-text-color="white">
        <img src="../../assets/2.png" style="float: left;height: 60px">
        <el-menu-item index="1"><router-link class="noLine" to="/">用户管理</router-link></el-menu-item>
        <el-menu-item index="2"><router-link class="noLine" to="/application">授权管理</router-link></el-menu-item>
        <el-menu-item index="3" style="float: right"><i class="el-icon-setting"></i><router-link to="/userMsg" class="manager-Name">{{username}}</router-link></el-menu-item>
      </el-menu>
      </el-header>
    </el-header>
        <el-main>
         <div class="bg-manager bgOverflow">
          <div >
            <router-view></router-view>
          </div>
        </div>
        </el-main>
    <el-footer> <p class="word-footer" align="center">copyright @ 2016 北京瀚思安信科技有限公司 All right reserved 京ICP备15051347号-1</p></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Manager',
  data () {
    return {
      username: 'admin'
    };
  },
  methods: {
  }
};
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #446796;
    color: #333;
    text-align: left;
    line-height: 10vh;
    overflow: hidden;
  }

  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    height: 80vh;
    padding: 0;
  }

  .noLine {
    text-decoration:none;  /*超链接无下划线*/
  }
 .manager-Name {
    text-decoration: none;
    height:10vh;
    width: 100px
  }

</style>
