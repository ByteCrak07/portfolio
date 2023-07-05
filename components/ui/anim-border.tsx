'use client';

import { FC, ReactNode } from 'react';

const AnimBorder: FC<{ children: ReactNode; rounded?: boolean }> = ({
  children,
  rounded,
}) => {
  return (
    <div className={`anim-border p-0.5 ${rounded ? 'rounded-full' : ''}`}>
      {children}
    </div>
  );
};

export default AnimBorder;
