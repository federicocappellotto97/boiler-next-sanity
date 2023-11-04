import {defineType, defineField} from 'sanity'
import {WrenchIcon} from '@sanity/icons'

export default defineType({
  name: 'settings',
  type: 'document',
  title: 'Settings',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title site',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'afterTitle',
      type: 'string',
      title: 'After title site',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', //Error message is "Does not match email-pattern"
            invert: false, //Boolean to allow any value that does NOT match pattern
          },
        ),
    }),
    defineField({
      name: 'footerText',
      type: 'array',
      title: 'Footer text',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'string',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
})
