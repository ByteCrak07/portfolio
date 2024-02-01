'use client';

import { FC, JSX } from 'react';
import { Jost } from 'next/font/google';
import { ReactLenis } from '@studio-freight/react-lenis';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AnimBorder from '@/components/ui/anim-border';
import {
  aws,
  css,
  django,
  docker,
  digitalOcean,
  electron,
  express,
  fastApi,
  firebase,
  flask,
  flutter,
  gatsby,
  git,
  go,
  googleCloud,
  graphQL,
  hardhat,
  html,
  java,
  javaScript,
  jest,
  jenkins,
  kubernetes,
  mongoDB,
  mySQL,
  nestJS,
  nextJS,
  nodeJS,
  postgres,
  python,
  react,
  redis,
  rust,
  socketio,
  solidity,
  svelte,
  tailwindcss,
  typeScript,
} from '@/components/ui/icons';
import { analyticsEvent } from './analytics';

const jostFont = Jost({
  subsets: ['latin'],
  display: 'swap',
});

const TopSkills: FC = () => {
  return (
    <>
      <h3 className='mb-8 flex items-center gap-x-5 text-3xl font-bold sm:text-4xl'>
        Top Skills
        <div className='flex items-center'>
          <AllSkillsWrapper />
        </div>
      </h3>
      <div
        className={`${jostFont.className} mb-8 flex flex-wrap justify-center gap-x-5 gap-y-8`}
      >
        <div className='flex flex-wrap justify-center gap-x-5 gap-y-8'>
          <SkillIcon icon={react} label='React' />
          <SkillIcon icon={nextJS} label='Next.js' />
          <SkillIcon icon={nodeJS} label='Node.js' />
        </div>
        <div className='flex flex-wrap justify-center gap-x-5 gap-y-8'>
          <SkillIcon icon={typeScript} label='TypeScript' />
          <SkillIcon icon={express} label='Express.js' />
          <SkillIcon icon={go} label='Go' />
        </div>
      </div>
    </>
  );
};

const AllSkills: FC = () => {
  return (
    <>
      <h3 className='mb-3 text-2xl font-semibold'>Languages & Frameworks</h3>
      <div
        className={`${jostFont.className} mb-8 flex flex-wrap gap-x-5 gap-y-8`}
      >
        <SkillIcon icon={react} label='React' />
        <SkillIcon icon={nextJS} label='Next.js' />
        <SkillIcon icon={nodeJS} label='Node.js' />
        <SkillIcon icon={gatsby} label='Gatsby' />
        <SkillIcon icon={svelte} label='Svelte' />
        <SkillIcon icon={javaScript} label='JavaScript' />
        <SkillIcon icon={typeScript} label='TypeScript' />
        <SkillIcon icon={html} label='HTML' />
        <SkillIcon icon={css} label='CSS' />
        <SkillIcon icon={express} label='Express.js' />
        <SkillIcon icon={nestJS} label='NestJS' />
        <SkillIcon icon={electron} label='Electron.js' />
        <SkillIcon icon={go} label='Go' />
        <SkillIcon icon={python} label='Python' />
        <SkillIcon icon={fastApi} label='FastAPI' />
        <SkillIcon icon={django} label='Django' />
        <SkillIcon icon={flask} label='Flask' />
        <SkillIcon icon={java} label='Java' />
        <SkillIcon icon={solidity} label='Solidity' />
        <SkillIcon icon={hardhat} label='Hardhat' />
        <SkillIcon icon={rust} label='Rust' />
        <SkillIcon icon={flutter} label='Flutter' />
      </div>
      <h3 className='mb-3 text-2xl font-semibold'>Tools & Platforms</h3>
      <div
        className={`${jostFont.className} mb-8 flex flex-wrap gap-x-5 gap-y-8`}
      >
        <SkillIcon icon={git} label='Git' />
        <SkillIcon icon={socketio} label='Socket.io' />
        <SkillIcon icon={graphQL} label='GraphQL' />
        <SkillIcon icon={firebase} label='Firebase' />
        <SkillIcon icon={tailwindcss} label='Tailwind CSS' />
        <SkillIcon icon={docker} label='Docker' />
        <SkillIcon icon={kubernetes} label='Kubernetes' />
        <SkillIcon icon={jest} label='Jest' />
        <SkillIcon icon={jenkins} label='Jenkins' />
        <SkillIcon icon={aws} label='AWS' />
        <SkillIcon icon={googleCloud} label='GCP' />
        <SkillIcon icon={digitalOcean} label='Digital Ocean' />
      </div>
      <h3 className='mb-3 text-2xl font-semibold'>Databases</h3>
      <div
        className={`${jostFont.className} mb-8 flex flex-wrap gap-x-5 gap-y-8`}
      >
        <SkillIcon icon={mySQL} label='MySQL' />
        <SkillIcon icon={postgres} label='PostgreSQL' />
        <SkillIcon icon={mongoDB} label='MongoDB' />
        <SkillIcon icon={redis} label='Redis' />
      </div>
    </>
  );
};

const AllSkillsWrapper: FC = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger
          className='outline-none'
          id='skills-btn'
          onClick={() => {
            analyticsEvent('open_skills_modal', {
              category: 'Skills',
            });
          }}
        >
          <AnimBorder rounded>
            <span className='glass-effect flex items-center rounded-full px-3 py-2 text-base hover:bg-white hover:bg-opacity-10'>
              All&nbsp;skills
            </span>
          </AnimBorder>
        </DialogTrigger>
        <DialogContent className='flex h-[100vh] max-w-[100vw] flex-col sm:h-[90vh] sm:max-w-[90vw]'>
          <DialogTitle className='flex h-10 items-center text-3xl'>
            All Skills
          </DialogTitle>
          <ReactLenis className='h-full overflow-auto'>
            <DialogFooter className='block px-1 text-gray-200'>
              <AllSkills />
            </DialogFooter>
          </ReactLenis>
        </DialogContent>
      </Dialog>
    </>
  );
};

const SkillIcon: FC<{ icon: JSX.Element; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <div className='glow-box-sm glow-box-sm-hover skill-glow group flex flex-col items-center rounded-xl bg-slate-400 bg-opacity-20 px-4 py-3 transition-all hover:-mx-1.5'>
      <div className='w-12 group-hover:mx-1.5 sm:w-16'>{icon}</div>
      <div className='mt-2 text-center font-sans text-sm font-semibold group-hover:mx-1.5 sm:text-lg'>
        {label}
      </div>
    </div>
  );
};

export default TopSkills;
