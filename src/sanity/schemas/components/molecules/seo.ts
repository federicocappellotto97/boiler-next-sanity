import { defineField, defineType } from 'sanity'

const seo = defineType({
  name: 'seo',
  type: 'object',
  title: 'SEO',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'SEO Title',
      validation: (Rule) => Rule.max(60),
      description: 'If left blank, the page title will be created like title page + afterTitle.',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'SEO Description',
      validation: (Rule) => Rule.required().min(70).max(155),
    }),
  ],
  preview: {
    select: {
      title: 'link.label',
    },
    prepare({ title }) {
      return {
        title: title,
      }
    },
  },
})

export default seo
