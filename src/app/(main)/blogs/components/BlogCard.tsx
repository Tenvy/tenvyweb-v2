'use client'
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight as MoreIcon } from 'react-icons/bs';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';
import { TbCalendarBolt as DateIcon } from 'react-icons/tb';

import Breakline from '@/components/elements/Breakline';
import Card from '@/components/elements/Card';
import Image from '@/components/elements/Image';
import { BlogItemProps } from '@/types/blog';
import { format } from 'date-fns';

const BlogCard = ({
  id,
  title,
  description,
  content,
  images,
  publisher,
  views,
  timeRead,
  tags,
  createdate,
}: BlogItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const defaultImage = '/images/placeholder.png';

  const timeReadMinute = Math.floor(timeRead / 60)

  return (
    <Link href={`/blogs/${id}`}>
      <Card
        className={`group relative flex flex-col border dark:border-neutral-800 shadow-sm rounded-lg h-[400px] w-full`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className='duration-500 relative rounded-xl'
          style={{
            height: '400px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={images || defaultImage}
            alt={title}
            fill={true}
            sizes='100vw, 100vh'
            className='object-cover object-left w-full h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-80 transition-opacity duration-300'></div>
        </div>

        <div className='absolute flex flex-col justify-between p-5 space-y-4 h-full w-full'>
          <div className='flex flex-wrap gap-2'>
            {tags?.map((tag: any, key) => (
              <div
                key={key}
                className='px-2.5 py-1 rounded-full font-mono text-xs text-neutral-400 bg-neutral-900/50'
              >
                <span className='font-semibold mr-1'>#</span>
                {tag?.charAt(0).toUpperCase() + tag?.slice(1)}
              </div>
            ))}
          </div>

          <div className='flex flex-col justify-end'>
            <div className='flex flex-col space-y-3'>
              <h3 className='font-sora text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 '>
                {title}
              </h3>
              <div className='flex gap-1 items-center text-neutral-400'>
                <DateIcon size={14} />
                <span className='text-xs ml-0.5'>{format(createdate, 'LLLL dd, yyyy')}</span>
              </div>
            </div>
            <Breakline className='!border-neutral-700' />
            <div className='flex justify-between gap-4 text-neutral-400 px-0.5'>
              {publisher ? (
                <Image className='rounded-full' src={publisher?.profileImage} alt={publisher?.nickname} width={25} height={25} />
              ) : null}
              <div className='flex justify-between gap-4'>
                <div className={`flex gap-1 items-center ${isHovered ? 'hidden' : 'block'}`}>
                  <ViewIcon size={14} />
                  <span className='text-xs font-medium ml-0.5'>
                    {(views).toLocaleString()} VIEWS
                  </span>
                </div>
                <div className={`flex gap-1 items-center ${isHovered ? 'hidden' : 'block'}`}>
                  <ClockIcon size={14} />
                  <span className='text-xs font-medium ml-0.5'>
                    {timeReadMinute.toLocaleString()} MINS READ
                  </span>
                </div>
              </div>
              <div className={`flex gap-1 items-center ${isHovered ? 'block' : 'hidden'}`}>
                <span className='text-xs font-medium mr-0.5'>READ MORE</span>
                <MoreIcon size={16} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
