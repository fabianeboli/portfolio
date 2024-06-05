<script setup lang='ts'>
definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="font-sans">
    <LandingPage />
    <Features/>
    <Projects :is-swiper="true"/>
  </div>
</template>

<style></style>