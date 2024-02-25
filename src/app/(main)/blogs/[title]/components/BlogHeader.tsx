'use client'
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';

interface BlogHeaderProps {
  title: string;
  comments_count?: number;
  reading_time_minutes?: number;
  page_views_count?: number | null;
  published_at?: string;
}

const BlogHeader = ({
  title,
  page_views_count,
  published_at,
  reading_time_minutes,
}: BlogHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {!isScrolled ? (
        <h1
          className='text-2xl font-semibold'
        >
          {title}
        </h1>
      ) : (
        <div
          className='lg:sticky top-0 bg-light dark:bg-dark py-6 z-10 shadow-bottom backdrop-blur border-b border-neutral-300 dark:border-neutral-600'
        >
          <h1 className='text-lg lg:text-xl font-semibold'>{title}</h1>
        </div>
      )}
      <div className='flex flex-col sm:flex-row gap-2 justify-between mb-6 pt-5 pb-6 border-b border-dashed border-neutral-600 text-neutral-600 dark:text-neutral-400 text-[14px]'>
        <div>
          Published on
          <span className='px-1 font-medium'>
            {published_at ? format(published_at, 'LLLL dd, yyyy') : ''}
          </span>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex gap-1 items-center font-medium'>
            <ViewIcon size={16} />
            <div className='flex gap-1 ml-0.5'>
              <span>{page_views_count?.toLocaleString() || '-'}</span>
              <span>Views</span>
            </div>
          </div>
          <div className='flex gap-1 items-center font-medium'>
            <ClockIcon size={16} />
            <div className='flex gap-1 ml-0.5'>
              <span>{reading_time_minutes}</span>
              <span>Minutes Read</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;