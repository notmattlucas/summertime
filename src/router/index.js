import Router from 'vue-router'
import App from '@/App'
import About from '@/components/About'

export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },{
      path: '/about',
      component: About
    }
  ]
})
