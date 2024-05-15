import {AxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';
import qs from 'qs';

import {config} from '@/config';
import clientInstance from '@/libs/axios';

/**
 * generate token spotify
 * @returns token
 */
export const generateToken = (): Promise<void> => {
  const token = Cookies.get('connect.sid');
  if (token) return Promise.resolve();

  const encodeToBase64 = btoa(
    `${config.spotify.clientId}:${config.spotify.clientSecret}`,
  );

  const request: AxiosRequestConfig = {
    url: `${config.api.urlAccounts}/api/token`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${encodeToBase64}`,
    },
    data: qs.stringify({
      grant_type: 'client_credentials',
    }),
  };

  return clientInstance(request).then(response => {
    Cookies.set('connect.sid', response.data.access_token);
  });
};

/**
 * get my profile
 * @returns my profile
 */
export const getProfile = (): Promise<void> => {
  const request: AxiosRequestConfig = {
    url: '/v1/me',
    method: 'GET',
  };

  return clientInstance(request).then(response => {
    console.log('debug-profile', response.data);
  });
};
