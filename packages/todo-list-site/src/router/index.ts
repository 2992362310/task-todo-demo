import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    component: () => import('@/page/Home.vue'),
  },

  {
    path: '/todo',
    component: () => import('@/page/Todo/index.vue'),
  },
  {
    path: '/talk',
    component: () => import('@/page/Talk/index.vue'),
  },
  {
    path: '/book',
    component: () => import('@/page/Talk/index.vue'),
  },

  {
    path: '/about',
    component: () => import('@/page/Book/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
