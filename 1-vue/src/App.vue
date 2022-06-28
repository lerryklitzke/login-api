<template>
  <div class="bg-light">
    <TheNavbar />
    <router-view></router-view>
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
  },
}
</script>