import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import PageTransition from '@/lib/core/PageTransition'
import { cx } from '@/lib/core/cva'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it">
            <body className={cx(inter.className, 'flex min-h-screen flex-col bg-white')}>
                <PageTransition>
                    <NextTopLoader color="black" />
                    {children}
                </PageTransition>
            </body>
        </html>
    )
}
