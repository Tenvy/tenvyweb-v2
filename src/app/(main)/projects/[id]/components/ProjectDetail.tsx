import Image from '@/components/elements/Image';
import MDXComponent from '@/components/elements/MDXComponent';
import { ProjectItemProps } from '@/types/projects';

import ProjectLink from './ProjectLink';
import Stack from '@/components/elements/stack';

const ProjectDetail = ({
  title,
  images,
  techstack,
  siteUrl,
  sourceUrl,
  content,
}: ProjectItemProps) => {

  return (
    <div className='space-y-8'>
      <div className='flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between'>
        <div className='flex items-center flex-wrap gap-2'>
          <span className='text-[15px] text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            <Stack techstack={techstack}/>
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={siteUrl}
          link_github={sourceUrl}
        />
      </div>
      <Image
        src={images}
        width={800}
        height={400}
        alt={title}
        className='hover:scale-105'
      />
      {content && (
        <div className='space-y-6 leading-[1.8] text-neutral-300 mt-5'>
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;