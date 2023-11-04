import { memo, useMemo } from 'react'

import { PAGE_COMPONENTS } from '../componentMaps'

type Props = {
  componentName: string
  componentIndex?: number
}
const Component = ({ componentName, componentIndex, ...rest }: Props) => {
  const Component = useMemo(
    // @ts-ignore
    () => PAGE_COMPONENTS[componentName],
    [componentName]
  )

  return Component ? <Component {...rest} componentIndex={componentIndex} /> : null
}

export const PageComponent = memo(Component)
