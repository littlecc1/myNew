import Vue from 'vue';
import Router from 'vue-router';

const Manager = resolve => require(['@/components/manage/Manager'], resolve);
const User = resolve => require(['@/components/manage/User'], resolve);
const UserMsg = resolve => require(['@/components/manage/UserMsg'], resolve);
const Application = resolve => require(['@/components/manage/Application'], resolve);
const ModifyUser = resolve => require(['@/components/manage/ModifyUser'], resolve);
const ModifyApplication = resolve => require(['@/components/manage/ModifyApplication'], resolve);

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'manager',
      component: Manager,
      children: [
        {path: '/', component: User},
        {path: '/userMsg', component: UserMsg},
        {path: '/application', component: Application},
        {path: '/modifyUser', name: 'modifyUser', component: ModifyUser},
        {path: '/application/modify', name: 'modify', component: ModifyApplication}
      ]
    },
    {
      path: '*',
      component: User,
      redirect: '/'
    },
    {
      path: '/application',
      component: Application
      // children:[
      //   {path:'/',component:HelloWorld}
      // ]
    }
  ]
});
