import Home from '@/views/Home.vue'
import ChallengeResult from '../views/ChallengeResult.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home, props: true },
    { path: '/challenge', name: 'ChallengeResult', component: ChallengeResult },
  ],
})

export default router
