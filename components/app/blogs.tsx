import { FC } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { analyticsEvent } from './analytics';

type BlogData = {
  imgSrc: string;
  title: string;
  content: string;
  link: string;
  date: string;
  timeToRead: number;
};

const Blogs: FC = () => {
  const blogsData: BlogData[] = [
    {
      imgSrc: '/assets/blogs/blog1.png',
      title: 'Pocketbase OAuth on NextJS',
      content:
        'A simple tutorial on implementing Google & GitHub OAuth in NextJS using Pocketbase — A brief introduction to Pocketbase & NextJS Most of you folks must have already heard about Pocketbase and also about...',
      link: 'https://medium.com/@abilsavio/pocketbase-oauth-on-nextjs-6e93bd998490',
      date: 'Mar 7 2023',
      timeToRead: 9,
    },
  ];

  return (
    <div className='mt-10 flex flex-wrap justify-center gap-y-10 sm:mt-16 sm:gap-20'>
      {blogsData.map((data, i) => (
        <Blog
          key={`blog${i}`}
          imgSrc={data.imgSrc}
          title={data.title}
          content={data.content}
          link={data.link}
          date={data.date}
          timeToRead={data.timeToRead}
        />
      ))}
    </div>
  );
};

const Blog: FC<BlogData> = ({
  imgSrc,
  title,
  content,
  link,
  date,
  timeToRead,
}) => {
  const onOpenBlog = () => {
    analyticsEvent(`open_${title.toLowerCase().replace(/ /g, '-')}`, {
      category: 'Blogs',
    });
  };

  return (
    <article className='glow-box-sm max-w-lg rounded-lg bg-slate-400 bg-opacity-10'>
      <div className='m-3 overflow-hidden rounded-xl'>
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
      <div className='p-6'>
        <h3 className='mb-2 text-2xl font-bold tracking-tight'>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            onClick={onOpenBlog}
          >
            {title}
          </a>
        </h3>
        <div className='mb-2 flex justify-between font-light'>
          <div>{date}</div>
          <div>{timeToRead} min read</div>
        </div>
        <p className='text-slaate-400 mb-5'>{content}</p>
        <div className='flex items-center justify-between'>
          <a
            className='text-glow group inline-flex items-center font-medium hover:underline'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            onClick={onOpenBlog}
          >
            Read more on Medium
            <ArrowRight
              size={20}
              className='ml-1 transition-all group-hover:ml-3'
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Blogs;
