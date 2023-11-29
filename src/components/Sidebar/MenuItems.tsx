'use client'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { createContext } from 'react';
import { useContext, useState } from 'react';
import { BsArrowRightShort as ExternalLinkIcon } from 'react-icons/bs';
import { MenuItemProps } from '@/types/sidebarMenu';
import nProgress from 'nprogress';
import '@/app/nprogress.css'

type MenuContextType = {
    hideNavbar: () => void;
};

export const MenuContext = createContext<MenuContextType>({
    hideNavbar: () => { },
});

const MenuItem = ({
    title,
    href,
    icon,
    onClick,
    className = '',
    children,
    hideIcon = false,
}: MenuItemProps) => {
    const { hideNavbar } = useContext(MenuContext);
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();
    const [path, setPath] = useState("");
    const isExternalUrl = href?.includes('http');
    const isHashLink = href === '#';
    const router = useRouter();

    const activeClasses = `flex font-sora items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg group ${pathname === href
            ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-200'
            : 'hover:dark:lg:bg-neutral-800 hover:dark:!text-neutral-300 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:transition-all lg:duration-300'
        }`;

    const handleClick = async () => {
        nProgress.start()
        if(pathname === path) {
            await nProgress.done()
        }
        setPath(pathname)
        hideNavbar();
        if (onClick) onClick();
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const elementProps = {
        className: `${activeClasses} ${className}`,
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    };

    const isActiveRoute = pathname === href;

    const itemComponent = () => {
        return (
            <div
                className={`
          ${activeClasses} 
          ${className}
          ${!hideIcon && `
            group-hover:-rotate-12 transition-all duration-300 
          `}
        `}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {!hideIcon && (
                    <div
                        className={`${'group-hover:-rotate-12 transition-all duration-300' +
                            (isActiveRoute && '-rotate-12')
                            }`}
                    >
                        {icon}
                    </div>
                )}
                <div className='flex-grow ml-0.5'>{title}</div>
                {children && <>{children}</>}
                {isActiveRoute && (
                    <ExternalLinkIcon size={22} className='text-gray-500 animate-pulse' />
                )}
                {isExternalUrl && isHovered && (
                    <ExternalLinkIcon
                        size={22}
                        className='text-gray-500 -rotate-45 lg:transition-all lg:duration-300'
                    />
                )}
            </div>
        );
    };

    return isHashLink ? (
        <div className='cursor-pointer'>{itemComponent()}</div>
    ) : (
        <Link
            href={href}
            target={isExternalUrl ? '_blank' : ''}
            onClick={handleClick}
        >
            {itemComponent()}
        </Link>
    );
};

export default MenuItem;