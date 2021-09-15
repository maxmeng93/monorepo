import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'App',
    meta: {
      title: '主页',
    },
    component: () => import('@/pages/home.vue'),
  },
];

const router = new Router({
  mode: 'hash',
  routes,
});

export default router;
