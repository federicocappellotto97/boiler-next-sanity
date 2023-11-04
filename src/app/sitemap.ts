import type { MetadataRoute } from 'next'

import client from '@/sanity/client'
import { pagesQuery } from '@/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pages = await client.fetch<{ slug: string; updatetAt: string }[]>(pagesQuery())

    return pages.map(({ slug, updatetAt }) => ({
        url: `${process.env.FRONT_URL}${slug == 'homepage' ? '' : '/' + slug}`,
        lastModified: new Date(updatetAt),
        changeFrequency: 'yearly',
        priority: slug == 'homepage' ? 1 : 0.8,
    }))
}
