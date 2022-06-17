import { createStore } from 'vuex';

import State from './modules/state';
import Getters from './modules/getters';
import Mutations from './modules/mutations';
import Actions from './modules/actions';

const store = createStore({
  modules: {
    State,
    Getters,
    Mutations,
    Actions,
  }
});

export default store;