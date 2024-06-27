<script setup lang='ts'>
const { videoLink } = defineProps<{ videoLink: string }>()
</script>

<template>
  <iframe width="600" height="355" :src="videoLink" title="Video Player" frameborder="0"
    allow="clipboard-write;accelerometer;encrypted-media" allowfullscreen :on-error="() => console.log('error')">
  </iframe>
</template>

<style scoped></style>