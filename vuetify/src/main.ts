import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router'
import { vuetify } from './plugins/vuetify'

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  worker.start({
    onUnhandledRequest: "bypass"
  })
}

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
