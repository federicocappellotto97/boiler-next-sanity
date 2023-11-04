'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { usePathname } from 'next/navigation'
import { Fragment, PropsWithChildren, useContext, useRef } from 'react'

export function useLayoutRouterContext() {
    return useContext(LayoutRouterContext)
}

function FrozenRouter(props: PropsWithChildren<{}>) {
    const context = useLayoutRouterContext()
    const frozen = useRef(context).current

    return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
}

export const PAGE_TRANSITION_DURATION = 0.3

export default function PageTransition({ children }: PropsWithChildren) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <div key={'fila-' + pathname} className="contents">
                {Array.from(Array(5).keys()).map((_, i) => (
                    <Fragment key={i}>
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: '-100%' }}
                            exit={{ y: '0%' }}
                            style={{ originY: 1, left: `${i * 20}vw` }}
                            className="fixed inset-y-0 z-[99999] w-[20vw] bg-black"
                            transition={{
                                duration: PAGE_TRANSITION_DURATION,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1 * i,
                            }}
                        />
                        <motion.div
                            initial={{ y: '0%' }}
                            animate={{ y: '100%' }}
                            exit={{ y: '100%' }}
                            style={{ originY: 1, left: `${i * 20}vw` }}
                            className="fixed inset-y-0 z-[99999] w-[20vw] bg-black"
                            transition={{
                                duration: PAGE_TRANSITION_DURATION,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1 * i,
                            }}
                        />
                    </Fragment>
                ))}
                <FrozenRouter>
                    <AnimatePresence>
                        <div key="child" className="contents">
                            {children}
                        </div>
                    </AnimatePresence>
                </FrozenRouter>
            </div>
        </AnimatePresence>
    )
}
