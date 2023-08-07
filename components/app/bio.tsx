'use client';

import { FC, useEffect, useState } from 'react';
import { FileText, Terminal } from 'lucide-react';
import { Inconsolata, JetBrains_Mono } from 'next/font/google';
import { analyticsEvent } from './analytics';

const inconsolataFont = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});

const jetBrainsMonoFont = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

const Bio: FC = () => {
  const [isBioText, setIsBioText] = useState(true);
  const [completedTxtRender, setCompletedTxtRender] = useState(false);
  const [completedTerminalRender, setCompletedTerminalRender] = useState(false);

  // to run when the page loads, animate bio.txt
  useEffect(() => {
    const h2Elements = document.querySelectorAll('.bio-text');
    const h2ElementsArray = Array.from(h2Elements);

    (async () => {
      for (const h2 of h2ElementsArray) {
        await new Promise((resolve) => setTimeout(resolve, 5));
        h2.removeAttribute('class');
      }

      setCompletedTxtRender(true);
    })();
  }, []);

  async function runTerminal() {
    if (completedTerminalRender) return;

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCompletedTerminalRender(true);
  }

  return (
    <div
      className={`${inconsolataFont.className} relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-xl bg-black p-5 pt-14 sm:mt-20 sm:p-10 sm:pt-14`}
    >
      <div className='absolute left-0 top-0 flex gap-x-0.5'>
        <button
          className={`flex items-center px-3 py-2 text-sm focus:outline-none ${
            isBioText ? 'bg-gray-700' : 'bg-gray-900'
          }`}
          onClick={() => {
            setIsBioText(true);
            analyticsEvent('Bio.txt', { category: 'Bio' });
          }}
        >
          <FileText size={14} />
          &nbsp;Bio.txt
        </button>
        <button
          className={`flex items-center rounded-br-md px-3 py-2 text-sm focus:outline-none ${
            !isBioText ? 'bg-gray-700' : 'bg-gray-900'
          }`}
          onClick={() => {
            setIsBioText(false);
            runTerminal();
            analyticsEvent('Terminal', { category: 'Bio' });
          }}
        >
          <Terminal size={14} />
          &nbsp;Terminal
        </button>
      </div>
      <h2
        className={`absolute inset-0 top-10 max-w-none p-5 pt-2 text-lg sm:p-10 sm:pt-5 sm:text-2xl ${
          isBioText ? 'bg-black' : 'hidden'
        } ${completedTxtRender ? '' : 'pointer-events-none select-none'}`}
      >
        {`I'm Abil Savio, a Full Stack Web & Blockchain Developer from`
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            )
          )}{' '}
        <a
          className={completedTxtRender ? 'hover:underline' : ''}
          target='_blank'
          href='https://goo.gl/maps/Uf5wf5zKRc2W3EhE8'
          rel='noopener noreferrer'
        >
          {`Kerala, India.`
            .split('')
            .map((i, index) =>
              i == ' ' ? (
                <Letter key={`intro-${index}`} space letter={i} />
              ) : (
                <Letter key={`intro-${index}`} letter={i} />
              )
            )}
        </a>
        <br />
        {`I specialize in crafting seamless digital experiences.`
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            )
          )}
        <br />
        {`I'm a self taught developer and currently learning Rust.
          Currently, I'm a senior pursuing a Bachelor's Degree in Computer Science and working at `
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            )
          )}
        <a
          className={completedTxtRender ? 'hover:underline' : ''}
          target='_blank'
          href='https://www.buildbear.io'
          rel='noopener noreferrer'
        >
          {`BuildBear`
            .split('')
            .map((i, index) =>
              i == ' ' ? (
                <Letter key={`intro-${index}`} space letter={i} />
              ) : (
                <Letter key={`intro-${index}`} letter={i} />
              )
            )}
        </a>
        {` as a Full Stack Intern.`
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            )
          )}
        <span
          className={`blinking-cursor ${completedTxtRender ? '' : 'hidden'}`}
        >
          |
        </span>
      </h2>
      <div
        aria-hidden
        className={`${
          jetBrainsMonoFont.className
        } max-w-none text-base sm:max-w-[70vw] sm:text-xl ${
          completedTerminalRender ? '' : 'pointer-events-none select-none'
        }`}
      >
        <div className='flex items-center'>
          <div className='rounded-l bg-teal-700 px-2 text-black'>
            ~/portfolio
          </div>
          <div className='border-[12px] border-r-0 border-b-transparent border-l-teal-700 border-t-transparent sm:border-[14px] sm:border-r-0'></div>
          <div>&nbsp;cat bio.txt</div>
          <div
            className={`ml-1 w-2 bg-white bg-opacity-80 ${
              completedTerminalRender ? 'hidden' : ''
            }`}
          >
            |
          </div>
        </div>
        <div
          className={`my-0.5 ${
            completedTerminalRender ? '' : 'text-transparent'
          }`}
        >
          I&apos;m Abil Savio, a Full Stack Web & Blockchain Developer from
          Kerala, India.
          <br />I specialize in crafting seamless digital experiences.
          <br />
          I&apos;m a self taught developer and currently learning Rust.
          Currently, I&apos;m a senior pursuing a Bachelor&apos;s Degree in
          Computer Science and working at BuildBear as a Full Stack Intern.
        </div>
        <div className='flex items-center'>
          <div
            className={`rounded-l px-2 text-black ${
              completedTerminalRender ? 'bg-teal-700' : 'bg-black'
            }`}
          >
            ~/portfolio
          </div>
          <div
            className={`border-[12px] border-r-0 border-b-transparent border-t-transparent sm:border-[14px] sm:border-r-0 ${
              completedTerminalRender ? 'border-l-teal-700' : 'border-l-black'
            }`}
          ></div>
          <div
            className={`ml-1 w-2 bg-white bg-opacity-80 ${
              completedTerminalRender ? '' : 'hidden'
            }`}
          >
            |
          </div>
        </div>
      </div>
    </div>
  );
};

const Letter: FC<{ space?: boolean; letter: string }> = ({ space, letter }) => {
  return space ? (
    <span> </span>
  ) : (
    <span className='bio-text text-transparent'>{letter}</span>
  );
};

export default Bio;
