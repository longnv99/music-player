import {Components, Theme} from '@mui/material';

export const generateComponentsStyles = (theme: Theme): Components<Theme> => ({
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
  },
});
