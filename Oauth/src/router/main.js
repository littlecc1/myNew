import Vue from 'vue';
import Router from 'vue-router';

const UserCenter = resolve => require(['@/components/index/UserCenter'], resolve);
const ModifyEmailPre = resolve => require(['@/components/index/ModifyEmailPre'], resolve);
const ModifyEmail = resolve => require(['@/components/index/ModifyEmail'], resolve);
const ModifyPwd = resolve => require(['@/components/index/ModifyPwd'], resolve);
const ModifyPhone = resolve => require(['@/components/index/ModifyPhone'], resolve);
const ModifyOrganization = resolve => require(['@/components/index/ModifyOrganization'], resolve);
const ModifyWait = resolve => require(['@/components/index/ModifyWait'], resolve);
const ApplicationCenter = resolve => require(['@/components/index/ApplicationCenter'], resolve);
const Loading = resolve => require(['@/components/index/Loading'], resolve);
const Common = resolve => require(['@/components/index/Common'], resolve);
// const Login = resolve => require(['@/components/login/Login'], resolve);

Vue.use(Router);

/* eslint-disable no-new */
export default new Router({
  routes: [
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/',
      component: Common,
      children: [
        {
          path: '/modifyEmailPre',
          name: 'modifyEmailPre',
          component: ModifyEmailPre
        },
        {path: '/modifyEmail', name: 'modifyEmail', component: ModifyEmail},
        {path: '/modifyPwd', name: 'modifyPwd', component: ModifyPwd},
        {path: '/modifyPhone', name: 'modifyPhone', component: ModifyPhone},
        {path: '/modifyOrganization', name: 'modifyOrganization', component: ModifyOrganization},
        {path: '/modifyWait', name: 'modifyWait', component: ModifyWait},
        {path: '/userCenter', name: 'userCenter', component: UserCenter},
        {path: '/', name: 'applicationCenter', component: ApplicationCenter}
      ]
    },
    {
      path: '*',
      name: 'login',
      redirect: '/'
    }
  ]
});
