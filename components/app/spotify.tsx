'use client';

import { FC } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { spotify as spotifyIcon } from '@/components/ui/icons';

const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
});

type SpotifyTrackData = {
  name: string;
  artists: Array<{ name: string; href: string }>;
  href: string;
  albumArt: {
    url: string;
    height: number;
    width: number;
  };
  currentlyPlaying: boolean;
};

const Spotify: FC = () => {
  const fetcher = (url: string) =>
    fetch(url).then(async (res) => {
      if (res.ok) return res.json();
      else return Promise.reject(await res.json());
    });

  const { data, error, isLoading } = useSWR<SpotifyTrackData>(
    '/api/spotify',
    fetcher,
    process.env.NODE_ENV === 'production' ? { refreshInterval: 3000 } : {},
  );

  if (isLoading || error)
    return (
      <div
        className={`inline-flex min-w-[250px] rounded-xl bg-black p-3 pr-3 md:pr-10`}
      >
        <div className='w-[75px] animate-pulse overflow-hidden rounded-lg p-5 sm:w-[100px]'>
          {spotifyIcon}
        </div>

        <div className='mx-5'>
          <div className='mb-5 mt-1'>
            <div className='w-28 animate-pulse rounded-full bg-gray-800 p-2 sm:w-40'></div>
          </div>
          <div className='mb-2 w-32 animate-pulse rounded-full bg-gray-800 p-3 sm:w-48'></div>
          <div className='w-40 animate-pulse rounded-full bg-gray-800 p-2 sm:w-52'></div>
        </div>
      </div>
    );

  if (data)
    return (
      <div
        className={`${interFont.className} inline-flex min-w-[250px] rounded-xl bg-black p-3 pr-3 md:pr-10`}
      >
        <a href={data.href} target='_blank' rel='noopener noreferrer'>
          <div className='relative w-[75px] overflow-hidden rounded-lg sm:w-[100px]'>
            <Image
              src={data.albumArt.url}
              alt='Album art'
              width={100}
              height={100}
            />
            <div className='absolute bottom-1 right-1 z-20 w-6'>
              {spotifyIcon}
            </div>
          </div>
        </a>

        <div className='mx-5'>
          <div className='mb-3 text-xs font-semibold text-gray-300 sm:text-sm'>
            {data.currentlyPlaying ? 'LISTENING TO SPOTIFY' : 'LAST PLAYED'}
          </div>
          <a
            href={data.href}
            target='_blank'
            rel='noopener noreferrer'
            className='line-clamp-1 text-base font-bold hover:underline sm:text-lg'
          >
            {data.name}
          </a>
          <div className='line-clamp-1 text-sm font-semibold sm:text-base'>
            By
            {data.artists.map((artist, i) => (
              <span key={`artist${i}`} className='ml-1'>
                <a
                  className='hover:cursor-pointer hover:underline'
                  href={artist.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {artist.name}
                </a>
                {i === data.artists.length - 1 ? '' : ','}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Spotify;
