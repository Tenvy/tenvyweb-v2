'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiArrowLeftCircle as BackButtonIcon } from 'react-icons/fi';
import NavigateLink from './NavigateLink';

type BackButtonProps = {
  url?: string;
};

const BackButton = ({ url }: BackButtonProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    if (url) {
      window.location.href = url;
    } else {
      router.back();
    }
  };

  const className =
    'flex gap-2 w-max hover:gap-3 items-center mb-6 transition-all duration-300 font-medium text-neutral-400 cursor-pointer';

  const BackButtonChildComponent = () => {
    return (
      <>
        <BackButtonIcon size={20} data-testid='back-icon' />
        <span>Back</span>
      </>
    );
  };

  return (
    <div className='w-fit'>
      {url ? (
        <NavigateLink href={url}>
          <div className={className}>
            <BackButtonChildComponent />
          </div>
        </NavigateLink>
      ) : (
        <div className={className} onClick={handleOnClick}>
          <BackButtonChildComponent />
        </div>
      )}
    </div>
  );
};

export default BackButton;