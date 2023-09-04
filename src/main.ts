import { createApp } from 'vue'
import { RouterView } from 'vue-router'

import { router } from './router'
import { vuetify } from './plugins/vuetify'

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  worker.start()
}

createApp(RouterView)
  .use(router)
  .use(vuetify)
  .mount('#app')
