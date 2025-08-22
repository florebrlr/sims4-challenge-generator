import Home from '@/views/Home.vue'
import WheelChallenge from '@/views/WheelChallenge.vue'
import RandomChallenge from '@/views/RandomChallenge.vue'
import RandomChallengeResult from '@/views/RandomChallengeResult.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home, props: true },
    { path: '/wheelchallenge', name: 'wheelChallenge', component: WheelChallenge },
    { path: '/randomchallenge', name: 'randomChallenge', component: RandomChallenge },
    { path: '/randomchallengeresult', name: 'randomChallengeResult', component: RandomChallengeResult,
    },
  ],
})

export default router
