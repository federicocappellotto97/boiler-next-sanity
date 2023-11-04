import { cva } from '@/lib/core/cva'

export const button = cva({
    base: 'rounded border font-semibold',
    variants: {
        variant: {
            primary: 'bg-black text-white',
            secondary: 'bg-white text-black',
        },
        size: {
            small: 'px-2 py-1 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-6 py-3 text-lg',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
})
