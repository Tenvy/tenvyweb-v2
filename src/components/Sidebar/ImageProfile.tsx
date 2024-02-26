'use client'
import React, { Suspense } from 'react'
import ProfileSkeleton from '../skeleton/ProfileSkeleton'
import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'

const ImageProfile = ({profileImage}: any) => {
    const { width } = useWindowSize();
    const isMobile = width <= 1024; // Adjust the width threshold based on your mobile breakpoint
  
    const imageSize = isMobile ? 80 : 100;

    return (
        <Suspense fallback={<ProfileSkeleton />}>
            <Image className='rounded-full p-3 lg:p-0' src={profileImage} alt='Profile' width={imageSize} height={imageSize} />
        </Suspense>
    )
}

export default ImageProfile
