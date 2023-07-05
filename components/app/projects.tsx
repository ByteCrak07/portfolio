import Image from 'next/image';
import { FC } from 'react';
import { Globe } from 'lucide-react';
import {
  expressWhite,
  firebase,
  gatsby,
  gitHub,
  nextJSWhite,
  react,
  rustWhite,
  socketioWhite,
  solidityWhite,
} from '@/components/ui/icons';

type ProjectData = {
  imgSrc: string;
  title: string;
  content: string;
  icons?: JSX.Element[];
  github: string;
  website?: string;
};

interface ProjectProps extends ProjectData {
  no: number;
}

const Projects: FC = () => {
  const projectsData: ProjectData[] = [
    {
      imgSrc: '/assets/projects/synchro.rs.png',
      title: 'Synchro.rs',
      content:
        'A software to synchronize audio streams in devices connected to a network (LAN). This projects aims on minimal latency and proper synchronization between all the clients.',
      icons: [rustWhite],
      github: 'https://github.com/synchro-driver/synchro.rs',
    },
    {
      imgSrc: '/assets/projects/kcart.png',
      title: 'KCART',
      content:
        'A supply chain management system built using Next.js and deployed on polygon blockchain.',
      icons: [nextJSWhite, solidityWhite],
      github: 'https://github.com/ByteCrak07/SupplyChain',
      website: 'https://supply-chain-rouge.vercel.app',
    },
    {
      imgSrc: '/assets/projects/bingewatch.png',
      title: 'BingeWatch',
      content:
        'Watch movies together with friends and family. Built using express and socket.io.',
      icons: [react, expressWhite, socketioWhite],
      github: 'https://github.com/ByteCrak07/BingeWatch',
      website: 'https://binge-watch-hazel.vercel.app',
    },
    {
      imgSrc: '/assets/projects/ieee.png',
      title: 'IEEE Website GEC Thrissur',
      content:
        'Official Website for IEEE Student Branch GEC Thrissur. Built using GatsbyJS. Automated builds and deployments using GitHub Actions.',
      icons: [gatsby, react],
      github: 'https://github.com/IEEE-GECT/web-core',
      website: 'https://ieee.gectcr.ac.in',
    },
    {
      imgSrc: '/assets/projects/agrify.png',
      title: 'Agrify',
      content:
        'A project for predicting various diseases of crops by uploading images of their leaves. Built using React and Firebase and Google Teachable Machine.',
      icons: [react, firebase],
      github: 'https://github.com/ByteCrak07/Agrify',
      website: 'https://agrify-app.web.app',
    },
  ];

  return (
    <div className='mt-5 flex flex-wrap justify-center'>
      {projectsData.map((data, i) => (
        <Project
          key={`proj${i}`}
          no={i}
          imgSrc={data.imgSrc}
          title={data.title}
          content={data.content}
          icons={data.icons}
          github={data.github}
          website={data.website}
        />
      ))}
    </div>
  );
};

const Project: FC<ProjectProps> = ({
  no,
  imgSrc,
  title,
  content,
  icons,
  github,
  website,
}) => {
  return (
    <div className='flex max-w-7xl items-center justify-center px-2 py-8 lg:px-16 lg:py-10'>
      <div
        className={`flex flex-col items-center gap-x-20 rounded-lg lg:flex-row ${
          no % 2 == 0 ? '' : 'lg:flex-row-reverse'
        }`}
      >
        <div className='glow-box-sm flex-1 overflow-hidden rounded-lg'>
          <Image
            src={imgSrc}
            alt={title}
            height={248}
            width={496}
            className='object-cover'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAAAAACRPiE6AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+cHBQUiDgSqBHQAAACmSURBVAjXNY2xDoJADIYb4dqeiwFDwOPK3UEig0QXB2dnBycSHsFFff/JA7XJ13xp/uYHYmQm1rhKiKJpJgQkJELEbByzxSLwuyXT+zUp/A5E4gOmj+v9mTLO0ZiccxF3uXWJUqiig8ZNUVTbvCxKv+8PnauQgSm3u6osjKmH8+k49A0SaNsGCcF5acU3EpzUGta1FdMEscY5Z8WLGD23k8J/3bLUB+6jD2NtFXVwAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA3LTA1VDA1OjM0OjA3KzAwOjAwTQLWCQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNy0wNVQwNTozNDowNyswMDowMDxfbrUAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDctMDVUMDU6MzQ6MTQrMDA6MDCWCFVpAAAAAElFTkSuQmCC'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between px-4 pb-0 pt-5 leading-normal lg:px-10 lg:py-4'>
          <div className='mb-5 flex items-center justify-center lg:justify-normal'>
            <h3 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {title}
            </h3>
            <div className='ml-3 flex'>
              {icons?.map((icon, i) => (
                <div className='mr-1 w-8' key={`${title}icon${i}`}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          <p className='mb-3 text-justify text-gray-700 dark:text-gray-400'>
            {content}
          </p>
          <div className='flex items-center'>
            <a
              className='mr-2 w-8'
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${title} Github`}
            >
              {gitHub}
            </a>
            {website && (
              <a
                className='w-8'
                href={website}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${title} Website`}
              >
                <Globe size={30} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
