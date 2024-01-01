import { TbSchool as EducationIcon } from 'react-icons/tb';

import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';

import EducationCard from './educationCard';
import { getEducation } from '@/services/education';
import { EducationProps } from '@/types/education';

const EducationList = async () => {
    const education = await getEducation()

  return (
    <section className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading
          title='Education'
          icon={<EducationIcon size={22} className='mr-1' />}
        />
        <SectionSubHeading>
          <p className='dark:text-neutral-400'>My educational journey.</p>
        </SectionSubHeading>
      </div>

      <div className='grid md:grid-cols-1 gap-4'>
        {education?.map((item:EducationProps, index:number) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;