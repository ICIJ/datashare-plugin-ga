import VueAnalytics from 'vue-analytics'

document.addEventListener('datashare:ready', async ({ detail: { core } }) => {
  const id = core.config.get('gaId', null)
  // No need to add tracker if no id is provided
  if (id !== null) {
    core.use(VueAnalytics, { id, router: core.router })
  }
}, false)
