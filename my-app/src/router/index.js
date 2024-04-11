import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
