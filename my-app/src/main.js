import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)
import { createVuetify } from 'vuetify' 
const vuetify = createVuetify() 

app.use(vuetify)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
