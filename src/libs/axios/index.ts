import axios from 'axios';
import Cookies from 'js-cookie';

import {config} from '@/config';

const clientInstance = axios.create({
  baseURL: config.api.url,
  timeout: config.api.timeout,
});

clientInstance.interceptors.request.use(
  function (config) {
    const token = Cookies.get('connect.sid');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

clientInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default clientInstance;
