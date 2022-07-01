// ASYNC ACTIONS
export default {
  state: {
    user: ''
  },
  mutations: {
    renameUser(state, payload) {
      state.user = payload.user;
    }
  },
  actions: {
    async getUser(context, payload) {
      return await fetch(payload.url)
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  }
}