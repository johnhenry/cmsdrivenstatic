export default (client) => {
  // Fetch all 'sections' content type
  client.getSections = async () => {
    const { items } =
      await client.getEntries({ content_type: 'section' })
    return items.map(({ fields: { title } }) => title)
  }
  // Fetch specific 'sections' content type
  client.getSectionByTitle = async (value) => {
    const { items: [{ fields: { title, paragraph } }] } =
      await client.getEntries({ content_type: 'section', 'fields.title': value })
    return { title, paragraph }
  }
  return client
}
