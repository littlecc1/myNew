import axios from 'axios';

export function modifyCurrentUser (data) {
  return axios.put('/system/user', data);
}
export function getApplication (data) {
  return axios.get('/system/application', data);
}

export function modifyUser (data) {
  return axios.put('/system/user', data);
}
export function addUser (data) {
  return axios.post('/system/user', data);
}
export function modifyApplication (data) {
  return axios.post('/system/application', data);
}
export function addApplication (data) {
  return axios.post('/system/application', data);
}
