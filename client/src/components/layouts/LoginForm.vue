<template>
  <div>
    <base-form>
      <template #default>
        <h3 class="secondary-color tx-center">Sign In</h3>
        <label for="username">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Email"
            class="input"
            v-model="username"
            required
          />
        </label>
        <label for="password">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            class="input"
            v-model="password"
            required
          />
        </label>
        <input
          type="submit"
          value="Log In"
          class="btn btn-primary submit"
          @click="login"
        />
      </template>
    </base-form>
    <p>
      Forgot your password?
      <a href="#"><span class="primary-color">Click here</span></a
      >.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
        // .then(data => this.$store.state.auth.isAuthenticated = data.authorized)
        // .catch(() => this.$router.fullPath('/login'));
    },
  },
};
</script>

<style scoped>
p {
  padding: var(--padding-2) 0;
  font-size: 0.9rem;
}
.submit {
  border: none;
}
</style>
