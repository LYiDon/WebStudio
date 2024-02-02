import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: '/', redirect: '/index'},
  {path: '/index', name: 'index', meta: {title: '首页'}, component: () => import('@/views/Index.vue')},
  {path: '/company', name: 'company', meta: {title: '公司'}, component: () => import('@/views/Company.vue')},
  {path: '/product', name: 'product', meta: {title: '产品'}, component: () => import('@/views/Product.vue')},
  {path: '/about', name: 'about', meta: {title: '关于'}, component: () => import('@/views/About.vue')},
  {path: '/login', name: 'login', meta: {title: '登录'}, component: () => import('@/views/Login.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
