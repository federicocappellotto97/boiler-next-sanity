import Link from 'next/link'

import { ConditionalWrapper } from '@/lib/core/ConditionalWrapper'

import { button } from './Button.style'

type Common = {
    children: React.ReactNode
    className?: string
}

type Button = {
    onClick: () => void
}

type Link = {
    href: string
    target?: string
}

const Button = (props: Common & (Button | Link)) => {
    const { children, className } = props as Common
    const { onClick } = props as Button
    const { href, target } = props as Link

    const commonAtts = {
        className: button({ className }),
    }

    return (
        <ConditionalWrapper
            wrapper={(children) =>
                href ? (
                    <Link href={href} target={target} {...commonAtts}>
                        {children}
                    </Link>
                ) : (
                    <Button onClick={onClick} {...commonAtts}>
                        {children}
                    </Button>
                )
            }
        >
            {children}
        </ConditionalWrapper>
    )
}

export default Button
