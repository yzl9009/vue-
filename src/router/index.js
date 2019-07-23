import Vue from 'vue'
import Router from 'vue-router'
import section from '@/page/section'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'section',
      component: section
    },
    {
      path: '/father',
      name: 'father',
      component: resolve => require(['@/page/fatherA'], resolve)
    },
    {
      path: '/a',
      name: 'a',
      component: resolve => require(['@/page/A'], resolve)
    },
    {
      path: '/girl',
      name: 'girl',
      component: resolve => require(['@/page/girls'], resolve)
    }
  ]
})
