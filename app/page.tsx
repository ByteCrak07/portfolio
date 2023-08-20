import {
  AnimIntroText,
  Bio,
  Blogs,
  Contact,
  Experience,
  IntroLoader,
  Projects,
  Skills,
  SocialLinks,
  Spotify,
} from '@/components/app';

export default function Home() {
  return (
    <>
      <section className='glass-effect glow-box-sm m-3 mt-5 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:mb-10 sm:px-32 sm:py-20 lg:mx-36'>
        <div className='relative flex flex-col items-center justify-center gap-x-28 gap-y-5 lg:flex-row'>
          <IntroLoader />
          <div className='flex-[7]'>
            <IntroLoader image />
          </div>
          <div className='flex flex-[8] flex-col justify-center'>
            <h1>
              <AnimIntroText />
            </h1>
          </div>
        </div>

        <div className='overflow-hidden'>
          <Bio />
        </div>

        <div className='mt-14 flex flex-col items-center sm:mt-20'>
          <Skills />
        </div>

        <div className='mt-14 flex flex-col items-center justify-center gap-14 sm:mt-20 lg:flex-row lg:items-end lg:gap-20'>
          <SocialLinks />
          <Spotify />
        </div>
      </section>

      <section
        id='projects'
        className='glass-effect glow-box-sm m-3 mt-10 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20 lg:mx-36'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Projects</h2>
        <p className='mt-2 text-base sm:text-lg'>
          These are some of the projects I&apos;ve built during my entire career
          as a developer.
        </p>
        <Projects />
      </section>

      <section
        id='experience'
        className='glass-effect glow-box-sm m-3 mt-10 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20 lg:mx-36'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Experience</h2>
        <p className='mt-2 text-base sm:text-lg'>
          Explore my professional journey as a developer.
        </p>
        <Experience />
      </section>

      <section
        id='blogs'
        className='glass-effect glow-box-sm m-3 mt-10 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20 lg:mx-36'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Blogs</h2>
        <p className='mt-2 text-base sm:text-lg'>
          Explore my blogs where I share insights, tips, and experiences from my
          journey as a developer. Explore all my blogs at{' '}
          <a
            className='hover:text-glow font-semibold underline hover:cursor-pointer'
            href='https://blog.abilsavio.tech'
            target='_blank'
            rel='noopener noreferrer'
          >
            blog.abilsavio.tech
          </a>
        </p>
        <Blogs />
      </section>

      <section
        id='contact'
        className='glass-effect glow-box-sm m-3 mt-10 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20 lg:mx-36'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Contact</h2>
        <p className='mt-2 text-base sm:text-lg'>
          Let&apos;s Connect and Collaborate! Whether you have a project in
          mind, or simply have a question, feel free to reach out.
        </p>
        <Contact />
      </section>
    </>
  );
}
