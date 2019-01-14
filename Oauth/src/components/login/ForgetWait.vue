<template>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.forgetWait.h3")}}</h3>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form">
              <div class="form-group">
                <p class="word-p" v-show="email">{{$t("htmlMsg.forgetWait.pFront")}}{{email}}，{{$t("htmlMsg.forgetWait.pBehind")}}</p>
                <p class="word-p" v-show="!email">{{$t("htmlMsg.forgetWait.resetSuccess")}}</p>
               <button type="button" class="btn btn-success button-color" @click="callback">{{$t("htmlMsg.forgetWait.btnSave")}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'forgetWait',
  data () {
    return {
      newHtml: '',
      email: this.$route.params.email,
      password: this.$route.params.password
    };
  },
  mounted: function () {
    this.show();
  },
  methods: {
    callback: function () {
      window.location.href = '/login.html';
    },
    show: function () {
      if (this.password) {
        this.email = '';
      }
    }

  }
};
</script>

<style scoped>

</style>
