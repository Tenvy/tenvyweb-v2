'use client'
 
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
 
export function NavigationEvents() {
  const pathname = usePathname()
 
  useEffect(() => {
    nProgress.done()
  }, [pathname])
 
  return null
}