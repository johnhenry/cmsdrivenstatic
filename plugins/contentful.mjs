// First we import the contentful node module
import contentful from 'contentful'
import * as config from '~/config/contentful.mjs'

// Create a client to setup fetching content
const client = contentful.createClient(config)
const subClient = Object.create(client)

// Our first method to fetch all section content type
const sectionExtractor = ({ fields: { title, paragraph } }) => ({ title, paragraph })
subClient.getSections = async () => {
  const { items } = await client.getEntries({ content_type: 'section' })
  return items.map(sectionExtractor)
}
subClient.getSection = async (page) => {
  const { items } = await client.getEntries({ content_type: 'section', 'fields.title': page })
  return sectionExtractor(items[0])
}

export default ({ app }) => {
  // Add the function directly to the context.app object
  app.contentful = subClient
}


