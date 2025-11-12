import { createRouter, createWebHistory } from 'vue-router'
import FlappyGuy from '../views/FlappyGuy.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/flappy', component: FlappyGuy }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
