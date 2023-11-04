import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import Footer from '@/components/Organisms/Footer/Footer'
import Header from '@/components/Organisms/Header/Header'
import PageTransition from '@/lib/core/PageTransition'
import Context from '@/lib/core/context'
import { cx } from '@/lib/core/cva'
import Lenis from '@/lib/core/lenis'
import client from '@/sanity/client'
import { settingsQuery } from '@/sanity/queries'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })
export const revalidate = 60

async function getLayout() {
  const layout = await client.fetch(settingsQuery())

  return layout
}
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const layout = await getLayout()
  return (
    <html lang="en">
      <body className={cx(inter.className, 'flex min-h-screen flex-col bg-white')}>
        <PageTransition>
          <NextTopLoader color="black" />
          <Context layout={layout}>
            <Lenis>
              <Header />
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
            </Lenis>
          </Context>
        </PageTransition>
      </body>
    </html>
  )
}
