'use client'
import React, { useState } from 'react'
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import ImageProfile from "./ImageProfile";
import MobileMenuButton from './MobileMenuButton'
import Menu from './Menu'
import { MENU_ITEMS } from './MenuProps'
import Breakline from '../elements/Breakline';

const Mobile = ({ ownerData }: any) => {
    const [expandMenu, setExpandMenu] = useState<boolean>(true);

    return (
        <>
            <div className='flex justify-between items-start lg:flex-col md:px-2 gap-1'>
                <div className="flex lg:block">
                    <ImageProfile profileImage={ownerData?.profileImage} />
                    <div className='lg:text-xl font-bold my-auto lg:mt-5 flex gap-2 items-center'>
                        {ownerData?.nickname}
                        <span>
                            <VerifiedIcon size={18} className='text-blue-400' />
                        </span>
                    </div>
                </div>
                <div className='text-gray-400 hidden lg:block'>
                    @{ownerData?.username}
                </div>
                <div className="my-auto mx-3 lg:hidden">
                    <MobileMenuButton
                        expandMenu={expandMenu}
                        setExpandMenu={setExpandMenu}
                    />
                </div>
            </div>
            <div>
                {expandMenu && (
                    <>
                        <Breakline />
                        <Menu list={MENU_ITEMS} className='!flex' />
                        <Breakline />
                    </>
                )}
            </div>
        </>
    )
}

export default Mobile
