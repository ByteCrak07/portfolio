import { FC } from 'react';
import Command from './command';

const Footer: FC = () => {
  return (
    <footer className='glass-effect glow-box-sm mt-3 px-6 py-4 text-sm text-slate-400'>
      <div className='mx-auto flex max-w-4xl flex-col-reverse items-center justify-between gap-y-3 md:flex-row'>
        <div className='text-center md:text-left'>
          Made with ❤️{' '}
          <a
            href='https://nextjs.org'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white'
          >
            Next.js
          </a>
          . Components from{' '}
          <a
            href='https://ui.shadcn.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white'
          >
            shadcn/ui
          </a>
          .
          <br />
          Blogs hosted by{' '}
          <a
            href='https://hashnode.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white'
          >
            Hashnode
          </a>
          . Deployed on{' '}
          <a
            href='https://vercel.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white'
          >
            Vercel
          </a>
          . Code available on{' '}
          <a
            href='https://github.com/ByteCrak07/portfolio'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white'
          >
            Github
          </a>
          .
        </div>
        <Command />
      </div>
    </footer>
  );
};

export default Footer;
