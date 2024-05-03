import createCache from '@emotion/cache';

const createEmotionCache = () => {
  return createCache({key: 'mui'});
};

export const emotionCache = createEmotionCache();
