<script setup lang='ts'>
import Contact from '~/components/Contact/Contact.vue';

definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="font-sans">
    <LandingPage />
    <Features />
    <Projects :is-swiper="true" />
    <SkillsArticle />
    <Contact />
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>