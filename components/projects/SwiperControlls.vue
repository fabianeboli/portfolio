<script setup lang='ts'>
const swiper = useSwiper();
</script>

<template>
  <button class="text-teal-700 absolute top-[40%]  sm:left-[0%] xl:left-[30%] z-50 hover:scale-125 hover:duration-200" @click="swiper.slidePrev()">
    <Icon :size="'1.5em'" :name="'ion:chevron-left'" />
  </button>

  <button class="text-teal-700 absolute top-[40%] right-[0%] lg:right-[10%] xl:right-[30%] z-50 hover:scale-125 hover:duration-200" @click="swiper.slideNext()">
    <Icon :size="'1.5em'" :name="'ion:chevron-right'" />
  </button>

</template>

<style scoped></style>