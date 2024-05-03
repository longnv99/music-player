import {SxProps} from '@mui/material';

export const styleSets = {
  /**
   * Render an ellipsis "..." to represent the clipped text
   * @param lines number of lines
   */
  lineCamp: (lines: number): SxProps => {
    if (lines === 1) {
      return {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      };
    }
    return {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: '-webkit-box',
      // allows limiting of the contents of a block container to the specified number of lines
      // -Although it is a webkit prefix, it works with chrome etc. because it is implemented with the same name in rendering engines other than safari.
      WebkitLineClamp: `${lines}`,
      WebkitBoxOrient: 'vertical',
      whiteSpace: 'normal',
    } as SxProps;
  },

  /**
   * Hide vertical and horizontal scroll bars
   */
  hideScrollbar(): SxProps {
    return {
      scrollbarWidth: 'none',
      '::-webkit-scrollbar': {
        height: 0,
        width: 0,
        display: 'none',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
      },
    } as SxProps;
  },
};
