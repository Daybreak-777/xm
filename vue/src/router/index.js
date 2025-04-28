import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/manager',
      children: [
        { path: 'home', name: 'home', meta: { title: "主页" }, component: () => import('../views/Home.vue')}, // /manager/home},
        { path: 'test', name: 'test', meta: { title: "数据测试页面"}, component: () => import('../views/Test.vue')}, // /manager/test},
        { path: 'data', name: 'data', meta: { title: "数据统计页面"}, component: () => import('../views/Data.vue')},
        { path: 'employee', name: 'employee', meta: { title: '员工信息'}, component: () => import('../views/Employee.vue')},
        { path: 'admin', name: 'admin', meta: { title: '管理员信息'}, component: () => import('../views/Admin.vue')},
        { path: 'person', name: 'person', meta: { title: '个人信息'}, component: () => import('../views/Person.vue')},
        { path: 'password', name: 'password', meta: { title: '修改密码'}, component: () => import('../views/Password.vue')}
      ],
      component: () => import('../views/Manager.vue')
    },
    { path: '/login', name: 'Login', meta: { title: "登录页面"}, component: () => import('../views/Login.vue')},
    { path: '/register', name: 'Register', meta: { title: "注册页面"}, component: () => import('../views/Register.vue')},
    { path: '/404', name: 'NotFound', meta: { title: "404找不到页面"}, component: () => import('../views/404.vue')},
    { path: '/:pathMatch(.*)', redirect: '/404'}
  ],
})

// 表示页面跳转之前的一些操作
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next() // 必须调用这个函数才能实现跳转
})
export default router
