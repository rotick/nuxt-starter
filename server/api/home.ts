export default defineEventHandler((ev) => {
  const query = getQuery(ev)
  const locale = query.locale as string
  console.log(locale)

  return query
})
