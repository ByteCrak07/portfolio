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
  id: string;
  imgSrc: string;
  imgBlurDataURL: string;
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
      id: 'synchro.rs',
      imgSrc: '/assets/projects/synchro.rs.png',
      imgBlurDataURL:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAAKABQBAREA/8QAGAAAAgMAAAAAAAAAAAAAAAAAAQMGBwn/xAAkEAABBAEDAwUAAAAAAAAAAAABAgMEEQAFBhIVIUExUWGT0f/aAAgBAQAAPwDMpnRdQkMB9tFJV3TYNke/pk43pD0Hc7emr2ntuFoBiNLZkAvcS+LHCx35KACrcNFRV3ArK/mQZEKQqO/RUnyLIPyD5wInTUcUomPpAFABwihh6hPAFTpH2q/cS8++6vk684s1VqUSc//Z',
      title: 'Synchro.rs',
      content:
        'A software to synchronize audio streams in devices connected to a network (LAN). This projects aims on minimal latency and proper synchronization between all the clients.',
      icons: [rustWhite],
      github: 'https://github.com/synchro-driver/synchro.rs',
    },
    {
      id: 'kcart',
      imgSrc: '/assets/projects/kcart.png',
      imgBlurDataURL:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwYFBwj/xAAoEAACAgIAAwcFAAAAAAAAAAABAgMEBREABjEHEhMUIiRRISMyM3H/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgEA/8QAHhEAAwABBAMAAAAAAAAAAAAAAAECEQMEEjEhUcH/2gAMAwEAAhEDEQA/ANK4ntssrmcfib2ZzkUNy8lVpu9KsSbYAs8h0o2ToEbHUkjXDuMkJkzzn2qc6cvYqC83J3NVVmyArSrHzHTvP4BikfxQkEzkgMiqR+X3AQCA2oieRreAVHMZC/XXI2xIli0BLMGYlixAHqJGydADZ+Bw63GtKUq3hdeWbzrrJVcqJDnoq0KKkVy57mNRpZvbSH1jo3QdfgcXppOKb9fQ67Q3YaGGKvUWOJEHmJ30qgervH6/3gGUNMH6xwbOP//Z',
      title: 'KCART',
      content:
        'A supply chain management system built using Next.js and deployed on polygon blockchain.',
      icons: [nextJSWhite, solidityWhite],
      github: 'https://github.com/ByteCrak07/SupplyChain',
      website: 'https://supply-chain-rouge.vercel.app',
    },
    {
      id: 'bingewatch',
      imgSrc: '/assets/projects/bingewatch.png',
      imgBlurDataURL:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwgG/8QAJxAAAQMDBAEDBQAAAAAAAAAAAQIDBAUGEQAHITESCBRBIjJhcXL/xAAZAQACAwEAAAAAAAAAAAAAAAAEBgACAwf/xAAmEQABAgYABgMBAAAAAAAAAAABAgMABAURITESIkFRcfETUmHh/9oADAMBAAIRAxEAPwAT2Pq9r0bbizvcWPEmS343m/IlIS40+fcOcFKlYJKUkdcY5HWtWKjKIcLTuwcm+f3HiKOUuadR8zRwQbC2L2xnzDFs/wCptbEm5bNa2oo0qoQqtIcjOLjx0txYn0AMAhB8ylWT/Oe8Z0VPVeSQQpI5elz6/kYytJnCjhJHEN2HuIz3yr8yt7x3nWFwGacuZWZDy4cbAaYJP2ICeAB+NXZcS+2lwaIiKbUwotq6RvdplFNoUgJJGGygY+ElRyP0c9aQao2gzKyQNw1091YYSAo67wg1112EsKhuLYKilJLRKSQV8jj40IhCVjmF4IU4tOiYl69FqXeFaWtRUozXcknJPOugU4ASjQH1EKU6SZhZPcx//9k=',
      title: 'BingeWatch',
      content:
        'Watch movies together with friends and family. Built using express and socket.io.',
      icons: [react, expressWhite, socketioWhite],
      github: 'https://github.com/ByteCrak07/BingeWatch',
      website: 'https://binge-watch-hazel.vercel.app',
    },
    {
      id: 'ieee-website',
      imgSrc: '/assets/projects/ieee.png',
      imgBlurDataURL:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAQQFBgf/xAApEAABAwIEBgEFAAAAAAAAAAABAgMRBAUABgcSEyEiMUGRFTNRYWJx/8QAGAEAAwEBAAAAAAAAAAAAAAAAAwQFAAL/xAAlEQACAgEDAwQDAAAAAAAAAAABAgMRAAQhQRIxUQUTIvAyYbH/2gAMAwEAAhEDEQA/AMFtGr+cqG51FvRmRp81SWV0Ve7SbkTILlOGR1FQCgnd25RBnCIhBhVh+VfTlSWRTqHWvgCdv1e2N02o2b7m9ervX6i/HPNu8KlZfoJQ2BKp4YPUZgEqEDaR2weKGRYwwFtXg75xq1iil9s0o25vjuDzeRFFqxdahVS9X2FmteW+pRKSG+FIB2EBMeZH4UB4xn1KRUH2NZjom62WI9QB7jnKrYW2zmezS2npW4ocuyuRn+yB6wr6aS0b34P8w3qAAkSvOMZ5QhN0rQlIEoQTA8lfP3J9nFbrYIlH7WK6sCR/nvVd8NubRw3TsT9T7fqMSyiyMxcXvzhHkeOghIFcZ//Z',
      title: 'IEEE Website GEC Thrissur',
      content:
        'Official Website for IEEE Student Branch GEC Thrissur. Built using GatsbyJS. Automated builds and deployments using GitHub Actions.',
      icons: [gatsby, react],
      github: 'https://github.com/IEEE-GECT/web-core',
      website: 'https://ieee.gectcr.ac.in',
    },
    {
      id: 'agrify',
      imgSrc: '/assets/projects/agrify.png',
      imgBlurDataURL:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKABQDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQYIB//EACwQAAIBAgUCAgsAAAAAAAAAAAECAwQFAAYHESEJEhMiIzEyOEFRUmKBhrH/xAAYAQEAAwEAAAAAAAAAAAAAAAACAAMEBf/EACURAAECBAYCAwAAAAAAAAAAAAEAAgMEERIFITEyUZEiQRRhsf/aAAwDAQACEQMRAD8AaunfkbUbNWg9HessZ3obTaY8wXeCqo5KNnaVwsXY6srADYleNuQvr5xpjRZiFMMMNwDBuBaCTrofS5UXDoc017nlwcbbSHEAU3VFM6jTMUPKpa26LavqtpN71Xpapoq0vcxFRPEJ6XdPRx7P5W4kHd9y/TzU6bnzZa9ooTd4DyGVAOPfaT8JlS8lhcBxcf37TLb9PM/RrMK6/ZfAMp8FIaOoISPYAAs8pLMSCST89vhhfKmjm4jpaxKSrQA0HtYX0p/dU/a7t/IMOY3pQ9qsMe0fxilNHEUX/9k=',
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
          id={data.id}
          key={`proj${i}`}
          no={i}
          imgSrc={data.imgSrc}
          imgBlurDataURL={data.imgBlurDataURL}
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
  id,
  no,
  imgSrc,
  imgBlurDataURL,
  title,
  content,
  icons,
  github,
  website,
}) => {
  return (
    <div
      id={id}
      className='flex max-w-7xl items-center justify-center px-2 py-8 xl:px-16 xl:py-10'
    >
      <div
        className={`flex flex-col items-center gap-x-20 rounded-lg lg:flex-row xl:gap-x-32 ${
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
            blurDataURL={imgBlurDataURL}
          />
        </div>
        <div className='flex flex-1 flex-col justify-between pb-0 pt-5 leading-normal lg:py-4'>
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
