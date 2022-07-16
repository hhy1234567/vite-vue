import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/views/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', icon: '', parent: { name: '' } }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    // hidden: true,
    meta: { title: '首页', icon: '', parent: { name: '' } }
  },
  {
    path: '/errPage',
    name: 'ErrPage',
    component: () => import('@/views/error/index.vue'),
  },
]



/**
* @description: 路由表配置 控制权限的路由最好不要设置 redirect,通过权限逻辑会自动定向
* @hidden {*} 是否在菜单隐藏路由 true 隐藏
* @noAuth {*} //不需要控制权限的添加 路由表添加noAuth:true字段
* @parent {*} //meta 标签的title和parent字段必传,为了菜单选中和张开使用. 因为useRoute()去掉了parent属性
*/
interface AsyncRoutesMap {
  path: string,
  name?: string,
  meta?: {
    title: string,
    parent: {
      name: string
    },
    [props: string]: any
  },
  [props: string]: any
}


// export const asyncRoutesMap: Array<AsyncRoutesMap> = [
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: Layout,
//     // redirect:{name:'Work'},
//     meta: { title: '工作台', icon: 'home', parent: { name: '' } },
//     hidden: false,
//     children: [
//       {
//         path: 'work',
//         name: 'Work',
//         component: () => import('@/views/work/index.vue'),
//         redirect: { name: 'WorkList' },
//         meta: { title: '业务', icon: '', parent: { name: 'Dashboard' } },
//         hidden: false,
//         children: [
//           {
//             path: 'workList',
//             name: 'WorkList',
//             component: () => import('@/views/work/list.vue'),
//             meta: { title: '业务列表', noAuth: true, parent: { name: 'Work' } },
//             hidden: true,
//           },
//           {
//             path: 'detail',
//             name: 'Detail',
//             component: () => import('@/views/work/detail.vue'),
//             meta: { title: '业务详情', noAuth: true, parent: { name: 'Work' } },
//             hidden: true,
//           },
//         ]
//       },
//     ]
//   },
//   {
//     path: '/hoy',
//     name: 'Hoy',
//     component: Layout,
//     // redirect:{name:'MyHoy'},
//     meta: { title: 'Hoy', icon: 'home', parent: { name: '' } },
//     hidden: false,
//     children: [
//       {
//         path: 'myHoy',
//         name: 'MyHoy',
//         component: () => import('@/views/myHoy/index.vue'),
//         meta: { title: '我的Hoy', icon: '', parent: { name: 'Hoy' } },
//         hidden: false,
//       },
//     ]
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     redirect: { name: 'ErrPage' },
//     hidden: true
//   }
// ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router