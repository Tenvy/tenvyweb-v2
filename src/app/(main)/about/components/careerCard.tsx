import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/components/elements/Card';
import Image from '@/components/elements/Image';
import { CareerProps } from '@/types/career';

const CareerCard = ({
  position,
  company,
  images,
  location,
  startDate,
  endDate
}: CareerProps) => {
  const start_date = new Date(startDate);
  const end_date = endDate ? new Date(endDate) : new Date();

  const durationYears = differenceInYears(end_date, start_date);
  const durationMonths = differenceInMonths(end_date, start_date) % 12;

  let durationText = '';
  if (durationYears > 0) {
    durationText += `${durationYears} Year${durationYears > 1 ? 's' : ''} `;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? 's' : ''}`;
  }

  return (
    <Card className='flex items-center gap-5 py-4 px-6 border border-neutral-800'>
      {images ? (
        <Image src={images} width={55} height={55} alt={company} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className='space-y-1'>
        <h6>{position}</h6>
        <div className='text-sm text-neutral-400 space-y-2'>
          <div className='flex items-center gap-1 md:gap-2'>
              <span className='hover:text-white'>
                {company}
              </span>
            <span className='text-neutral-700'>•</span>
            <span>{location}</span>
          </div>
          <div className='flex flex-col md:text-[13px]'>
            <div className='flex gap-1'>
              <span>{format(start_date, 'MMM yyyy')}</span> -{' '}
              <span>{endDate ? format(end_date, 'MMM yyyy') : 'Present'}</span>
            </div>
            <span className='text-neutral-500'>
              ~ {durationText}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;