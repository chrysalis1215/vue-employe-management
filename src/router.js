import { createRouter, createWebHashHistory } from 'vue-router';
import HelloVue from './components/HelloWorld.vue';
import EmployeInfo from './components/EmployeInfo.vue';
import Department from './components/Welcome.vue';

const routes = [
  { path: '/', component: HelloVue },
  { path: '/info', component: EmployeInfo },
  { path: '/department',  component: Department},
  { path: '/department/:department',  component: Department},
  { path: '/user/:user',  component: EmployeInfo}

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
