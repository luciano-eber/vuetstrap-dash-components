import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import pagesRoutes from './routes/pages.js'
import componentsRoutes from './routes/components.js'
import store from '@/store'

let routes = [
  {
    path: '/',
    name: 'Dash',
    component: Dashboard
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('@/views/Icons.vue')
  }
]

routes = routes.concat(
  ...pagesRoutes, 
  ...componentsRoutes
)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {

  if (store.state.defaultLayout.sidebarIsActive) 
    store.dispatch('defaultLayout/closeSidebar')

  return true
})

export default router