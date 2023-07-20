import { FC } from 'react';
import Command from './command';

const Footer: FC = () => {
  return (
    <footer className='glass-effect glow-box-sm mt-3 px-6 py-3 text-sm text-slate-400'>
      <div className='mx-auto flex max-w-4xl items-center justify-between'>
        <div>
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
          . Deployed on{' '}
          <a
            href='https://vercel.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white'
          >
            Vercel
          </a>
          .
        </div>
        <Command />
      </div>
    </footer>
  );
};

export default Footer;
