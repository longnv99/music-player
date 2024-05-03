import 'react-jinke-music-player/assets/index.css';

import {FC} from 'react';
import ReactJkMusicPlayer, {
  ReactJkMusicPlayerAudioListProps,
} from 'react-jinke-music-player';

import {optionsJKMusic} from '@/libs/react-jinke-music-player';

type MusicPlayerProps = {
  audioLists: Array<ReactJkMusicPlayerAudioListProps>;
};

export const MusicPlayer: FC<MusicPlayerProps> = ({audioLists}) => {
  return <ReactJkMusicPlayer {...optionsJKMusic} audioLists={audioLists} />;
};
