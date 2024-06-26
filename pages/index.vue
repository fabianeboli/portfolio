<script setup lang='ts'>
import Contact from '~/components/Contact/Contact.vue';

// definePageMeta({
//   colorMode: 'light',
// })
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

<style scoped>
html {
  scroll-behavior: smooth;
}


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


</style>