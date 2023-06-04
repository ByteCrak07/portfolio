'use client';

import { FC, useState } from 'react';
import { FileText, Terminal } from 'lucide-react';
import { Inconsolata, JetBrains_Mono } from 'next/font/google';

const inconsolataFont = Inconsolata({
  subsets: ['latin'],
});

const jetBrainsMonoFont = JetBrains_Mono({
  subsets: ['latin'],
});

const Bio: FC = () => {
  const [isBioText, setIsBioText] = useState(true);

  return (
    <div
      className={`${inconsolataFont.className} relative mt-10 overflow-hidden rounded-xl bg-black p-10 pt-14`}
    >
      <div className='absolute left-0 top-0 flex gap-x-0.5' aria-hidden>
        <button
          className={`flex items-center px-3 py-2 text-sm ${
            isBioText ? 'bg-gray-700' : 'bg-gray-900'
          }`}
          onClick={() => setIsBioText(true)}
        >
          <FileText size={14} />
          &nbsp;Bio.txt
        </button>
        <button
          className={`flex items-center rounded-br-md px-3 py-2 text-sm ${
            !isBioText ? 'bg-gray-700' : 'bg-gray-900'
          }`}
          onClick={() => setIsBioText(false)}
        >
          <Terminal size={14} />
          &nbsp;Terminal
        </button>
      </div>
      <h2
        className={`max-w-none text-xl sm:max-w-[70vw] sm:text-2xl ${
          !isBioText && 'hidden'
        }`}
      >
        I&apos;m Abil Savio, a Full Stack Web & Blockchain Developer from
        Kerala, India.
        <br />I specialize in crafting seamless digital experiences.
        <br />I also seek inspiration and new experiences by traveling and
        discovering the world around me. With a programmer&apos;s mindset, I
        continuously strive to learn and adapt, always seeking new challenges
        and opportunities.
        <span className='blinking-cursor'>|</span>
      </h2>
      <div
        aria-hidden
        className={`${
          jetBrainsMonoFont.className
        } max-w-none text-lg sm:max-w-[70vw] sm:text-xl ${
          isBioText && 'hidden'
        }`}
      >
        <div className='flex items-center'>
          <div className='rounded-l bg-green-600 px-2 text-black'>
            /home/portfolio
          </div>
          <div className='border-[14px] border-r-0 border-b-transparent border-l-green-600 border-t-transparent'></div>
          <div>&nbsp;cat bio.txt</div>
        </div>
        <div className='my-0.5'>
          I&apos;m Abil Savio, a Full Stack Web & Blockchain Developer from
          Kerala, India.
          <br />I specialize in crafting seamless digital experiences.
          <br />I also seek inspiration and new experiences by traveling and
          discovering the world around me. With a programmer&apos;s mindset, I
          continuously strive to learn and adapt, always seeking new challenges
          and opportunities.
        </div>
        <div className='flex items-center'>
          <div className='rounded-l bg-green-600 px-2 text-black'>
            /home/portfolio
          </div>
          <div className='border-[14px] border-r-0 border-b-transparent border-l-green-600 border-t-transparent'></div>
          <div className='ml-1 w-2 bg-white bg-opacity-80'>|</div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
