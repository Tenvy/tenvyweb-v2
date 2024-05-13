'use client'
import Breakline from '@/components/elements/Breakline';
import MDXComponent from '@/components/elements/MDXComponent';
import { BlogItemProps } from '@/types/blog';

import BlogHeader from './BlogHeader';
import { useEffect } from 'react';
import { updateViews } from '@/services/view';

const BlogDetail = ({
  id,
  title,
  createdate,
  content,
  views,
  tags,
  timeRead
}: BlogItemProps) => {

  const timeReadMinute = Math.floor(timeRead / 60)

  useEffect(()=>{
    updateViews(parseInt(id))
  },[id])

  return (
    <>
      <BlogHeader
        title={title}
        comments_count={0}
        reading_time_minutes={timeReadMinute}
        published_at={createdate}
        page_views_count={views / 2}
      />
      <div className='space-y-6 leading-[1.8] dark:text-neutral-300 '>
        {content && <MDXComponent>{content}</MDXComponent>}
      </div>
      {tags?.length >= 1 && (
        <div className='my-10 space-y-2'>
          <h6 className='text-lg font-medium'>Tags:</h6>
          <div className='flex flex-wrap gap-2 pt-2'>
            {tags?.map((tag, key: number) => (
              <div
                key={key}
                className='bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 rounded-full px-4 py-1 text-[14px] font-medium'
              >
                <span className='font-semibold mr-1'>#</span>
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
      <Breakline className='!my-10' />
    </>
  );
};

export default BlogDetail;