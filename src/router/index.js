import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// 异步组件实现按需加载   适合用在项目比较复杂，打包后app.js比较大时  至少超过1MB
// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

// export default new Router({
//   routes: [{
//     path: '/',
//     name: 'Home',
//     component: () => import('@/pages/home/Home')
//   }, {
//     path: '/city',
//     name: 'City',
//     component: () => import('@/pages/city/City')
//   }, {
//     path: '/detail/:id',
//     name: 'Detail',
//     component: () => import('@/pages/detail/Detail')
//   }],
//   scrollBehavior (to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   }
// })
