import { FC } from 'react';

const Experience: FC = () => {
  return (
    <div className='ml-2 mt-10 sm:ml-20 sm:mt-16'>
      <ol className='border-glow relative border-l-2'>
        <li className='mb-10 ml-4'>
          <div className='bg-glow absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-slate-800'></div>
          <time className='text-glow mb-1 text-sm font-normal leading-none'>
            {new Date().toLocaleDateString('en-IN', {
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <div className='text-lg text-slate-200'>Today</div>
        </li>

        <li id='buildbear-labs' className='mb-10 ml-4'>
          <div className='bg-glow absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-slate-800'></div>
          <time className='text-glow mb-1 text-sm font-normal leading-none'>
            February 2023
          </time>
          <h3 className='text-2xl font-semibold text-white'>
            Full Stack Developer Intern
          </h3>
          <h4 className='text-lg text-slate-200'>
            <a
              href='https://www.buildbear.io'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'
            >
              @ BuildBear Labs
            </a>
          </h4>
          <p className='my-4 text-justify text-base text-slate-400'>
            BuildBear specializes in creating highly customizable private
            testnets specifically designed for decentralized applications
            (Dapps). With BuildBear, we have the flexibility to create testnets
            by forking from a diverse range of Ethereum-compatible chains.
            Explore and debug transactions effortlessly using their built-in
            explorer and transaction tracer. Mint popular ERC20 tokens with
            their user-friendly faucet. Buildbear is primarily a blockchain
            infrastructure company.
          </p>
          <ul className='ml-6 text-slate-400'>
            <li className='my-2 list-disc'>
              Worked mostly on their backend and infrastructure.
            </li>
            <li className='my-2 list-disc'>
              Spearheaded the development of{' '}
              <a
                href='https://utils.buildbear.io'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-white'
              >
                Buildbear Utils
              </a>{' '}
              project which contains a lot of cool stuff like impersonating any
              wallet address, interacting with contracts and dapps with
              impersonation, taking snapshots, and fast-forwarding time on
              Buildbear testnets
            </li>
            <li className='my-2 list-disc'>
              Created a Slack app for getting stats and server health-check
              notifications.
            </li>
            <li className='my-2 list-disc'>
              Worked with Express, TypeScript, Docker, Kubernetes & Next.JS.
            </li>
            <li className='my-2 list-disc'>
              Understood deeply the working of blockchain and smart contracts.
            </li>
            <li className='my-2 list-disc'>
              Learned a lot about container management, deployment and
              automation.
            </li>
            <li className='my-2 list-disc'>
              Website:{' '}
              <a
                href='https://www.buildbear.io'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-white'
              >
                buildbear.io
              </a>
            </li>
          </ul>
        </li>

        <li className='mb-10 ml-4'>
          <div className='bg-glow absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-slate-800'></div>
          <time className='text-glow mb-1 text-sm font-normal leading-none'>
            21 October 2022
          </time>
          <h3 className='text-2xl font-semibold text-white'>
            Full Stack Development Mentor
          </h3>
          <h4 className='text-lg text-slate-200'>@ NIT Calicut</h4>
          <p className='my-4 text-justify text-base text-slate-400'>
            Taught Full-stack (MERN) development basics at NIT Calicut for their
            tech fest Tathva&apos;22. Around 100 students attended the workshop.
          </p>
        </li>

        <li id='cryptoliterature' className='mb-10 ml-4'>
          <div className='bg-glow absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-slate-800'></div>
          <time className='text-glow mb-1 text-sm font-normal leading-none'>
            Jan 2022
          </time>
          <h3 className='text-2xl font-semibold text-white'>
            Chief Technology Officer
          </h3>
          <h4 className='text-lg text-slate-200'>
            <a
              href='https://cryptoliterature.in'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'
            >
              @ Cryptoliterature
            </a>
          </h4>
          <p className='my-4 text-justify text-base text-slate-400'>
            Cryptoliterature is an NFT marketplace for writers where writers can
            publish their works, write blogs and sell them as NFTs. Currently
            its in beta. Support for both ethereum and polygon NFTs during beta.
          </p>
          <ul className='ml-6 text-slate-400'>
            <li className='my-2 list-disc'>
              Built using Next.JS and NestJS along with Prisma for ORM. Deployed
              using Vercel and AWS.
            </li>
            <li className='my-2 list-disc'>
              As of now writers can onboard themselves and create blogs, which
              will be displayed on their profile.
            </li>
            <li className='my-2 list-disc'>
              Onboarded around 100 writers on the platform during the first beta
              release.
            </li>
            <li className='my-2 list-disc'>
              Website:{' '}
              <a
                href='https://cryptoliterature.in'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-white'
              >
                cryptoliterature.in
              </a>
            </li>
          </ul>
        </li>

        <li id='tatos-technologies' className='mb-10 ml-4'>
          <div className='bg-glow absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-slate-800'></div>
          <time className='text-glow mb-1 text-sm font-normal leading-none'>
            June 2021
          </time>
          <h3 className='text-2xl font-semibold text-white'>
            Software Developer
          </h3>
          <h4 className='text-lg text-slate-200'>
            <a
              href='https://tatos.tech'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'
            >
              @ TATOS Technologies
            </a>
          </h4>
          <p className='my-4 text-justify text-base text-slate-400'>
            TATOS is a group of highly skilled software developers who possess a
            visionary mindset aimed at bringing positive change to the world.
            Their mission is to efficiently digitize businesses across multiple
            industries. TATOS provides bespoke solutions to clients, catering to
            their specific needs.
          </p>
          <ul className='ml-6 text-slate-400'>
            <li className='my-2 list-disc'>
              Worked on multiple projects within the organization built using
              React, Next.JS, Flutter.
            </li>
            <li className='my-2 list-disc'>
              Managed Databases, Domain, Hosting, Backend, Client and Admin
              Sites.
            </li>
            <li className='my-2 list-disc'>
              Projects I&apos;ve worked on:{' '}
              <a
                href='https://koachme.in'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-white'
              >
                koachme.in
              </a>
              ,{' '}
              <a
                href='https://mydocdoor.com'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-white'
              >
                mydocdoor.com
              </a>
            </li>
            <li className='my-2 list-disc'>
              Website:{' '}
              <a
                href='https://tatos.tech'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-white'
              >
                tatos.tech
              </a>
            </li>
          </ul>
        </li>

        <li id='ieee-gec-thrissur' className='mb-10 ml-4'>
          <div className='bg-glow absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-slate-800'></div>
          <time className='text-glow mb-1 text-sm font-normal leading-none'>
            February 2021
          </time>
          <h3 className='text-2xl font-semibold text-white'>IEEE Webmaster</h3>
          <h4 className='text-lg text-slate-200'>
            <a
              href='https://ieee.gectcr.ac.in'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white'
            >
              @ IEEE GEC Thrissur
            </a>
          </h4>
          <p className='my-4 text-justify text-base text-slate-400'>
            Served as webmaster for IEEE GEC Thrissur for the year 2021. I was
            among a team of 3 webmasters. Today the website is maintained by my
            juniors in college.
          </p>
          <ul className='ml-6 text-slate-400'>
            <li className='my-2 list-disc'>
              Built their website with my team from scratch using GatsbyJS.
            </li>
            <li className='my-2 list-disc'>
              Setup Github Actions for automated builds and deployments of the
              website to the college FTP server.
            </li>
            <li className='my-2 list-disc'>
              Website:{' '}
              <a
                href='https://ieee.gectcr.ac.in'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-white'
              >
                ieee.gectcr.ac.in
              </a>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
