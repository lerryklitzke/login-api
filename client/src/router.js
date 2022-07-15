import { createRouter, createWebHistory } from 'vue-router';
// import store from './store/index';

// Import your pages here
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import LoggedPage from './pages/LoggedPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/home', component: LoggedPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from) => {
//   if (!store.state.auth.isAuthenticated && to.fullPath === '/home') {
//     router.push('/login');
//   } 
//   console.log(store.state.auth.isAuthenticated);
//   console.log('To:', to);
//   console.log('From:', from);
// })

export default router;