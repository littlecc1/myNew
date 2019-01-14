// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Index from './Index';
import Loading from './components/index/Loading';
import router from './router/main';
import VueI18n from 'vue-i18n';
import VueResource from 'vue-resource';
import './service';
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
Vue.use(VueResource);
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || navigator.language || 'zh-CN',
  // locale: 'zh-CN', // 语言标识
  messages: {
    'zh-CN': require('./common/lang/zh_cn'),
    'en-US': require('./common/lang/en')
  }
});
Vue.component('component-loading', Loading);
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  i18n,
  components: {Index},
  template: '<Index/>'
});
