'use client'
import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from 'react'

interface ProviderProps {
  children: ReactNode,
  session: any
}

const Provider = ({ children, session }: ProviderProps) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider