import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import VueClickAway from "vue3-click-away";




const app = createApp(App)
app.use(VueClickAway)
app.use(router)
app.use(store)

app.mount('#app')
