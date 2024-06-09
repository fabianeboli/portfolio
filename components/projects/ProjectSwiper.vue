<script setup lang='ts'>
import SwiperControlls from './SwiperControlls.vue';
import ProjectCard from './ProjectCard.vue';
import { projectsData } from '../../composables/projectsData';

</script>

<template>
  <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1"
    :useSlideoverflow="true" :pagination="{
      clickable: true,
    }" :loop="true" :effect="'creative'" :autoplay="{
      delay: 8000,
      disableOnInteraction: true
    }" :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-100%', 0, -1]
      },
      next: {
        shadow: false,
        translate: ['100%', 0, 0]
      },
    }">
    <SwiperSlide v-for="project in projectsData" :key="project.id">
      <ProjectCard :is-swiper="true" :id="project.id" :key="project.id" :title="project.title" :description="project.description"
        :image="project.image" :technologies="project.technologies" :link="project.link"
        :repository="project.repository" :demo="project.demo" :video-link="project.videoLink" />
    </SwiperSlide>
    <SwiperControlls/>
  </Swiper>
</template>

<style>
.swiper-slide {
  /* height: auto !important; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 18px;
  height: 500px !important;
  font-size: 4rem;
  font-weight: bold; */
  height: auto !important;
  /* @apply flex justify-center items-stretch h-full w-full; */
}

/* .swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.swiper-cards {
  width: 100%;
  min-height: 100%;
} */

.swiper-cards {
  align-self: stretch !important;
}

.swiper-cards .swiper-slide {
  /* border-radius: 6px; */
  /* border: 1px solid black; */
  /* @apply drop-shadow-md shadow-sm; */
}

.swiper-pagination-bullet-active {
  @apply !bg-emerald-600;
}

.swiper-pagination-bullets {
  position: initial !important;
  margin-top: 1em;
 
}
</style>