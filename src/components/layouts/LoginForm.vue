<template>
  <form action="#" method="">
    <h3 class="secondary-color tx-center">Sign In</h3>
    <label for="username">
      <input type="text" id="username" name="username" placeholder="Username" class="input ">
    </label>
    <label for="password">
      <input type="password" id="password" name="password" placeholder="Password" class="input">
    </label>
    <input type="submit" value="Log In" class="btn btn-primary submit">
  </form>
</template>

<style scoped>
form {
  display: grid;
  grid-gap: 0.8rem;
}
.submit {
  border: none;
}
</style>