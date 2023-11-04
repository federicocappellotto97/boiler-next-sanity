import { Metadata } from 'next'

import Link from '@/components/Atoms/Button/Button'

export const metadata: Metadata = {
    title: '404',
    description: '404 - Pagina non trovata',
}
export default function NotFound() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-32 overflow-hidden">
            <p className="whitespace-nowrap text-center text-lg font-medium uppercase leading-none">
                404 - Pagina non trovata
            </p>
            <Link href="/">Torna alla home</Link>
        </div>
    )
}
