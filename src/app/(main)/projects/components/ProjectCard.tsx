import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';
import Card from '@/components/elements/Card';
import Image from '@/components/elements/Image';
import { ProjectItemProps } from '@/types/projects';
import Stack from '@/components/elements/stack';
import NavigateLink from '@/components/elements/NavigateLink';

const ProjectCard = async ({
  title,
  id,
  description,
  images,
  techstack
}: ProjectItemProps) => {

  return (
    <NavigateLink href={`/projects/${id}`}>
      <Card className='group relative border border-neutral-900 lg:hover:scale-[102%] cursor-pointer'>
        <div className='relative'>
          <Image
            src={images}
            width={400}
            height={200}
            alt={title}
            className='rounded-t-xl h-48 object-cover object-left'
          />
          <div className='flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium'>
            <span>View Project</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className='p-5 space-y-2'>
          <div className='flex justify-between'>
            <div className='text-lg font-sora cursor-pointer text-neutral-300 lg:group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300'>
              {title}
            </div>
          </div>
          <p className='text-neutral-400 text-[15px] leading-relaxed'>
            {description}
          </p>
          <div className='flex flex-wrap items-center gap-3 pt-2'>
            <Stack techstack={techstack}/>
          </div>
        </div>
      </Card>
    </NavigateLink>
  );
};

export default ProjectCard;