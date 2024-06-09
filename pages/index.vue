<script setup lang='ts'>
import EmailForm from '~/components/Contact/EmailForm.vue';

definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="font-sans">
    <LandingPage />
    <Features/>
    <Projects :is-swiper="true"/>
    <EmailForm/>
  </div>
</template>

<style></style>