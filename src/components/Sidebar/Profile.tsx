import { getOwner } from '@/services/owner'
import Mobile from './Mobile';

const Profile = async () => {
    const ownerData: any = await getOwner()

    return (
        <div className='px-2 z-20 fixed shadow-sm sm:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-[#121212] lg:!bg-transparent w-full lg:relative lg:p-0'>
                <Mobile ownerData={ownerData} />
            <div className='mt-4 hidden lg:block lg:px-2'>
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
