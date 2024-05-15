import {ReactJkMusicPlayerLocale} from 'react-jinke-music-player';

export type Config = {
  theme: 'light' | 'dark';
  locale: ReactJkMusicPlayerLocale;
  api: {
    url: string | undefined;
    urlAccounts: string | undefined;
    timeout: number;
  };
  spotify: {
    clientId: string | undefined;
    clientSecret: string | undefined;
  };
};
