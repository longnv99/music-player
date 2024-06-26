'use client';

import {
  authService,
  categories,
  playlistService,
  spotifyService,
} from '@/services';
import dynamic from 'next/dynamic';
import {useEffect} from 'react';

const MusicPlayer = dynamic(
  () => import('@/components/molecules').then(module => module.MusicPlayer),
  {
    ssr: false,
  },
);

export default function Home() {
  const audioList1 = [
    {
      name: 'Despacito',
      singer: 'Luis Fonsi',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc:
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
  ];

  const generateToken = async () => {
    await authService.generateToken();
    await spotifyService.getPlaylist();
    await categories.getCategories();
    await playlistService.getFeaturedPlaylists();
  };

  useEffect(() => {
    generateToken();
  }, []);

  return (
    <main>
      <MusicPlayer audioLists={audioList1} />
    </main>
  );
}
