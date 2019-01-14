import Vue from 'vue';
import Router from 'vue-router';

const Login = resolve => require(['@/components/login/Login'], resolve);
const ForgetPwdPre = resolve => require(['@/components/login/ForgetPwdPre'], resolve);
const ForgetPwd = resolve => require(['@/components/login/ForgetPwd'], resolve);
const ForgetWait = resolve => require(['@/components/login/ForgetWait'], resolve);
const Common = resolve => require(['@/components/index/Common'], resolve);

Vue.use(Router);

/* eslint-disable no-new */
export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Common,
      children: [
        {
          path: '/forgetPwdPre',
          component: ForgetPwdPre
        },
        {path: '/forgetPwd', component: ForgetPwd},
        {path: '/forgetWait', name: 'forgetWait', component: ForgetWait}
      ]
    },
    {
      path: '*',
      name: 'login',
      redirect: '/'
    }
  ]
});
