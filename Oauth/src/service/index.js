import axios from 'axios';
import {logout} from './user';

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    logout();
  }
  // return Promise.reject(error);
});
