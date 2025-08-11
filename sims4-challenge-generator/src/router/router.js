import Home from '@/views/Home.vue'
import ChallengeDetail from '../views/ChallengeDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home, props: true },
    { path: '/challenge', name: 'ChallengeDetail', component: ChallengeDetail },
  ],
})

export default router
