import {PaletteOptions, ThemeOptions} from '@mui/material';

import {defaultTheme} from './defaultTheme';

/**
 * Light theme color palette
 */
const palette: PaletteOptions = {
  mode: 'dark',
  black: '#000000',
  white: '#FFFFFF',
} as const;

export const defaultLightTheme: ThemeOptions = {
  ...defaultTheme,
  palette,
};
