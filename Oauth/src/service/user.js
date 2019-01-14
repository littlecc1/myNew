import axios from 'axios';

export function login (data) {
  return axios.post('/api/login', data);
}
export function userResetPassword (data) {
  return axios.put('/system/user/resetPassword', data);
}
export function expiringCodeContext (data) {
  return axios.get('/system/mail/expiringCodeContext', data);
}
export function emailResetPassword (data) {
  return axios.post('/system/mail/resetPassword', data);
}
export function logout () {
  // 转为form形式提交
  const form = document.createElement('form');
  form.setAttribute('method', 'get');
  form.setAttribute('action', '/api/logout');
  document.body.appendChild(form);
  form.submit();
}
export function current (data) {
  return axios.get('/system/user/current', data);
}
export function changePassword (data) {
  return axios.put('/system/user/changePassword', data);
}
export function changePhone (data) {
  return axios.put('/system/user/changePhone', data);
}
export function changeOrg (data) {
  return axios.put('/system/user/changeOrg', data);
}
export function checkEmail (data) {
  return axios.get('/system/user/checkEmail', data);
}
export function changeEmail (data) {
  return axios.post('/system/mail/changeEmail', data);
}
export function applicationCurrent (data) {
  return axios.get('/system/user/application/current', data);
}
export function changeEmailByUser (data) {
  return axios.put('/system/user/changeEmail', data);
}
