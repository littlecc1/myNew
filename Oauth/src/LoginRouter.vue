<template>
  <router-view/>
</template>

<script>
export default {
  name: 'loginRouter',
  mounted: function () {
    if (this.$i18n.locale === 'zh-CN') {
      document.title = '瀚思统一认证中心';
    } else {
      document.title = 'Hansight Authorization Center';
    }
  }
};
</script>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  @import "./styles/form-element.css";
  @import "./styles/style.css";
  @import "./styles/common.css";

#login {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
