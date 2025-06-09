import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Feed from '@/views/Feed.vue'
import UserProfile from '@/views/UserProfile.vue'

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
    {
      path: `/user`,
      name: 'user',
      component: UserProfile,
    },
  ],
})

export default router
