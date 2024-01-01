import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';

import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';

import CareerCard from './careerCard';
import { getCareer } from '@/services/career';
import { CareerProps } from '@/types/career';

const CareerList = async () => {
    const career = await getCareer()

  return (
    <section className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='Career' icon={<CareerIcon className='mr-1' />} />
        <SectionSubHeading>
          <p className='text-neutral-400'>
            My professional career journey.
          </p>
        </SectionSubHeading>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        {career.map((career: CareerProps, index: number) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;