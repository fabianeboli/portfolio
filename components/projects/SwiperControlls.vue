<script setup lang='ts'>
const swiper = useSwiper();
</script>

<template>
  <button class="text-gray-400" @click="swiper.slidePrev()">
    <Icon :name="'ion:chevron-back'" />
  </button>

  <button class="text-gray-400" @click="swiper.slideNext()">
    <Icon :name="'ion:chevron-forward'" />
  </button>

</template>

<style scoped></style>