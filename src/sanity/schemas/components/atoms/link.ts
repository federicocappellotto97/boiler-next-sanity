import { defineType } from 'sanity'

export default defineType({
  name: 'link',
  type: 'object',
  fieldsets: [
    {
      name: 'link',
      title: ' ',
      options: {
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      fieldset: 'link',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Url',
      fieldset: 'link',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }).required(),
    },
    {
      name: 'blank',
      type: 'boolean',
      title: 'Open in a new tab',
      initialValue: false,
    },
  ],
})
