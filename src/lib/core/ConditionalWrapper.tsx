import { ReactNode } from 'react'

type ConditionalWrapperProps = {
  wrapper: (children: ReactNode) => ReactNode
  children: ReactNode
}

export const ConditionalWrapper = ({ wrapper, children }: ConditionalWrapperProps) => {
  return wrapper(children)
}
