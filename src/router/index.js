import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Feed from '@/views/Feed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: Feed,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

export default router
