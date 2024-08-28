'use client';

import { FC } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { analyticsEvent } from './analytics';

type BlogData = {
  imgSrc: string;
  imgBlurDataURL: string;
  title: string;
  content: string;
  link: string;
  date: string;
  timeToRead: number;
};

const Blogs: FC = () => {
  const blogsData: BlogData[] = [
    {
      imgSrc: '/assets/blogs/blog2.png',
      imgBlurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAAUVBMVEX///+8vLz+9/KSz7Tl5eXs6+2goKD7+/v7+/7w9vPJ6PPo8tj21NLJo1bv9v//7tC7cIb3xsKcyJ7yhn3g7P7Z8OCgt+2t5MyMyt2v4fKs3fA4t9y8AAAAWElEQVQI132OCwqAMAxDu9mtrb/5d3r/gzpYFVQ0EAivkBTgU/wigoj0PJFzQjnamoI9cTIab8B1Y1NdkBnRe5iWfphz57rtpQ62oE1SxJgg317QIWb41QHaBgJe5FApuAAAAABJRU5ErkJggg==',
      title: 'Email contact form using NextJS (App router)',
      content:
        'Simple tutorial for using NextJS with app router to create a contact form to send messages to your email using nodemailer — An overview of what we’ll be doing here You must have come across contact forms on a lot of websites on the internet. We will be building a similar contact form.',
      link: 'https://blog.abilsavio.dev/email-contact-form-using-nextjs-app-router',
      date: 'July 18 2023',
      timeToRead: 7,
    },
    {
      imgSrc: '/assets/blogs/blog1.png',
      imgBlurDataURL:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwYFBwj/xAApEAAABgAEBAcBAAAAAAAAAAABAgMEBREAEhMxBiFB0RQVIiVCUVRh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAwQFBgH/xAAhEQABBAEDBQAAAAAAAAAAAAABAAIDEQQFEjETIVFSkf/aAAwDAQACEQMRAD8A3PFQriaWORtpAKJcwnOYAEL+r69sVpJRFVrL4+M7JsNPCOrwPMx6Cjwh3D8w8ypZ07At/G62C+u2BDJaexTR06UC2lRdl6GDDVKbaulvHsGup4Vk3RzE9WmmUt1tdBiO5znclaqONjL2ikp8HQcLFpTQRkQyZg4kVF1tBuRPUVHc5soBZv6PPHERM/kkLQe0Mtvzk7YJ1H+SlzBF6j4F/9k=',
      title: 'Pocketbase OAuth on NextJS',
      content:
        "A simple tutorial on implementing Google & GitHub OAuth in NextJS using Pocketbase — A brief introduction to Pocketbase & NextJS Most of you folks must have already heard about Pocketbase and also about Next.JS and that's why you are here in the first place.",
      link: 'https://blog.abilsavio.dev/pocketbase-oauth-on-nextjs',
      date: 'March 7 2023',
      timeToRead: 9,
    },
  ];

  return (
    <div className='mt-10 flex flex-wrap justify-center gap-y-10 sm:mt-16 sm:gap-20'>
      {blogsData.map((data, i) => (
        <Blog
          key={`blog${i}`}
          imgSrc={data.imgSrc}
          imgBlurDataURL={data.imgBlurDataURL}
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
  imgBlurDataURL,
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
          blurDataURL={imgBlurDataURL}
        />
      </div>
      <div className='p-6'>
        <h3 className='mb-2 line-clamp-1 text-2xl font-bold tracking-tight'>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            onClick={onOpenBlog}
            title={title}
          >
            {title}
          </a>
        </h3>
        <div className='mb-2 flex justify-between font-light'>
          <div>{date}</div>
          <div>{timeToRead} min read</div>
        </div>
        <p className='text-slaate-400 mb-5 line-clamp-4'>{content}</p>
        <div className='flex items-center justify-between'>
          <a
            className='text-glow group inline-flex items-center font-medium hover:underline'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            onClick={onOpenBlog}
          >
            Continue reading
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
