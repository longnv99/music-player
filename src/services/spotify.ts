import {AxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';

import clientInstance from '@/libs/axios';

export const getPlaylist = (): Promise<void> => {
  const token = Cookies.get('connect.sid');
  const request: AxiosRequestConfig = {
    url: '/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return clientInstance(request).then(response => {
    console.log('debug', response);
  });
};
