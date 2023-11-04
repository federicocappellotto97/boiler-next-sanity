import dynamic from 'next/dynamic'

/**
 * The map of available components to render on pages.
 * Used by @lib/components/PageComponent
 */
export const PAGE_COMPONENTS = {
  /* PAGE_COMPONENTS */
  Hero: dynamic(() => import('@/components/Organisms/Hero/Hero')),
  Spacer: dynamic(() => import('@/components/Organisms/Spacer/Spacer')),
}
