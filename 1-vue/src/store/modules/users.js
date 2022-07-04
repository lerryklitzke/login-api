// ASYNC ACTIONS
export default {
  actions: {
    async getUser(context, payload) {
      return await fetch(payload.url)
        .then(res => res.json())
        .catch(err => console.log(err));
    },
    async postUser(context, payload) {
      await fetch(payload.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(payload.newUser)
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
}