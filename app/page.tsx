import Image from 'next/image';
import {
  AnimIntroText,
  Bio,
  Blogs,
  Contact,
  Experience,
  Projects,
  Skills,
  SocialLinks,
} from '@/components/app';

export default function Home() {
  return (
    <main className='flex flex-grow flex-col'>
      <section className='glass-effect glow-box-sm m-3 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:mb-10 sm:mt-5 sm:px-32 sm:py-20'>
        <div className='flex flex-col items-center justify-center gap-x-28 gap-y-5 lg:flex-row'>
          <div className='flex-[7]'>
            <div className='m-5 ml-auto max-w-[180px] sm:max-w-[300px]'>
              <Image
                src='/assets/dp-1.jpg'
                alt='Abil Savio'
                height={300}
                width={300}
                className='glow-box overflow-hidden rounded-3xl'
                loading='eager'
                placeholder='blur'
                blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACMQAAIBAwMEAwAAAAAAAAAAAAECAwAEIQUREgYTYZEHFXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABoRAAICAwAAAAAAAAAAAAAAAAEDAAIEESH/2gAMAwEAAhEDEQA/AMxttAh1HSppIJXe6S44t2wGVU44P4TgHz4olPj7V3jVxCdmAIxTHoQD6a4O2TPn0Kru44xzb3RHsvQ8MoYylsB2J//Z'
              />
            </div>
          </div>
          <div className='flex flex-[8] flex-col justify-center'>
            <h1>
              <AnimIntroText />
            </h1>
          </div>
        </div>

        <Bio />

        <div className='mt-14 sm:mt-20'>
          <Skills />
        </div>

        <div className='mt-14 sm:mt-20'>
          <SocialLinks />
        </div>
      </section>

      <section
        id='projects'
        className='glass-effect glow-box-sm m-3 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Projects</h2>
        <p className='mt-2 text-lg'>
          Here are some of the projects I&apos;ve built during my entire career
          as a developer.
        </p>
        <Projects />
      </section>

      <section
        id='experience'
        className='glass-effect glow-box-sm m-3 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Experience</h2>
        <p className='mt-2 text-lg'>
          Explore my professional journey as a developer.
        </p>
        <Experience />
      </section>

      <section
        id='blogs'
        className='glass-effect glow-box-sm m-3 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Blogs</h2>
        <p className='mt-2 text-lg'>
          Explore my blogs where I share insights, tips, and experiences from my
          journey as a developer.
        </p>
        <Blogs />
      </section>

      <section
        id='contact'
        className='glass-effect glow-box-sm m-3 flex flex-col rounded-xl px-6 py-10 sm:mx-16 sm:my-10 sm:px-32 sm:py-20'
      >
        <h2 className='text-3xl font-bold sm:text-4xl'>Contact</h2>
        <p className='mt-2 text-lg'>
          Let&apos;s Connect and Collaborate! Whether you have a project in
          mind, or simply have a question, feel free to reach out.
        </p>
        <Contact />
      </section>
    </main>
  );
}
