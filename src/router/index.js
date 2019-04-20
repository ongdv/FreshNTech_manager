// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)
// import store from '../vuex/store';

// const requireAuth = () => (from, to, next) => {
//   if(store.state.user.isAuth){
//     return next();
//   }
//   next('/');
// }

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Auth', //로그인 페이지
//       component: () => import('../components/Container/Auth.vue'),
//     },
//     {
//       path: '/vendor',
//       name: "Vendor", // 메인 컨테이너
//       component: () => import('../components/Container/Layout'),
//       beforeEnter: requireAuth(),
//       children: [
//         {
//           path: '',
//           name: 'Main', //메인 화면
//           component: () => import('../components/Container/Main.vue')
//         },
//         {
//           path: 'client',
//           name: "Client", //거래처 관리 화면
//           component: () => import('../components/Container/SubLayout'),
//           children: [
//             {
//               path: '',
//               name: "Clientadf",
//               component: () => import('../components/Container/Deliverer'),
//             }
//           ]
//         },
//         {
//           path: 'deliverer',
//           name: "Deliverer", //배송팀 관리 화면
//           component: () => import('../components/Container/SubLayout')
//         },
//         {
//           path: 'goods',
//           name: "Goods", //상품 관리 화면
//           component: () => import('../components/Container/SubLayout'),
//           children: [
//             {
//               path: '',
//               name: "Goods", //상품 관리 화면
//               component: () => import('../components/Container/Goods'),
//             },
//             {
//               path: 'category',
//               name: "Category", //상품 관리 화면
//               component: () => import('../components/Container/Category'),
//             }
//           ]
//         },
//         {
//           path: 'notice',
//           name: "Notice",
//           component: () => import('../components/Container/SubLayout')
//         },
//         {
//           path: 'order',
//           name: "Order",
//           component: () => import('../components/Container/SubLayout'),
//           children: [
//             {
//               path: "",
//               name: "OrderList",
//               component: () => import('../components/Container/Order'),
//             }
//           ]
//         },
//         {
//           path: 'purchase',
//           name: "Purchase",
//           component: () => import('../components/Container/SubLayout')
//         },
//         {
//           path: 'sales',
//           name: "Sales",
//           component: () => import('../components/Container/SubLayout')
//         },
//         {
//           path: 'statistics',
//           name: "Statistics",
//           component: () => import('../components/Container/SubLayout')
//         }
//       ]
//     },
//   ]
// })
