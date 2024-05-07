import { createRouter, createWebHashHistory } from 'vue-router'
import Top from '../views/Top.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

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
  },
  {
    path:'/Home',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
