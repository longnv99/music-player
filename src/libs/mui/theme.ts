import {config} from '@/config';
import {THEME_MODE} from '@/constants';
import {defaultDarkTheme} from './defaultDarkTheme';
import {defaultLightTheme} from './defaultLightTheme';
import {generateComponentsStyles} from './components';
import {createTheme as createMuiTheme} from '@mui/material';

const createTheme = () => {
  const theme =
    config.theme === THEME_MODE.DARK ? defaultDarkTheme : defaultLightTheme;

  return createMuiTheme(theme, {
    components: generateComponentsStyles(createMuiTheme(theme)),
  });
};

export const theme = createTheme();
