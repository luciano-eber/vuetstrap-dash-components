import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import pagesRoutes from './pages/index'
import componentsRoutes from './components/index'

let routes = [
  {
    path: '/',
    name: 'Dash',
    component: Dashboard
  },
]

routes = routes.concat(
  ...pagesRoutes, 
  ...componentsRoutes
)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router