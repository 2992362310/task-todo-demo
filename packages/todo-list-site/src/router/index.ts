import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    component: () => import('@/page/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('@/page/About.vue'),
  },
  {
    path: '/todo',
    component: () => import('@/page/Todo/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
