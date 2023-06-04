import Image from 'next/image';
import { AnimIntroText, AnimText } from '@/components/app/anim-text';
import Bio from '@/components/app/bio';

export default function Home() {
  return (
    <main className='flex flex-grow flex-col'>
      <section className='glass-effect m-3 flex flex-col-reverse items-center gap-x-28 gap-y-10 rounded-xl px-10 py-5 sm:mx-10 sm:my-5 sm:px-32 sm:py-10 lg:flex-row'>
        <div className='flex flex-col justify-center'>
          <h1 className='flex'>
            <AnimIntroText /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <AnimText />
          </h1>
          <Bio />
        </div>
        <div className='m-5 max-w-[300px]'>
          <Image
            src='/assets/dp-1.jpg'
            alt='Abil Savio'
            height={400}
            width={400}
            className='dp overflow-hidden rounded-xl transition-shadow duration-1000'
          />
        </div>
      </section>
    </main>
  );
}
