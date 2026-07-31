import { createApp } from "vue"
import PrimeVue from "primevue/config"
import "primeflex/primeflex.css"
import router from './router/index.js'
import App from './App.vue'
import Card from 'primevue/card'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, 
  {
    license: import.meta.env.VITE_PRIMEUI_LICENSE_KEY
  }
)

app.component('Card', Card)

app.mount("#app")