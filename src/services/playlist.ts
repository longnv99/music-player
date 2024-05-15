import {AxiosRequestConfig} from 'axios';

import clientInstance from '@/libs/axios';

/**
 * get featured playlist
 */
export const getFeaturedPlaylists = (): Promise<void> => {
  const request: AxiosRequestConfig = {
    url: '/v1/browse/featured-playlists',
    method: 'GET',
    params: {
      locale: 'vi_VN',
      limit: 10,
      offset: 5,
    },
  };

  return clientInstance(request).then(response => {
    console.log('debug-featured-playlist', response.data);
  });
};

/**
 * get playlists by category
 * @param categoryId
 */
export const getPlaylistsByCategory = (categoryId: string): Promise<void> => {
  const request: AxiosRequestConfig = {
    url: `v1/browse/categories/${categoryId}/playlists`,
    method: 'GET',
    params: {
      limit: 10,
      offset: 5,
    },
  };

  return clientInstance(request).then(response => {
    console.log('debug-playlist-by-category', response.data);
  });
};

/**
 * get playlist items by tracks url
 * @param trackUrl
 */
export const getPlaylistByTracksUrl = (trackUrl: string): Promise<void> => {
  const request: AxiosRequestConfig = {
    url: trackUrl,
    method: 'GET',
    params: {
      limit: 10,
      offset: 5,
    },
  };

  return clientInstance(request).then(response => {
    console.log('debug-playlist-items', response.data);
  });
};
