import {defineType, defineField} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export default defineType({
  name: 'menu',
  type: 'document',
  title: 'Menu',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      validation: (Rule) => Rule.lowercase(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'menuItem'}],
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'items',
      language: 'language',
    },
    prepare({title, subtitle, language}) {
      return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        subtitle: Array.isArray(subtitle)
          ? subtitle.length + ` ${subtitle.length == 1 ? 'child' : 'children'}`
          : '0 children',
      }
    },
  },
})
