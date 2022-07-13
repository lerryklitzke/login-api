<template>
  <div>
    <base-form action="http://localhost:3000/auth/login" method="POST">
      <template #default>
        <h3 class="secondary-color tx-center">Sign In</h3>
        <label for="username">
          <input type="text" id="username" name="username" placeholder="Email" class="input" required>
        </label>
        <label for="password">
          <input type="password" id="password" name="password" placeholder="Password" class="input" required>
        </label>
        <input type="submit" value="Log In" class="btn btn-primary submit">
      </template>
    </base-form>
    <p>Forgot your password? <a href="#"><span class="primary-color">Click here</span></a>.</p>
  </div>
</template>

<script>
export default {
  
}
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