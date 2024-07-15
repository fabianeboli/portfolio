<script setup lang='ts'>
const { videoLink } = defineProps<{ videoLink: string }>()

let width = 330;
onMounted(() => {
  if(window.innerWidth > 768) {
    width = 600;
  }
})

</script>

<template>
  <iframe class="relative right-10 md:right-0" :width="width" height="355" :src="videoLink" title="Video Player" frameborder="0"
    allow="clipboard-write;accelerometer;encrypted-media" allowfullscreen :on-error="() => console.log('error')">
  </iframe>
</template>

<style scoped></style>