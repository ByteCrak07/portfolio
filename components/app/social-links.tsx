import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks: FC = () => {
  return (
    <div>
      <h3 className='text-center text-3xl font-bold sm:text-4xl lg:text-left'>
        My Socials
      </h3>
      <div className='mt-5 flex justify-center gap-x-4 sm:mt-10 sm:justify-normal'>
        <div className='glow-box-sm glow-box-sm-hover rounded-full'>
          <SocialIcon
            url='https://github.com/ByteCrak07'
            target='_blank'
            rel='noopener noreferrer'
            bgColor='#fff'
            aria-label='Github'
          />
        </div>
        <div className='glow-box-sm glow-box-sm-hover rounded-full'>
          <SocialIcon
            url='https://www.linkedin.com/in/abil-savio'
            target='_blank'
            rel='noopener noreferrer'
            fgColor='#fff'
            aria-label='LinkedIn'
          />
        </div>
        <div className='glow-box-sm glow-box-sm-hover rounded-full'>
          <SocialIcon
            url='https://twitter.com/AbilSavio'
            target='_blank'
            rel='noopener noreferrer'
            fgColor='#fff'
            aria-label='Twitter'
          />
        </div>
        {/* Custom Icon for medium */}
        <div className='glow-box-sm glow-box-sm-hover rounded-full'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='medium'
            href='https://medium.com/@abilsavio'
            className='social-icon'
            style={{
              display: 'inline-block',
              width: '50px',
              height: '50px',
              position: 'relative',
              overflow: 'hidden',
              verticalAlign: 'middle',
            }}
          >
            <div
              className='social-container'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: '100%',
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 37'>
                <g>
                  <path d='M 18.050781 0 C 28.019531 0 36.101562 8.25 36.101562 18.421875 C 36.101562 28.597656 28.019531 36.84375 18.050781 36.84375 C 8.082031 36.84375 0 28.597656 0 18.421875 C 0 8.25 8.082031 0 18.050781 0 Z M 46.875 1.078125 C 51.859375 1.078125 55.898438 8.84375 55.898438 18.421875 L 55.902344 18.421875 C 55.902344 28 51.859375 35.765625 46.875 35.765625 C 41.890625 35.765625 37.851562 28 37.851562 18.421875 C 37.851562 8.847656 41.890625 1.078125 46.875 1.078125 Z M 60.824219 2.886719 C 62.578125 2.886719 64 9.84375 64 18.421875 C 64 27 62.578125 33.960938 60.824219 33.960938 C 59.074219 33.960938 57.652344 27.003906 57.652344 18.421875 C 57.652344 9.84375 59.074219 2.886719 60.824219 2.886719 Z M 60.824219 2.886719 ' />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
