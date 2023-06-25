'use client';

import { gsap } from 'gsap';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

// exposing setIsVowel function from AnimIntroText component
let setIsVowel: (isVowel: boolean) => void;

const AnimText: FC = () => {
  const [init, setInit] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Developer',
    'Freelancer',
    'Creator',
    'Learner',
    'Gamer',
    'Explorer',
  ];
  const colors = [
    'rgba(130, 230, 188, 1)',
    'rgba(255, 237, 255, 1)',
    'rgba(89, 188, 221, 1)',
    'rgba(255, 204, 103, 1)',
    'rgba(252, 136, 146, 1)',
    'rgba(190, 143, 248, 1)',
  ];
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // changing glow shadow color
    const rootElement = document.querySelector(':root') as HTMLElement;
    if (rootElement)
      rootElement.style.setProperty(
        '--glow-shadow-color',
        `${colors[textIndex].replace(', 1)', ', 0.75)')}`
      );

    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline({
        onComplete: () => {
          let newIndex = 0;
          if (textIndex !== texts.length - 1) newIndex = textIndex + 1;

          if (texts[newIndex].charAt(0).match(/[aeiou]/gi)) setIsVowel(true);
          else setIsVowel(false);

          setInit(false);
          setTextIndex(newIndex);
        },
      });
      textAnimation.from('.anim-text', {
        y: 100,
        stagger: {
          each: 0.1,
        },
        delay: init ? 2.5 : -0.2,
      });
      textAnimation.to(
        '.anim-text',
        {
          y: -100,
          stagger: {
            each: 0.1,
          },
        },
        '>2'
      );
    }, textRef);

    return () => ctx.revert();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textIndex, init]);

  return (
    <>
      <div
        style={{ color: colors[textIndex] }}
        className='flex overflow-hidden font-bold'
        ref={textRef}
        key={texts[textIndex]}
      >
        {texts[textIndex]
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`${texts[textIndex]}-${index}`} space letter={i} />
            ) : (
              <Letter key={`${texts[textIndex]}-${index}`} letter={i} />
            )
          )}
      </div>
    </>
  );
};

const AnimIntroText: FC = () => {
  const text1 = `Hey, Abil here`;
  const [text2, setText2] = useState(`I'm a`);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  setIsVowel = (isVowel: boolean) => {
    if (isVowel) setText2(`I'm an`);
    else setText2(`I'm a`);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline({
        onComplete: () => {
          const wavingHand = document.getElementById(
            'waving-hand'
          ) as HTMLElement;
          if (wavingHand) wavingHand.classList.add('wave');
        },
      });
      textAnimation.from('.anim-text', {
        y: 100,
        stagger: {
          each: 0.1,
        },
      });
    }, textRef1);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
      textAnimation.from('.anim-text', {
        y: 100,
        stagger: {
          each: 0.1,
        },
        delay: 1.8,
      });
    }, textRef2);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        className='flex justify-center overflow-hidden font-bold sm:justify-normal'
        ref={textRef1}
      >
        {text1
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            )
          )}
        &nbsp;&nbsp;
        <span id='waving-hand' className='anim-text text-xl sm:text-2xl'>
          👋
        </span>
      </div>

      <div
        className='flex justify-center overflow-hidden font-bold sm:justify-normal'
        ref={textRef2}
      >
        {text2
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            )
          )}
        &nbsp;&nbsp;&nbsp;&nbsp; <AnimText />
      </div>
    </>
  );
};

const Letter: FC<{ space?: boolean; letter: string }> = ({ space, letter }) => {
  return space ? (
    <span className='anim-text text-xl sm:text-2xl'>&nbsp;&nbsp;</span>
  ) : (
    <span className='anim-text text-2xl sm:text-4xl'>{letter}</span>
  );
};

export default AnimIntroText;
