'use client';

import { gsap } from 'gsap';
import { FC, forwardRef, useEffect, useRef, useState } from 'react';

interface AnimTextProps {
  setIsVowel: (isVowel: boolean) => void;
}

interface LetterProps {
  letter: string;
  space?: boolean;
  hidden?: boolean;
}

const AnimText: FC<AnimTextProps> = ({ setIsVowel }) => {
  const [init, setInit] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);
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
    'rgba(89, 188, 221, 1)',
    'rgba(247, 96, 107, 1)',
    'rgba(255, 204, 103, 1)',
    'rgba(238, 108, 77, 1)',
    'rgba(190, 143, 248, 1)',
  ];
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // changing glow shadow color
    const rootElement = document.querySelector(':root') as HTMLElement;
    if (rootElement)
      rootElement.style.setProperty(
        '--glow-shadow-color',
        `${colors[textIndex].replace(', 1)', ', 0.75)')}`,
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
        '>2',
      );
    }, textRef);

    return () => ctx.revert();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textIndex, init]);

  // remove transparent text before animation
  useEffect(() => {
    if (isTransparent) {
      setIsTransparent(false);
    }
  }, [isTransparent]);

  return (
    <>
      <div
        style={{ color: isTransparent ? 'transparent' : colors[textIndex] }}
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
            ),
          )}
      </div>
    </>
  );
};

const AnimIntroText: FC = () => {
  const text1 = `Hey, Abil here`;
  const text2 = `I'm a`;
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const wavingHandRef = useRef<HTMLSpanElement>(null);
  const ifVowelRef = useRef<HTMLSpanElement>(null);

  const setIsVowel = (isVowel: boolean) => {
    if (isVowel) ifVowelRef.current?.classList.remove('hidden');
    else ifVowelRef.current?.classList.add('hidden');
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline({
        onComplete: () => {
          const wavingHand = wavingHandRef.current;
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

  // remove transparent text before animation
  useEffect(() => {
    textRef1.current?.classList.remove('text-transparent');
    textRef2.current?.classList.remove('text-transparent');
  }, []);

  return (
    <>
      <div
        className='flex justify-center overflow-hidden py-0 font-bold text-transparent sm:justify-normal sm:py-2'
        ref={textRef1}
      >
        {text1
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            ),
          )}
        &nbsp;&nbsp;
        <Letter letter='👋' ref={wavingHandRef} />
      </div>

      <div
        className='flex justify-center overflow-hidden py-0 font-bold text-transparent sm:justify-normal sm:py-2'
        ref={textRef2}
      >
        {text2
          .split('')
          .map((i, index) =>
            i == ' ' ? (
              <Letter key={`intro-${index}`} space letter={i} />
            ) : (
              <Letter key={`intro-${index}`} letter={i} />
            ),
          )}
        <Letter letter='n' hidden ref={ifVowelRef} /> &nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <AnimText setIsVowel={setIsVowel} />
      </div>
    </>
  );
};

const Letter = forwardRef<HTMLSpanElement, LetterProps>(
  ({ letter, space, hidden }, ref) => {
    return space ? (
      <span className='anim-text text-xl sm:text-4xl'>&nbsp;&nbsp;</span>
    ) : (
      <span
        className={`anim-text text-3xl sm:text-5xl ${hidden ? 'hidden' : ''}`}
        ref={ref}
      >
        {letter}
      </span>
    );
  },
);

Letter.displayName = 'Letter';

export default AnimIntroText;
