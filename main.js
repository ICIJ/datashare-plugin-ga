import VueGtag, { trackRouter } from "vue-gtag-next"

document.addEventListener('datashare:ready', async ({ detail: { core } }) => {
  const id = core.config.get('gaId', null)
  // No need to add tracker if no id is provided
  if (id !== null) {
    // Add the Google Analytics tracker
    core.use(VueGtag, { property: { id } })
    // Wait for the core to be ready before tracking the router
    await core.ready
    trackRouter(core.router)
  }
}, false)
