import Vue from 'vue';
import VueRouter from 'vue-router';
// components

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/countries',
  },
  {
    path: '/countries',
    name: 'countries',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/Countries.vue'),
  },
  {
    path: '/countries/:name',
    name: 'country',
    component: () => import('../components/CountryDetail.vue'),
  },
  {
    path: '/regions',
    name: 'regions',
    component: () => import('../components/Regions.vue'),
  },
  {
    path: '/phonevalidation',
    name: 'phoneValidation',
    component: () => import('../components/PhoneValidation.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
