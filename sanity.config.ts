import { WrenchIcon } from '@sanity/icons'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from '@/sanity/schemas'

const singletonTypes = ['settings']
const singletonActions = ['publish', 'discardChanges', 'restore']

export default defineConfig({
  basePath: '/admin', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            ...singletonTypes.map((single) =>
              S.listItem()
                .title(capitalizeFirstLetter(single))
                .id(single)
                .icon(
                  S.documentTypeListItems()
                    .find((listItem) => listItem.getId() == single)
                    //@ts-ignore
                    ?.getSchemaType()?.icon
                )
                .child(S.document().schemaType(single).documentId(single).title(capitalizeFirstLetter(single)))
            ),

            //@ts-ignore
            ...S.documentTypeListItems().filter((listItem) => !singletonTypes.includes(listItem.getId())),
          ])
      },
    }),
    visionTool(),
  ],
  title: 'boiler-next-sanitty',
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.includes(action))
        : input,
  },
})

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
