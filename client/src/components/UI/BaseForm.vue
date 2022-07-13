<template>
  <form :action="action" :method="method" @submit="submit">
    <!-- <input type="hidden" name="_csrf" :value="csrfToken"> -->
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: ['action', 'method', 'submit'],
  data() {
    return {
      csrfToken: null
    }
  },
  // mounted() {
  //   return fetch('http://localhost:3000/my-token')
  //     .then(res => res.json())
  //     .then(data => this.csrfToken = data.csrfToken)
  //     .catch(err => console.log(err));
  // }  
}
</script>

<style scoped>
form {
  display: grid;
  grid-gap: 0.8rem;
}
</style>