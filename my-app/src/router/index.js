import { createRouter, createWebHashHistory } from 'vue-router'
import Top from '../views/Top.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path:'/SignUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path:'/Login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
