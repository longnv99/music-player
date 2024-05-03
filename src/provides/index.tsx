'use client';

import {CacheProvider, ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import {FC, PropsWithChildren} from 'react';

import {emotionCache, theme} from '@/libs';

export const Providers: FC<PropsWithChildren> = ({children}) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
