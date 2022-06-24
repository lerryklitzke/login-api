import { createRouter, createWebHistory } from 'vue-router';

// Import your pages here
import TodplayHome from './pages/TodplayHome.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TodplayHome } 
  ]
});

export default router;