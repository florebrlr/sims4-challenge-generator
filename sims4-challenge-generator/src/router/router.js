import Home from '@/views/Home.vue'
import WheelChallenge from '../views/WheelChallenge.vue'
import RandomChallenge from '../views/RandomChallenge.vue'
import RandomChallengeResult from '../views/RandomChallengeResult.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home, props: true },
    { path: '/wheelchallenge', name: 'WheelChallenge', component: WheelChallenge },
        { path: '/randomchallenge', name: 'RandomChallenge', component: RandomChallenge },
    { path: '/randomchallengeresult', name: 'RandomChallengeResult', component: RandomChallengeResult },
  ],
})

export default router
