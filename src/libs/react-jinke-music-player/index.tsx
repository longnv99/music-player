import {
  ReactJkMusicPlayerIcon,
  ReactJkMusicPlayerProps,
} from 'react-jinke-music-player';

import {
  IconClose,
  IconDelete,
  IconDestroy,
  IconDownload,
  IconLoading,
  IconLoop,
  IconLyric,
  IconMute,
  IconNext,
  IconOrder,
  IconOrderLoop,
  IconPause,
  IconPlay,
  IconPlayLists,
  IconPrev,
  IconReload,
  IconShuffle,
  IconToggle,
  IconVolume,
} from '@/components/atoms';
import {config} from '@/config';

const iconJKMusic: ReactJkMusicPlayerIcon = {
  pause: <IconPause width={40} height={40} />,
  play: <IconPlay width={40} height={40} />,
  destroy: <IconDestroy />,
  close: <IconClose />,
  delete: <IconDelete />,
  download: <IconDownload />,
  toggle: <IconToggle />,
  lyric: <IconLyric />,
  volume: <IconVolume />,
  mute: <IconMute />,
  next: <IconNext />,
  prev: <IconPrev />,
  playLists: <IconPlayLists width={22} height={22} />,
  reload: <IconReload />,
  loop: <IconLoop />,
  order: <IconOrder />,
  orderLoop: <IconOrderLoop />,
  shuffle: <IconShuffle />,
  loading: <IconLoading />,
};

export const optionsJKMusic: Omit<ReactJkMusicPlayerProps, 'audioLists'> = {
  // default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  // if you want dynamic change current play audio you can change it [type `number` default `0`]
  playIndex: 0,

  // custom icon
  icon: iconJKMusic,

  // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
  theme: 'auto',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  // Ref: https://github.com/STRML/react-draggable#draggable-api
  bounds: 'body',

  /**
   * Don't interrupt current playing state when audio list updated
   * audioLists eg. (A) is current playing...
   * [A,B] => [A,C,B]
   * [A,B] => [A,B,C]
   *
   * if (A) not in updated audio lists
   * [A,B] => [C]
   * (C) is playing
   */
  // [type `boolean`, default `false`]
  quietUpdate: false,

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  // "auto|metadata|none" "true| false"
  preload: false,

  // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: true,

  // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  // The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    right: 40,
    bottom: 40,
  },

  // if you want dynamic change current play mode you can change it
  // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
  // playMode: 'order',
  defaultPlayMode: 'order',

  // audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,

  // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  // audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  // audio playing progress is show of the "mini"  mode
  showMiniProcessBar: true,

  // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  // drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  // Display chrome media session.  [type `Boolean` default `false`]
  showMediaSession: true,

  // play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  // reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: false,

  // download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  // loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  // lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: true,

  // destroy player button display  [type `Boolean` default `false`]
  showDestroy: true,

  // Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  // default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  // playModeText show time [type `Number(ms)` default `600`]
  playModeShowTime: 600,

  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: false,

  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,

  // international [type `en_US | zh_CN | Object` default `en_US`]
  locale: config.locale,

  // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
  responsive: true,

  /**
   * Custom mobile media query string, eg use the mobile version UI on iPad.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
   * [type `String` default '(max-width: 768px) and (orientation : portrait)']
   */
  mobileMediaQuery: '(max-width: 1024px)',

  // Audio volume with fade in and fade out [type `{ fadeIn: number, fadeOut: number }` default `{ fadeIn: 0, fadeOut: 0 }`]
  volumeFade: {
    fadeIn: 1000,
    fadeOut: 1000,
  },
  /**
  * Restarts the current track when trying to play previous song, if the current time of the song is more than 1 second
    Otherwise, plays the previous song in the list
    [type `Boolean` default `false`]
  */
  restartCurrentOnPrev: false,

  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {},
};
