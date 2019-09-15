import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/components/parent'
import child from '@/components/child'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: parent
    },
    {
      path: '/child',
      name: 'child',
      component: child
    }
  ]
})
