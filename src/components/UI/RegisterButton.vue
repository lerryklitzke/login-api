<template>
  <a :href="path" class="btn btn-transparent">
    <h2 class="tx-bold">Register Now</h2>
  </a>
</template>

<script>
export default {
  props: ['path'],
}
</script>