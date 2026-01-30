import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

import HomeView from '@/views/HomeView.vue'
import AppLayout from '@/views/AppLayout.vue'
import WorkoutsView from '@/views/WorkoutsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/app',
    component: AppLayout,
    beforeEnter: authGuard,
    children: [
      { path: '', redirect: '/app/workouts' },
      { path: 'workouts', name: 'workouts', component: WorkoutsView },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
