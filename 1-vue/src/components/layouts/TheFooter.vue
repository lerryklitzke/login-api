<template>
  <footer id="footer" class="bg-light pd-4">
    <div class="container">
      <p class="tx-center dark-color">Lerry Klitzke 2022 &copy;<br>{{ info }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      info: null,
    }
  },
  async mounted() {
    const user = await this.$store.dispatch(
      'getUser', 
      { url: 'http://localhost:3000/admin/users/1' }
    );
    this.info = await user.email;
  }
}
</script>

<style scoped>
#footer {
  width: 100%;
  bottom: 0;
}
</style>