import componentRoute from './route'

const index = new componentRoute({
  path: '',
  name: 'Components',
  component: 'Index.vue'
})

const toasts = new componentRoute({
  path: 'toasts',
  name: 'Toasts',
  component: 'Toasts.vue'
})

export default [
  index,
  toasts
]