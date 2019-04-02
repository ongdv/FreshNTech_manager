import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../components/Container/Auth.vue')
    },
    {
      path: '/',
      name: 'Main',
      component: () => import('../components/Container/Main.vue')
    },
    {
      path: '/client',
      name: "Client",
      component: () => import('../components/Container/Client')
    },
    {
      path: '/deliverer',
      name: "Deliverer",
      component: () => import('../components/Container/Deliverer')
    },
    {
      path: '/goods',
      name: "Goods",
      component: () => import('../components/Container/Goods')
    },
    {
      path: '/notice',
      name: "Notice",
      component: () => import('../components/Container/Notice')
    },
    {
      path: '/order',
      name: "Order",
      component: () => import('../components/Container/Order')
    },
    {
      path: '/purchase',
      name: "Purchase",
      component: () => import('../components/Container/Purchase')
    },
    {
      path: '/sales',
      name: "Sales",
      component: () => import('../components/Container/Sales')
    },
    {
      path: '/statistics',
      name: "Statistics",
      component: () => import('../components/Container/Statistics')
    }
  ]
})
