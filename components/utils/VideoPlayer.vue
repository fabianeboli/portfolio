<script setup lang='ts'>
const { videoId } = defineProps<{ videoId: string }>()
</script>

<template>
  <iframe width="520" height="315" :src="`/projectVideos/${videoId.toString()}`" title="Video Player"
    frameborder="0" allow="clipboard-write;accelerometer;encrypted-media" allowfullscreen>
  </iframe>
</template>

<style scoped></style>