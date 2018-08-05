import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Reader from '@/components/Reader'

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/about',
      component: About
    }, {
      path: '/story/:id',
      component: Reader
    }
  ]
})
