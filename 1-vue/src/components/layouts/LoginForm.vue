<template>
  <div>
    <form action="#" method="">
      <h3 class="secondary-color tx-center">Sign In</h3>
      <label for="username">
        <input type="text" id="username" name="username" placeholder="Username or email" class="input" required>
      </label>
      <label for="password">
        <input type="password" id="password" name="password" placeholder="Password" class="input" required>
      </label>
      <input type="submit" value="Log In" class="btn btn-primary submit">
    </form>
    <p>Forgot your password? <a href="#"><span class="primary-color">Click here</span></a>.</p>
  </div>
</template>

<script>
export default {
  
}
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
</style>