import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)

// Vuetify のインスタンスを作成し、アプリに使用
import { createVuetify } from 'vuetify' // Vue 3 互換のインポート方法
const vuetify = createVuetify() // Vuetify 3 用のインスタンス作成
app.use(vuetify)

app.use(store)
app.use(router)

app.mount('#app')
