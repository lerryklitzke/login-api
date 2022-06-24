import { createRouter, createWebHistory } from 'vue-router';

// Import your pages here
import TodplayHome from './pages/TodplayHome.vue';
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TodplayHome },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
  ]
});

export default router;