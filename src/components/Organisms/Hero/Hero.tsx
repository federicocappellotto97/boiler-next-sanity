import Image from 'next/image'

import { Image as ImageType } from '@/lib/types'

type HeroType = {
  image: ImageType
  title: string
}

const Hero = ({ image, title }: HeroType) => {
  return (
    <div className="relative flex h-screen flex-col justify-center p-32">
      <Image src={image.src} alt={image.alt} fill className="object-cover" priority sizes="100vw" />
      <div className="relative">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  )
}

export default Hero
