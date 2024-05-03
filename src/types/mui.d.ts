import '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // remove breakpoint default
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    // custom breakpoint
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface Palette {
    black?: string;
    white?: string;
  }

  interface PaletteOptions {
    black?: Palette['black'];
    white?: Palette['white'];
  }
}
