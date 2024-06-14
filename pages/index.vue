<script setup lang='ts'>
import Contact from '~/components/Contact/Contact.vue';

definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="font-sans">
    <LandingPage />
    <Features/>
    <Projects :is-swiper="true"/>
    <Contact/>
  </div>
</template>

<style></style>