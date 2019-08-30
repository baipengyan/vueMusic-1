import Vue from 'vue'
import Router from 'vue-router'
import found from '../components/found/found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/login/home'], resolve),
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/phone',
      name: 'phone',
      component: resolve => require(['@/components/login/phone'], resolve),
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/password',
      name: 'password',
      component: resolve => require(['@/components/login/password'], resolve),
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/found',
      name: 'found',
      component: resolve => require(['@/components/found/found'], resolve),
      meta: {
        keepAlive: true
      },
    },
    {
      path: '/songlistdetail',
      name: 'songlistdetail',
      component: resolve => require(['@/components/songlist-detail/songlist-detail'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/songlist',
      name: 'songlist',
      component: resolve => require(['@/components/songlist/songlist'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/me',
      name: 'me',
      component: resolve => require(['@/components/me/me'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: resolve => require(['@/components/cloud/cloud'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/videolist',
      name: 'videolist',
      component: resolve => require(['@/components/video/video-list'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['@/components/video/video'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path:'/leaderboard',
      name:'leaderboard',
      component: resolve => require(['@/components/leaderboard/leaderboard'], resolve),
      meta: {
        keepAlive:false
      }
    },
    {
      path:'/sliderleft',
      name:'sliderleft',
      component: resolve => require(['@/base/drawer-layout/drawer-layout'], resolve),
      meta: {
        keepAlive:false
      }
    },
    {
      path:'/sliderbar',
      name:'sliderbar',
      component: resolve => require(['@/base/slider/slider-bar'], resolve),
      meta: {
        keepAlive:false
      }
    },
    {
      path:'/setting',
      name:'setting',
      component: resolve => require(['@/components/setting/setting'], resolve),
      meta: {
        keepAlive:false
      }
    },
    {
      path:'/test',
      name:'test',
      component: resolve => require(['@/components/video/test'], resolve),
      meta: {
        keepAlive:false
      }
    },
    {
      path:'/reply',
      name:'reply',
      component: resolve => require(['@/components/reply/reply'], resolve),
      meta: {
        keepAlive:false
      }
    },
    {
      path:'/comment',
      name:'comment',
      component: resolve => require(['@/components/comment/comment'], resolve),
      meta: {
        keepAlive:false
      }
    },
    {
      path:'/user',
      name:'user',
      component: resolve => require(['@/components/user/user'], resolve),
      meta: {
        keepAlive:false
      }
    }
  ]
})
