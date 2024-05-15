import {AxiosRequestConfig} from 'axios';

import clientInstance from '@/libs/axios';

export const getCategories = (): Promise<void> => {
  const request: AxiosRequestConfig = {
    url: '/v1/browse/categories',
    method: 'GET',
    params: {
      locale: 'vi_VN',
    },
  };

  return clientInstance(request).then(response => {
    console.log('debug-categories', response.data);
  });
};

// 31ecabt3qd3mskwwlq4z4sb54udy
