import {ThemeOptions} from '@mui/material';

export const defaultTheme: ThemeOptions = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
};
