const constantRouterMap = [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () =>import('@/views/Home/index.vue')
        }
      ]
    },
  ]

  export default constantRouterMap