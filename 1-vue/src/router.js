import { createRouter, createWebHistory } from 'vue-router';

// Import your pages here
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import LoggedPage from './pages/LoggedPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/home', component: LoggedPage },
  ]
});

export default router;