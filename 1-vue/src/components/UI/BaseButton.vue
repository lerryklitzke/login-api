<template>
  <a :href="path" :class="classes" class="btn">{{ title }}</a>
</template>

<script>
export default {
  props: ['path', 'title', 'classes'],
}
</script>