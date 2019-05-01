import Vue from 'vue'
import Router from 'vue-router'
import Layout from './layouts/IndexLayout.vue'
import Login from './views/Login.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
    component:Layout,
    children:[{
         path: '/',
         component: Index,
         name: 'index'
       }]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
