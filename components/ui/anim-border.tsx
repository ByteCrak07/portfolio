'use client';

import { FC, ReactNode } from 'react';

const AnimBorder: FC<{ children: ReactNode; rounded?: boolean }> = ({
  children,
  rounded,
}) => {
  return (
    <>
      <style jsx>{`
        .anim-border {
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab
          );
          background-size: 600% 400%;
          animation: gradient 3s linear infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 0%;
          }
          10% {
            background-position: 0% 50%;
          }
          20% {
            background-position: 50% 50%;
          }
          30% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          70% {
            background-position: 50% 100%;
          }
          80% {
            background-position: 50% 50%;
          }
          90% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
      <div className={`anim-border p-0.5 ${rounded ? 'rounded-full' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default AnimBorder;
