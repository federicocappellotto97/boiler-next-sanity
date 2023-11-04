import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from '@/sanity/schemas'

export default defineConfig({
    basePath: '/admin', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    plugins: [deskTool(), visionTool()],
    title: 'boiler-next-sanitty',
    schema: {
        types: schemaTypes,
    },
})
