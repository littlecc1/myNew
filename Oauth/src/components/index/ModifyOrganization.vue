<template>
  <div>
    <div class="inner-bg">
      <div class="container">
        <div class="col-sm-6 col-sm-offset-3 form-box">
          <div class="form-top">
            <div class="form-top-left">
              <h3 data-i18n="uaa.login.login_to_console">{{$t("htmlMsg.modifyOrganization.h3")}}</h3>
              <p class="word-p">{{$t("htmlMsg.modifyOrganization.p")}}{{this.$route.query.organization}}</p>
            </div>
          </div>
          <div class="form-bottom">
            <form class="login-form" onsubmit="return false;">
              <div class="form-group">
                <label class="sr-only" for="organization">组织</label>
                <input class="form-control input" id="organization" v-model="organization" type="text"
                       :placeholder="$t('placeholder.modifyOrganization.newOrg')" autocomplete="true" autofocus="autofocus" required="required"
                       aria-required="true" @keyup.enter="toSubmit">
              </div>
              <div class="form-group">
                <button type="button" id="btnSave" class="btn button-color"  @click="toSubmit">{{$t("htmlMsg.modifyOrganization.btnSave")}}</button>
                <button type="button" id="btnCancel" class="btn button-color"  @click="callBack">{{$t("htmlMsg.modifyOrganization.btnCancel")}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import {changeOrg} from '../../service/user';

export default {
  name: 'modifyOrganization',
  data () {
    return {
      email: this.$route.query.email,
      oldOrganization: this.$route.query.organization,
      organization: ''
    };
  },
  methods: {
    toSubmit: function () {
      if (this.organization === '') {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyOrganization.newOrg'),
          type: 'warning'
        });
        return;
      }
      if (this.oldOrganization === this.organization) {
        this.$message({
          message: this.$i18n.t('jsMsg.modifyOrganization.sameOrg'),
          type: 'warning'
        });
        this.organization = '';
        return;
      }
      changeOrg(qs.stringify({
        email: this.email,
        org: this.organization
      })).then(response => {
        this.$router.push({name: 'userCenter'});
      }).catch(error => {
        this.$message({
          message: error.response.data,
          type: 'warning'
        });
        this.organization = '';
      });
    },
    callBack: function () {
      this.$router.push('/userCenter');
    }
  }
};
</script>

<style scoped>

</style>
