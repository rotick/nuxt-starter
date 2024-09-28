export default defineNitroPlugin(() => {
  // see my article: https://dev.to/dongnaebi/customizing-cache-keys-on-cloudflares-free-plan-9fb
  // nitroApp.hooks.hook('render:response', (response, { event }) => {
  // if (response.headers?.location?.includes('cfcache=')) {
  //   const host = 'https://searchemoji.app'
  //   const url = new URL(response.headers.location, host)
  //   const params = new URLSearchParams(url.search)
  //   params.delete('cfcache')
  //   url.search = params.toString()
  //   response.headers.location = url.toString().replace(host, '')
  //   response.headers['Cache-Control'] = 'max-age=86400, must-revalidate'
  // }
  // })
})
