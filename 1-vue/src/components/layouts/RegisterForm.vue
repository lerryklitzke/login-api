<template>
  <div>
    <form :action="url" method="POST">
      <h3 class="secondary-color tx-center">Sign Up</h3>
      <label for="name">
        <input
          v-model="name"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          class="input"
          required
        />
      </label>
      <label for="email">
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          class="input"
          required
        />
      </label>
      <label for="password">
        <input
          v-model="pass1"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          class="input"
          required
        />
      </label>
      <label for="repeat-password">
        <input
          v-model="pass2"
          @keyup="validatePassword"
          type="password"
          id="repeat-password"
          name="repeat-password"
          placeholder="Repeat your password"
          class="input"
          :class="[pass2 === '' ? '' : [validPass ? 'green' : 'red']]"
          required
        />
      </label>
      <input
        @click="sendForm"
        type="submit"
        value="Register"
        class="btn btn-primary submit"
      />
    </form>
    <p>
      Already registered?
      <a href="/login"><span class="primary-color">Log In</span></a
      >.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validPass: false,
      name: '',
      email: '',
      pass1: '',
      pass2: '',
      url: '',
    };
  },
  methods: {
    validatePassword() {
      if (this.pass1 !== this.pass2) {
        this.validPass = false;
      } else {
        this.validPass = true;
      }
    },
    sendForm() {
      if (this.validPass && this.name !== '' && this.email.length > 5) {
        this.url = `http://localhost:3000/admin/users/?name=${this.name}&email=${this.email}&password=${this.pass1}`;
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-gap: 0.8rem;
}

p {
  padding: var(--padding-2) 0;
  font-size: 0.9rem;
}
.submit {
  border: none;
}
.red {
  border: rgb(255, 69, 69) 3px solid;
}
.green {
  border: rgb(53, 231, 53) 3px solid;
}
</style>
