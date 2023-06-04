import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { AnimIntroText, AnimText } from '@/components/app/anim-text';
import Bio from '@/components/app/bio';

export default function Home() {
  return (
    <main className='flex flex-grow flex-col'>
      <section className='glass-effect m-3 flex flex-col rounded-xl px-10 py-5 sm:mx-10 sm:my-5 sm:px-32 sm:py-20'>
        <div className='flex flex-col-reverse items-center gap-x-28 gap-y-5 lg:flex-row'>
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
              className='glow-box overflow-hidden rounded-xl'
            />
          </div>
        </div>

        <div className='mt-20'>
          <h3 className='text-4xl font-bold'>Social Links</h3>
          <div className='mt-10 flex gap-x-4'>
            <div className='glow-box-sm glow-box-sm-hover rounded-full'>
              <SocialIcon
                url='https://github.com/ByteCrak07'
                target='_blank'
                rel='noopener noreferrer'
                bgColor='#fff'
              />
            </div>
            <div className='glow-box-sm glow-box-sm-hover rounded-full'>
              <SocialIcon
                url='https://www.linkedin.com/in/abil-savio'
                target='_blank'
                rel='noopener noreferrer'
                fgColor='#fff'
              />
            </div>
            <div className='glow-box-sm glow-box-sm-hover rounded-full'>
              <SocialIcon
                url='https://twitter.com/AbilSavio'
                target='_blank'
                rel='noopener noreferrer'
                fgColor='#fff'
              />
            </div>
            <div className='glow-box-sm glow-box-sm-hover rounded-full'>
              <SocialIcon
                url='https://medium.com/@abilsavio'
                target='_blank'
                rel='noopener noreferrer'
                fgColor='#fff'
              />
            </div>
            <div className='glow-box-sm glow-box-sm-hover rounded-full'>
              <SocialIcon
                url='https://www.instagram.com/abilsavio'
                target='_blank'
                rel='noopener noreferrer'
                fgColor='#fff'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
