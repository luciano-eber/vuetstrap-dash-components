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

group.addRoute({
  path: 'default-page',
  name: 'DefaultPage',
  component: 'DefaultPage.vue'
})

group.addRoute({
  path: 'modals',
  name: 'Modals',
  component: 'Modals.vue'
})

group.addRoute({
  path: 'Pagination',
  name: 'Pagination',
  component: 'Pagination.vue'
})

group.addRoute({
  path: 'alerts',
  name: 'Alerts',
  component: 'Alerts.vue'
})

group.addRoute({
  path: 'datatable',
  name: 'Datatable',
  component: 'Datatable.vue'
})

group.addRoute({
  path: 'datatable-toolbar',
  name: 'DatatableToolbar',
  component: 'DatatableToolbar.vue'
})

group.addRoute({
  path: 'input',
  name: 'Inputs',
  component: 'Input.vue'
})

group.addRoute({
  path: 'table',
  name: 'Tables',
  component: 'Tables.vue'
})

export default group.routes