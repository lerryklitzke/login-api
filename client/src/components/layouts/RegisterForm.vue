<template>
  <div>
    <base-form
      action="http://localhost:3000/users"
      method="POST"
      :submit="submitForm"
    >
      <template #default>
        <h3 class="secondary-color tx-center">Sign Up</h3>
        <label for="name">
          <input
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
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            class="input"
            required
          />
        </label>
        <p v-if="invalidPass" class="warn-color mg-0">
          Passwords does not match!
        </p>
        <label for="password">
          <input
            @keyup="validatePassword"
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
        <input type="submit" value="Register" class="btn btn-primary submit" />
      </template>
    </base-form>
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
      invalidPass: false,
      validPass: false,
      pass1: '',
      pass2: '',
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
    submitForm(e) {
      if (!this.validPass) {
        this.invalidPass = true;
        setTimeout(() => {
          this.invalidPass = false;
        }, 3000);
        e.preventDefault();
      }
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
.red {
  border: var(--warn-color) 3px solid;
}
.green {
  border: var(--success-color) 3px solid;
}
</style>
