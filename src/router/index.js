import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: App
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../components/Questions.vue')
  },
  {
    path: '/askq',
    name: 'Askq',
    
    component: () => import('../components/Askq.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router