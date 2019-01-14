<template>
  <div align="center"  class="bg-user bgOverflow">
  <div >
        <router-view></router-view>
  </div>
          <p class="word-footer">{{$t("htmlMsg.login.footerFront")}} <a href="http://www.miitbeian.gov.cn/" class="word-black">{{$t("htmlMsg.login.footerBehind")}}</a></p>
  </div>
</template>

<script>
export default {
  name: 'common',
  data () {
    return {
    };
  },
  methods: {
  }

};
</script>

<style scoped>

  .bgOverflow {
    overflow: hidden;
  }
</style>
