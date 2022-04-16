import { RouteGroup } from '@/helpers/router'

const group = new RouteGroup({
  basePath: 'pages', 
  baseViews: 'views/pages'
})

group.addRoute({
  path: 'login',
  name: 'Login',
  component: 'Login.vue' ,
  meta: {
    public: true
  }
})

group.addRoute({
  path: 'profile',
  name: 'Profile',
  component: 'Profile.vue'
})

export default group.routes