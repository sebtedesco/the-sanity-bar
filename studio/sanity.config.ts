import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { netlifyTool } from 'sanity-plugin-netlify'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'sanity-bar-menu',
  title: 'Sanity Bar Menu',
  projectId: 'jata94cz',
  dataset: 'production',
  plugins: [deskTool(), visionTool(), netlifyTool()],
  schema: {
    types: schemaTypes,
  },
})
