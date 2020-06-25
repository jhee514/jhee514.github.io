import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';



Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  // { path: '/foo', component: Foo },

]

const router = new VueRouter({
  routes // `routes: routes`의 줄임
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
