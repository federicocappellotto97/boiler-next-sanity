import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageComponent } from '@/lib/core/component'
import client from '@/sanity/client'
import { pageQuery, pagesQuery, seoQuery, settingsQuery } from '@/sanity/queries'

import { notFoundMetadata } from '../not-found'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug

  const seo = await client.fetch<{ title: string; metaTitle?: string; metaDescription: string }>(
    seoQuery(Array.isArray(slug) ? slug[0] : slug)
  )

  const layout = await client.fetch<{ afterTitle: string }>(settingsQuery())
  if (!seo)
    return {
      ...notFoundMetadata,
      title: notFoundMetadata.title + layout.afterTitle,
    }

  if (seo?.metaTitle)
    return {
      title: seo?.metaTitle,
      description: seo.metaDescription,
    }

  return {
    title: (seo?.title ?? '') + layout.afterTitle,
    description: seo?.metaDescription,
  }
}

async function getPage(slug: string | string[]) {
  const page = await client.fetch<{ title: string; slug: string; components: any[] }>(
    pageQuery(Array.isArray(slug) ? slug[0] : slug)
  )

  if (!page?.['slug']) notFound()

  return page
}

export async function generateStaticParams() {
  const pages = await client.fetch<{ slug: string }[]>(pagesQuery(false))

  return pages.map(({ slug }) => slug)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPage(params.slug)

  return (
    data?.['components'] &&
    data?.['components']?.map(({ name, ...rest }: any, index: number) => (
      <PageComponent componentName={name} {...rest} key={`${name}-${index}`} />
    ))
  )
}
