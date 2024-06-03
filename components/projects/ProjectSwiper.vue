<script setup lang='ts'>
import SwiperControlls from './SwiperControlls.vue';
import ProjectCard from './ProjectCard.vue';
import { projectsData } from '../../composables/projectsData';

</script>

<template>
  <Swiper :auto-height="true" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="2"
    :pagination="{
      clickable: true,
      
    }" :loop="true" :effect="'creative'" :autoplay="{
      delay: 8000,
      disableOnInteraction: true
    }" :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }">
    <SwiperSlide v-for="project in projectsData" :key="project.id">
      <ProjectCard :id="project.id" :key="project.id" :title="project.title" :description="project.description"
        :image="project.image" :technologies="project.technologies" :link="project.link"
        :repository="project.repository" :demo="project.demo" :video-link="project.videoLink" />
    </SwiperSlide>
    <SwiperControlls/>
  </Swiper>
</template>

<style >
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
}

.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.swiper-cards {
  width: 240px;
  height: 240px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}

.swiper-pagination-bullet-active {
  @apply !bg-emerald-600;
}
</style>