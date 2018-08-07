import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Reader from '@/components/Reader'

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      name: 'story',
      path: '/story/:id',
      component: Reader
    }
  ]
})
