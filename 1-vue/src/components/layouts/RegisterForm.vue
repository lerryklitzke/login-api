<template>
  <form action="#" method="">
    <h3 class="secondary-color tx-center">Sign Up</h3>
    <label for="name">
      <input type="text" id="name" name="name" placeholder="Name" class="input " required>
    </label>
    <label for="email">
      <input type="email" id="email" name="email" placeholder="Email" class="input" required>
    </label>
    <label for="password">
      <input type="password" id="password" name="password" placeholder="Password" class="input" required>
    </label>
    <label for="repeat-password">
      <input type="repeat-password" id="repeat-password" name="repeat-password" placeholder="Repeat your password" class="input" required>
    </label>
    <input type="submit" value="Register" class="btn btn-primary submit">
  </form>
  <p>Already registered? <a href="/login"><span class="primary-color">Log In</span></a>.</p>
</template>

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