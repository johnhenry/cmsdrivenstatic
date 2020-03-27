export default (client) => {
  client = Object.create(client)
  // Our first method to fetch all section content type
  client.getSections = async () => {
    const { items } = await client.getEntries({ content_type: 'section' })
    return items.map(({ fields: { title } }) => title)
  }
  client.getSection = async (page) => {
    const { items: [{ fields: { title, paragraph } }] } =
      await client.getEntries({ content_type: 'section', 'fields.title': page })
    return { title, paragraph }
  }
  return client
}
