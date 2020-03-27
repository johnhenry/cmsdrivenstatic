// First we import the contentful node module
import contentful from 'contentful'
import * as config from './config.mjs'
import contentfulDecorator from './decorator.mjs'
// Create a client to setup fetching content
const client = contentfulDecorator(
  Object.create(contentful.createClient(config)))
export default ({ app }) => {
  // Add the function directly to the context.app object
  app.contentful = client
}
