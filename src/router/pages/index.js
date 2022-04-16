export default [
  {
    path: '/pages/login',
    name: 'Login',
    component: () => import('../../views/pages/Login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/pages/profile',
    name: 'Profile',
    component: ()=> import('../../views/pages/Profile.vue')
  }
]