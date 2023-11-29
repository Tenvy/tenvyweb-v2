import { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

type SkeletonLoaderProps = {
  children: ReactNode;
};

const SkeletonLoader = ({ children }: SkeletonLoaderProps) => {

  const baseColor = '#202020'
  const highlightColor = '#2e2e2e'

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonLoader;