import { defineField, defineType } from 'sanity'

const Hero = defineType({
    name: 'Hero',
    type: 'object',
    title: 'Hero',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Hero',
            }
        },
    },
})

export default Hero
