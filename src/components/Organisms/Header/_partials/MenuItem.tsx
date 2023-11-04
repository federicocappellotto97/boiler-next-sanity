'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { cx } from '@/lib/core/cva'

const MenuItem = ({ url, label }: { url: string; label: string }) => {
    const pathname = usePathname()
    return (
        <NextLink
            href={url}
            className={cx(
                'relative z-10 inline-block text-lg font-medium transition-colors duration-300 ease-out hover:text-green-400',
                pathname == url ? 'pointer-events-none text-green-700' : 'text-black dark:text-white'
            )}
        >
            {label}
        </NextLink>
    )
}

export default MenuItem
