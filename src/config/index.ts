import {LOCALE, THEME_MODE} from '@/constants';
import {Config} from '@/types/config';

export const config: Config = {
  theme: THEME_MODE.LIGHT,
  locale: LOCALE.en_US,
  api: {
    url: process.env.NEXT_PUBLIC_SPOTIFY_API,
    urlAccounts: process.env.NEXT_PUBLIC_SPOTIFY_ACCOUNTS_API,
    timeout: 60 * 1000,
  },
  spotify: {
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  },
};
