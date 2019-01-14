// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LoginRouter from './LoginRouter';
import router from './router/login';
import Loading from './components/index/Loading';
// import './service';
import {
  MessageBox,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import BootstrapVue from 'bootstrap-vue';

// Vue.use(BootstrapVue);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.use(VueI18n);
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || navigator.language || 'zh-CN',
  // locale: 'zh-CN',
  messages: {
    'zh-CN': require('./common/lang/zh_cn'),
    'en-US': require('./common/lang/en')
  }
});
Vue.component('loading', Loading);
/* eslint-disable no-new */
new Vue({
  el: '#login',
  router,
  i18n,
  components: {LoginRouter},
  template: '<LoginRouter/>'
});
