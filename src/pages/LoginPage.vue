<template>
  <div class="container">
    <div class="login-container box-shadow">
      <LoginForm />
    </div>
    <div class="login-container box-shadow tx-center register">
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
span {
  font-weight: bold;
}
.container {
  padding: 10vh 0;
  height: 100vh;
}
.login-container {
  width: 50%;
  padding: var(--padding-4);
  margin: auto;
}

.register {
  margin-top: 1.5rem;
}
</style>