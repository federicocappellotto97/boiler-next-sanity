type SpacerProps = {
  height: number
  mobileHeight?: number
}

const Spacer = ({ height, mobileHeight }: SpacerProps) => {
  return (
    <div
      className="h-[var(--mobile-height)] lg:h-[var(--height)]"
      style={
        {
          '--height': `${height}px`,
          '--mobile-height': `${mobileHeight && mobileHeight >= 0 ? mobileHeight : height}px`,
        } as React.CSSProperties
      }
    />
  )
}

export default Spacer
