import {defineField, defineType} from 'sanity'

const menuItem = defineType({
  name: 'menuItem',
  type: 'object',
  title: 'Menu Item',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'link.label',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
})

export default menuItem
