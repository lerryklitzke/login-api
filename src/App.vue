<template>
  <div class="screen-container p-relative">
    <TheNavbar />
    <router-view id="renderer"></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from './components/layouts/TheFooter.vue';
import TheNavbar from './components/layouts/TheNavbar.vue';

export default {
  components: {
    TheNavbar,
    TheFooter
  }   
}
</script>

<style scoped>
#renderer {
  height: 100%;
  width: 100%;
}
</style>