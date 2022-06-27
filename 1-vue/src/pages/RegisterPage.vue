<template>
  <div class="container">
    <div class="register-container">
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/layouts/RegisterForm.vue';

export default {
  components: {
    RegisterForm
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
.register-container {
  width: var(--container-2);
  padding: var(--padding-4);
  margin: auto;
}
</style>