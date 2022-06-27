<template>
  <div class="container">
    <div class="login-container">
      <LoginForm />
    </div>
    <div class="login-container tx-center register">
      <p>Don't have an account? <span><a href="/register" class="primary-color">Sign Up</a></span></p>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/layouts/LoginForm.vue';
export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.container {
  padding: 10vh 0;
  height: 100vh;
}
.login-container {
  width: var(--container-2);
  padding: var(--padding-4);
  margin: auto;
}
.register {
  margin-top: 1.5rem;
}
</style>