'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DownloadIcon } from 'lucide-react';
import { PacmanLoader } from 'react-spinners';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AnimBorder from '@/components/ui/anim-border';
import { Button } from '@/components/ui/button';
import { gitHub } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import Command from './command';
import { analyticsEvent } from './analytics';

const Header: FC = () => {
  const menus = [
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Experience',
      link: '#experience',
    },
    {
      name: 'Blogs',
      link: 'https://blog.abilsavio.tech',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  return (
    <>
      <div className='fixed z-50 w-full'>
        <header className='glass-effect glow-box-sm flex select-none items-center justify-between rounded-b-xl rounded-t-none px-5 py-3 text-lg font-semibold sm:mx-10 sm:my-5 sm:rounded-xl sm:px-10 sm:py-4'>
          <AnimBorder rounded>
            <Link href='/' aria-label='Home'>
              <Avatar className='glass-effect h-16 w-16'>
                <AvatarImage
                  src='/icons/android-chrome-192x192.png'
                  alt='Hacker Pepe'
                  height={64}
                  width={64}
                  loading='eager'
                />
                <AvatarFallback>
                  <Image
                    src='/icons/favicon-16x16.png'
                    alt='img-fallback'
                    height={64}
                    width={64}
                    loading='eager'
                  />
                </AvatarFallback>
              </Avatar>
            </Link>
          </AnimBorder>
          <NavigationMenu>
            <NavigationMenuList className='hidden sm:flex'>
              {menus.map((menu, i) => (
                <NavigationMenuItem key={`menu${i}`}>
                  <Link href={menu.link} legacyBehavior passHref>
                    <NavigationMenuLink
                      target={menu.link.startsWith('http') ? '_blank' : '_self'}
                      className={cn(
                        navigationMenuTriggerStyle() +
                          ' bg-transparent text-lg font-semibold hover:bg-black'
                      )}
                    >
                      {menu.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* github for portfolio and search placed absolute */}
          <div className='absolute right-28 top-1/2 z-10 mr-1 flex -translate-y-1/2 items-center sm:right-36'>
            <Command iconOnly />
            <a
              className='hidden w-10 sm:block'
              href='https://github.com/ByteCrak07'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Github Profile`}
            >
              {gitHub}
            </a>
          </div>

          {/* resume */}
          <Dialog>
            <DialogTrigger
              className='relative outline-none'
              id='resume-btn'
              onClick={() => {
                analyticsEvent('open_resume_modal', {
                  category: 'Resume',
                });
              }}
            >
              <AnimBorder rounded>
                <span className='glass-effect flex items-center rounded-full px-3 py-2 text-lg hover:bg-white hover:bg-opacity-10'>
                  Resume
                </span>
              </AnimBorder>
            </DialogTrigger>
            <DialogContent className='flex h-[100vh] max-w-[100vw] flex-col sm:h-[90vh] sm:max-w-[90vw]'>
              <DialogTitle className='flex h-10 items-center text-3xl'>
                Resume &nbsp;&nbsp;
                <a
                  href='https://drive.google.com/uc?export=download&id=106k85SZrdnckTypWfRPZUEMr5agtEyGC'
                  download='Resume-AbilSavio'
                  onClick={() => {
                    analyticsEvent('download_resume', {
                      category: 'Resume',
                    });
                  }}
                >
                  <Button
                    variant={'outline'}
                    className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-white border-opacity-40 p-0'
                  >
                    <DownloadIcon className='h-[18px] w-[18px]' />
                  </Button>
                </a>
              </DialogTitle>
              <DialogFooter className='relative w-full flex-grow overflow-hidden'>
                <iframe
                  src='https://drive.google.com/file/d/106k85SZrdnckTypWfRPZUEMr5agtEyGC/preview'
                  allow='autoplay'
                  className='absolute inset-0 z-10 h-full w-full'
                ></iframe>
                <div className='flex h-full w-full items-center justify-center'>
                  <PacmanLoader color='#fff' size={35} />
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </header>
      </div>
      <div className='h-[92px] sm:h-[148px]'></div>
    </>
  );
};

export default Header;
