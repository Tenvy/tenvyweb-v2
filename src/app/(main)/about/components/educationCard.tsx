
import { format } from 'date-fns';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/components/elements/Card';
import Image from '@/components/elements/Image';
import { EducationProps } from '@/types/education';

const EducationCard = ({
  school,
  major,
  location,
  images,
  degree,
  startDate,
  endDate,
}: EducationProps) => {
  const start_date = new Date(startDate);
  const end_date = endDate ? new Date(endDate) : new Date();

  return (
    <Card className='flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-900'>
      {images ? (
        <Image src={images} width={55} height={55} alt={school} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className='space-y-1'>
        <h6>{school}</h6>
        <div className='text-sm text-neutral-600 dark:text-neutral-400 space-y-2'>
          <div className='flex flex-col md:flex-row gap-1 md:gap-2'>
            {degree ? (
              <span>{degree}</span>
            ) : null}
            {major ? (
              <>
                <span className='hidden md:flex text-neutral-300 dark:text-neutral-700'>
                  •
                </span>
                <span>{major}</span>
              </>
            ) : null}
            {location ? (
              <>
                <span className='hidden md:flex text-neutral-300 dark:text-neutral-700'>
                  •
                </span>
                <span>{location}</span>
              </>
            ) : null}
          </div>
          <div className='flex flex-col md:text-[13px]'>
            <div className='flex gap-1'>
              <span>{format(start_date, 'yyyy')}</span> -{' '}
              <span>{endDate ? format(end_date, 'yyyy') : 'Present'}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;