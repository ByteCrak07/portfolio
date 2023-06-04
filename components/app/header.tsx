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
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AnimBorder from '@/components/ui/anim-border';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      link: '#blogs',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  return (
    <>
      <div className='fixed z-50 w-full'>
        <header className='glass-effect flex select-none items-center justify-between rounded-b-xl rounded-t-none px-5 py-3 text-lg font-semibold sm:mx-10 sm:my-5 sm:rounded-xl sm:px-10 sm:py-4'>
          <AnimBorder rounded>
            <Link href='/' aria-label='Home'>
              <Avatar className='glass-effect h-16 w-16'>
                <AvatarImage
                  src='/icons/android-chrome-192x192.png'
                  alt='Hacker Pepe'
                  height={64}
                  width={64}
                />
                <AvatarFallback>
                  <Image
                    src='/icons/favicon-16x16.png'
                    alt='img-fallback'
                    height={64}
                    width={64}
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

          {/* resume */}
          <Dialog>
            <DialogTrigger className='outline-none'>
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
                >
                  <Button
                    variant={'outline'}
                    className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-white border-opacity-40 p-0'
                  >
                    <DownloadIcon className='h-[18px] w-[18px]' />
                  </Button>
                </a>
              </DialogTitle>
              <DialogDescription className='relative w-full flex-grow overflow-hidden'>
                <iframe
                  src='https://drive.google.com/file/d/106k85SZrdnckTypWfRPZUEMr5agtEyGC/preview'
                  allow='autoplay'
                  className='absolute inset-0 z-10 h-full w-full'
                ></iframe>
                <div className='flex h-full items-center justify-center'>
                  <PacmanLoader color='#fff' size={35} />
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </header>
      </div>
      <div className='h-[92px] sm:h-[148px]'></div>
    </>
  );
};

export default Header;
