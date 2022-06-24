<template>
  <div class="p-relative content">
    <div class="container p-absolute content">
      <div id="register" class="tx-center">
        <h2 class="secondary-color">Welcome to Todplay!</h2>
        <p class="dark-color p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas. Quia, quibusdam dicta. Magnam, numquam!</p>
        <base-button
          path="/register"
          classes="btn-reverse"
          class="main-btn"
          title="Sign Up"
        ></base-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#register {
  display: grid;
  grid-gap: 3.2rem;
  width: 60%;
  margin: auto;
  padding-top: 12vh;
}

h2 {
  font-size: 3rem;
}

.p {
  padding: var(--padding-4);
  font-size: var(--font-size-2);
}

.main-btn {
  font-size: var(--font-size-3);
  padding: var(--padding-3);
  border-radius: var(--border-rounded);
}
.content {
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: -5px;
  height: 100vh;
  z-index: 1;
}

</style>