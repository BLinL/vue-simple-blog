import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Friends from '@/components/Friends'
import BlogView from '@/components/BlogView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/content',
      name: 'BlogView',
      component: BlogView
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    }
  ]
})
