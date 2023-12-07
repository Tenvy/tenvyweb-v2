'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';

type ImageProps = {
  rounded?: string;
} & NextImageProps;

const Image = (props: ImageProps) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  const imageClassNames = [
    'duration-700 ease-in-out',
    isLoading ? 'scale-[1.02] blur-xl grayscale' : 'scale-100 blur-0 grayscale-0',
    rounded,
    className
  ].filter(Boolean).join(' ');

  const containerClassNames = [
    'overflow-hidden',
    isLoading ? 'animate-pulse' : '',
    rounded
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClassNames}>
      <NextImage
        className={imageClassNames}
        src={src}
        alt={alt}
        loading='lazy'
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default Image;
