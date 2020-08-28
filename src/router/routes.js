const constantRouterMap = [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () =>import('@/views/Home/index.vue'),
          meta: {
            title: 'chenin博客'
          }
        },
        {
          path: '/message',
          name: 'Message',
          component: () =>import('@/views/Message/index.vue'),
          meta: {
            title: '信息留言'
          }
        },
        {
          path: '/causerie',
          name: 'Causerie',
          component: () =>import('@/views/Causerie/index.vue'),
          meta: {
            title: '心情随笔'
          }
        },
        {
          path: '/technology',
          name: 'Technology',
          component: () =>import('@/views/Technology/index.vue'),
          meta: {
            title: '技术分享'
          }
        },
        {
          path: '/blog',
          name: 'Blog',
          component: () =>import('@/views/Blog/index.vue'),
          meta: {
            title: '博客社区'
          }
        },
        {
          path: '/aboutme',
          name: 'AboutMe',
          component: () =>import('@/views/AboutMe/index.vue'),
          meta: {
            title: '关于我'
          }
        },
        {
          path: '/article/:id',
          name: 'Article',
          component: () =>import('@/views/Article/index.vue'),
          meta: {
            title: 'chenin博客'
          }
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