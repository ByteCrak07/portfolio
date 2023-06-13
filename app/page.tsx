import Image from 'next/image';
import {
  AnimIntroText,
  AnimText,
  AllSkills,
  Bio,
  TopSkills,
  SocialLinks,
} from '@/components/app';

export default function Home() {
  return (
    <main className='flex flex-grow flex-col'>
      <section className='glass-effect m-3 flex flex-col rounded-xl px-6 py-5 sm:mx-10 sm:my-5 sm:px-32 sm:py-20'>
        <div className='flex flex-col-reverse items-center gap-x-28 gap-y-5 lg:flex-row'>
          <div className='flex flex-col justify-center'>
            <h1 className='flex justify-center sm:justify-normal'>
              <AnimIntroText /> &nbsp;&nbsp;&nbsp;
              <AnimText />
            </h1>
            <Bio />
          </div>
          <div className='m-5 max-w-[180px] sm:max-w-[300px]'>
            <Image
              src='/assets/dp-1.jpg'
              alt='Abil Savio'
              height={400}
              width={400}
              className='glow-box overflow-hidden rounded-xl'
            />
          </div>
        </div>

        <div className='mt-20'>
          <AllSkills />
        </div>

        <div className='mt-20'>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
