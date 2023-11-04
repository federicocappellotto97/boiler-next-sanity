'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { SettingsContext } from '@/lib/core/context'

const Logo = () => {
  const { title } = useContext(SettingsContext)

  return (
    <Link href="/" aria-label={title} title={title}>
      Logo
    </Link>
  )
}

export default Logo
