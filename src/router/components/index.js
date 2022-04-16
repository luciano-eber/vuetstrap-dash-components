import { RouteGroup } from '@/helpers/router'

const group = new RouteGroup({
  basePath: 'components', 
  baseViews: 'views/components'
})

group.addRoute({
  path: '',
  name: 'Components',
  component: 'Index.vue'
})

group.addRoute({
  path: 'toasts',
  name: 'Toasts',
  component: 'Toasts.vue'
})


export default group.routes