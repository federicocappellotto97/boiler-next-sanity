import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/lib/core/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './cms/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        spacing: {
            /**
             * We generate spacings with a different naming convention than Tailwind default theme.
             * Instead of using 4px intervals we generate classes in 1px intervals (converted in rem).
             *
             * Example: "p-16" means 16px (in rem) and not 64px as it would in Tailwind default theme.
             *
             * We also generate dw (design-width) spacings.
             * If the viewport width in the XD design is 1920px "p-16dw" is calculated like this (16/1920*100)vw.
             * When the viewport width is 1920px "p-16dw" will be exactly 16px but it will keep scaling smoothly based on width.
             */
            ...generateSpacings(),
        },
    },
    plugins: [],
}
export default config

/**
 * Simply calculates px to rem.
 */
function rem(value: number) {
    return `${+(value / 16).toFixed(4)}rem`
}

/**
 * Used to generate the spacings in Tailwind theme.
 *
 * Generates an object that looks like this:
 * @example
 * {
 *   1: '0.0625rem',
 *   2: '0.125rem',
 *  ...
 * }
 */
export function generateSpacings() {
    const array = Array.from(Array(250).keys()).map((el) => [el, rem(el)])
    return Object.fromEntries(array)
}
