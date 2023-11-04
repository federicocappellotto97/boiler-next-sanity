import {defineField, defineType} from 'sanity'
const Spacer = defineType({
  name: 'Spacer',
  type: 'object',
  title: 'Spacer',
  fields: [
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
      description: 'Height in pixels',
    }),
    defineField({
      name: 'mobileHeight',
      title: 'Mobile Height',
      type: 'number',
      validation: (Rule) => Rule.min(0),
      initialValue: 0,
      description:
        'Height in pixels. If not set, the height will be the same as the desktop height',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Spacer',
      }
    },
  },
})

export default Spacer
