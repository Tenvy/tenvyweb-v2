'use client'
import { BiCodeAlt as SkillsIcon } from 'react-icons/bi';

import InfiniteLoopSlider from '@/components/elements/InfiniteLoopSlider';
import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import Image from 'next/image';

type Technology = {
    tech: string;
    images: string;
  };

const Tag = ({ icon, title }: { icon: string; title: string }) => (
    <div className='flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max bg-neutral-800 text-neutral-50 shadow-sm border border-neutral-700'>
    <Image src={icon} alt='Skill Image' width={25} height={25}/>
    <span>{title}</span>
  </div>
);

const Skills = ({ tech }: { tech: Technology[] }) => {

  const sliders = Array.from({ length: 3 }, (_, index) => {
    return (
      <InfiniteLoopSlider key={index} isReverse={index === 1}>
        {tech.map((res:any, index: number) => (
          <Tag key={index} icon={res.images} title={res.tech} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <SectionHeading
          title='Skills'
          icon={<SkillsIcon size={22} className='mr-1' />}
        />
        <SectionSubHeading>
          <p className='text-neutral-400'>My professional skills.</p>
        </SectionSubHeading>
      </div>

      <div className='flex w-full'>
        <div className='relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden'>
          {sliders}
          <div
            style={{
              pointerEvents: 'none',
              background:
                'linear-gradient(90deg, #0C0C0C, transparent 20%, transparent 80%, #0C0C0C)',
              position: 'absolute',
              inset: '0',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
