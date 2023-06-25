import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export const projectId = 'jata94cz'
export const dataset = 'production'

export default defineConfig({
  name: 'sanity-bar-menu',
  title: 'Sanity Bar Menu',
  projectId: 'jata94cz',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
