import { Link } from '@/lib/types'
import client from '@/sanity/client'
import { menuQuery } from '@/sanity/queries'

import MenuItem from './MenuItem'

async function getMenu(key: string) {
  const menu = await client.fetch(menuQuery(key))

  return menu
}

const Menu = async () => {
  const data: any = await getMenu('primary')

  return (
    data?.items && (
      <ul className="flex items-center gap-16 lg:ml-auto">
        {data.items.map(
          ({ link }: { link: Link }, index: number) =>
            link && (
              <li key={index} className="relative overflow-hidden">
                <MenuItem url={link.url} label={link.label} />
              </li>
            )
        )}
      </ul>
    )
  )
}

export default Menu
