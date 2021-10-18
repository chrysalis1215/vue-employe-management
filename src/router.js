import { createRouter, createWebHashHistory } from 'vue-router';
import HelloVue from './components/HelloWorld.vue';
import EmployeInfo from './components/EmployeInfo.vue';

const routes = [
  { path: '/', component: HelloVue },
  { path: '/info', component: EmployeInfo },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
      return {
        el: '#app',
        top: 0,
        behavior: 'smooth',
      };
    },
})

export default router;
