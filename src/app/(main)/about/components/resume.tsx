import Link from 'next/link';
import { LuDownload as DownloadIcon } from 'react-icons/lu';
import { RESUME_URL } from '@/constant/resume';

const Resume = () => {
  return (
    <Link
      href={RESUME_URL}
      target='_blank'
      passHref
      className='flex gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-400 hover:text-neutral-300 mt-6 border w-fit px-4 py-2.5 rounded-lg border-neutral-600 hover:border-neutral-300 bg-neutral-900'
      data-umami-event='Download Resume'
    >
      <DownloadIcon />
      <span>Download Resume</span>
    </Link>
  );
};

export default Resume;