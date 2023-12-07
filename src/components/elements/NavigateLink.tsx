'use client'
import Link from "next/link";
import nProgress from "nprogress";
import { ReactNode } from "react"
import { usePathname } from "next/navigation";

interface NavigateProps {
    href: string;
    children: ReactNode;
}

const NavigateLink = ({ children, href }:NavigateProps) => {
    const pathname = usePathname()

    const handleClick = () => {
        nProgress.start()
        if (pathname === href) {
            nProgress.done()
        }
    }

 return (
    <>
        <Link onClick={handleClick}  href={href}>
            {children}
        </Link>
    </>
 )
}

export default NavigateLink