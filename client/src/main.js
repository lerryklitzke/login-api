import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/css/global.css';

// Global Components
import BaseButton from './components/UI/BaseButton';
import BaseForm from './components/UI/BaseForm';

// App
const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-form', BaseForm);

app.use(store);
app.use(router);

app.mount('#app');
