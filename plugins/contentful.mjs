// First we import the contentful node module
import contentful from 'contentful'
import * as config from '~/config/contentful.mjs'

// Create a client to setup fetching content
const client = Object.create(contentful.createClient(config))

// Our first method to fetch all section content type
const extractTitle = ({ fields: { title } }) => ({ title })
const extractTitleParagraph = ({ fields: { title, paragraph } }) => ({ title, paragraph })
client.getSections = async () => {
  const { items } = await client.getEntries({ content_type: 'section' })
  return items.map(extractTitle)
}
client.getSection = async (page) => {
  const { items } = await client.getEntries({ content_type: 'section', 'fields.title': page })
  return extractTitleParagraph(items[0])
}

export default ({ app }) => {
  // Add the function directly to the context.app object
  app.contentful = client
}
