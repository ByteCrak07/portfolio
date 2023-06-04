'use client';

import { gsap } from 'gsap';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

const style: {
  words: CSSProperties;
} = {
  words: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
};

// exposing setIsVowel function from AnimIntroText component
let setIsVowel = (isVowel: boolean) => {};

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
    // changing dp shadow color
    const dpElement = document.getElementsByClassName('dp')[0] as HTMLElement;
    if (dpElement)
      dpElement.style.boxShadow = `0px 0px 300px -10px ${colors[
        textIndex
      ].replace(', 1)', ', 0.75)')}`;

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
        delay: init ? 1 : -0.2,
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
        style={{ ...style.words, color: colors[textIndex] }}
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
  const [text, setText] = useState(`Hey I'm a`);
  const textRef = useRef<HTMLDivElement>(null);

  setIsVowel = (isVowel: boolean) => {
    if (isVowel) setText(`Hey I'm an`);
    else setText(`Hey I'm a`);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
      textAnimation.from('.anim-text', {
        y: 100,
        stagger: {
          each: 0.1,
        },
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div style={style.words} ref={textRef}>
        {text
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            )
          )}
      </div>
    </>
  );
};

const Letter: FC<{ space?: boolean; letter: string }> = ({ space, letter }) => {
  return space ? (
    <span className='anim-text text-xl font-bold sm:text-2xl'>
      &nbsp;&nbsp;
    </span>
  ) : (
    <span className='anim-text text-2xl font-bold sm:text-4xl'>{letter}</span>
  );
};

export { AnimText, AnimIntroText };
