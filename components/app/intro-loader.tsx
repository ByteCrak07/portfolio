'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

const IntroLoader: FC<{ image?: boolean }> = ({ image }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!image) return setLoading(false);

    const dpImg = document.getElementById('dp-img');
    const imgLoaderOverlay = document.getElementById('img-loader-overlay');
    const imgLoader = document.getElementById('img-loader');

    if (dpImg && imgLoaderOverlay && imgLoader) {
      const dpImgRect = dpImg.getBoundingClientRect();
      const imgLoaderRect = imgLoader.getBoundingClientRect();

      const centerDistX =
        (dpImgRect.left +
          dpImgRect.right -
          (imgLoaderRect.left + imgLoaderRect.right)) /
        2;
      const centerDistY =
        (dpImgRect.top +
          dpImgRect.bottom -
          (imgLoaderRect.top + imgLoaderRect.bottom)) /
        2;

      // move the image loader to the dpImg position
      if (centerDistX != 0 || centerDistY != 0) {
        imgLoader.style.transform = `translate(${centerDistX}px, ${centerDistY}px)`;

        // after animation
        setTimeout(() => {
          setLoading(false);

          // remove image loader from DOM after 1000ms
          setTimeout(() => {
            imgLoaderOverlay.remove();
          }, 500);
        }, 500);
      }
    }
  }, [image]);

  if (image)
    return (
      <div
        className={`m-auto w-[180px] transition-all duration-500 hover:scale-105 sm:m-5 sm:ml-auto sm:w-[240px] xl:w-[300px] ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src='/assets/dp-1.jpg'
          alt='Abil Savio'
          height={300}
          width={300}
          id='dp-img'
          className='glow-box overflow-hidden rounded-3xl'
          priority
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACMQAAIBAwMEAwAAAAAAAAAAAAECAwAEIQUREgYTYZEHFXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABoRAAICAwAAAAAAAAAAAAAAAAEDAAIEESH/2gAMAwEAAhEDEQA/AMxttAh1HSppIJXe6S44t2wGVU44P4TgHz4olPj7V3jVxCdmAIxTHoQD6a4O2TPn0Kru44xzb3RHsvQ8MoYylsB2J//Z'
        />
      </div>
    );

  return (
    <div
      className='absolute inset-0 z-10 flex items-center justify-center'
      id='img-loader-overlay'
    >
      <div
        className='w-[180px] scale-110 transition-all duration-500 sm:w-[240px] xl:w-[300px]'
        id='img-loader'
      >
        <Image
          src='/assets/dp-1.jpg'
          alt='Abil Savio'
          height={300}
          width={300}
          className='overflow-hidden rounded-3xl'
          priority
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACMQAAIBAwMEAwAAAAAAAAAAAAECAwAEIQUREgYTYZEHFXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABoRAAICAwAAAAAAAAAAAAAAAAEDAAIEESH/2gAMAwEAAhEDEQA/AMxttAh1HSppIJXe6S44t2wGVU44P4TgHz4olPj7V3jVxCdmAIxTHoQD6a4O2TPn0Kru44xzb3RHsvQ8MoYylsB2J//Z'
        />
      </div>
    </div>
  );
};

export default IntroLoader;
