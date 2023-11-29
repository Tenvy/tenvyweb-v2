import Image from "next/image"
import { getOwner } from '@/services/owner'
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import { Suspense } from "react";
import ProfileSkeleton from "../skeleton/ProfileSkeleton";

const Profile = async () => {
    const ownerData: any = await getOwner()

    return (
        <div className='px-2'>
            <div className='flex flex-col gap-1'>
                <Suspense fallback={<ProfileSkeleton/>}>
                    <Image className='rounded-full' src={ownerData?.profileImage} alt='Profile' width={100} height={100} />
                    
                </Suspense>
                <div className='text-xl font-bold mt-4 flex gap-2 items-center'>
                    {ownerData?.nickname}
                    <span>
                        <VerifiedIcon size={18} className='text-blue-400' />
                    </span>
                </div>
                <div className='text-gray-400'>
                    @{ownerData?.username}
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex gap-2 items-center'>
                    <div className='h-2 w-2 bg-green-500 rounded-full animate-pulse'></div>
                    <div className='text-gray-400'>
                        available to hire
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
