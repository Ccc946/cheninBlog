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
        },
        {
          path: '/message',
          name: 'Message',
          component: () =>import('@/views/Message/index.vue')
        },
        {
          path: '/causerie',
          name: 'Causerie',
          component: () =>import('@/views/Causerie/index.vue')
        },
        {
          path: '/technology',
          name: 'Technology',
          component: () =>import('@/views/Technology/index.vue')
        },
        {
          path: '/blog',
          name: 'Blog',
          component: () =>import('@/views/Blog/index.vue')
        },
        {
          path: '/aboutme',
          name: 'AboutMe',
          component: () =>import('@/views/AboutMe/index.vue')
        },
        {
          path: '/article/:id',
          name: 'Article',
          component: () =>import('@/views/Article/index.vue')
        },
        
        
      ]
    },
    {
      path: '*',
      name: 'Error',
      component: () =>import('@/views/Error/index.vue')
    },
  ]

  export default constantRouterMap