import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/css/global.css';

// Global Components
import BaseButton from './components/UI/BaseButton';

// App
const app = createApp(App);

app.component('base-button', BaseButton);

app.use(router);
app.use(store);

app.mount('#app');
