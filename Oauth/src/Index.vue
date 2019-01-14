<template>
  <router-view/>
</template>

<script>

export default {
  name: 'index'
};
</script>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  @import "./styles/form-element.css";
  @import "./styles/style.css";
  @import "./styles/common.css";

  #index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
