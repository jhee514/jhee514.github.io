import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/home/Home.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/404',
    name: 'NotFound', 
    // component: NotFound
  },
  {
    path: '*',
    redirect: '/404',
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});


export default router;
