import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout'
import blogView from '@/views/BlogView'
import contact from '@/views/contact'
import about from '@/views/about'
import Home from '@/views/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/blog/:slug',
          name: 'blogDeails',
          component: blogView,
        },
        {
          path: '/contact',
          name: 'contact',
          component: contact
        },
        {
          path: '/about',
          name: 'about',
          component: about
        },
      ]
    }
  ]
})
