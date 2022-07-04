import { createStore } from 'vuex';

import Users from './modules/users';

const store = createStore({
  modules: {
    Users
  }
});

export default store;