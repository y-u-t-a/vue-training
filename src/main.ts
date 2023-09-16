import { createApp } from 'vue'
import Main from './Main.vue'

import { router } from './router'
import { vuetify } from './plugins/vuetify'

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  worker.start()
}

createApp(Main)
  .use(router)
  .use(vuetify)
  .mount('#app')
