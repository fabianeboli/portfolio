<script setup lang='ts'>
import ProjectCard from './ProjectCard.vue';
import { projectsData } from '../../composables/projectsData';
import ProjectSwiper from './ProjectSwiper.vue';

const { isSwiper } = defineProps<{ isSwiper: boolean }>();
</script>

<template>
  <div class="">
    <div v-if="isSwiper" class="mb-40 h-full relative xl:left-40 top-32 mt-16 flex flex-col sm:flex-row justify-center mx-10 sm:mx-40">
      <div class="sm:flex-[75%]">
        <h1 class="text-7xl mb-10 sm:mb-20 font-bold font-seriff text-main dark:text-slate-100 relative mark">{{ $t('projects.title') }}</h1>
        <p class="text-tertiary dark:text-slate-200 text-xl leading-9 text-justify sm:mr-20"> {{ $t('projects.article') }} </p>
      </div>
      <ProjectSwiper />
    </div>
    <ul v-else class="flex justify-around lg:gap-x-16 xl:gap-x-5 gap-y-10 flex-wrap lg:mx-52">
      <ProjectCard :is-swiper="false" v-for="project in projectsData" :id="project.id" :key="project.id"
        :title="project.title" :description="project.description" :image="project.image"
        :technologies="project.technologies" :link="project.link" :repository="project.repository" :demo="project.demo"
        :video-link="project.videoLink" />
    </ul>
  </div>
</template>

<style scoped>
.mark {
  /* -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
          animation: 1.5s highlight 1.5s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, rgb(5, 150, 105) 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  background-clip: content-box; */
}

@-webkit-keyframes highlight {
  to {
    background-position: 0 0;
  }
}

@keyframes highlight {
  to {
    background-position: 100% 50%;
  }
}

.mark::after {
  content: '';
  position: absolute;
  height: 12px;
  width: 275px;
  left: 0;
  bottom: 3px;
  background-color: rgb(5, 150, 105);
  opacity: 0.8;
  border-radius: 0 0 10px 10px;
  transform: skewY(0.4deg);
  transform: all 0.3s;
  transform-origin: 0 100%;
  z-index: -1;
  -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
  animation: 1.5s highlight 1.5s 1 normal forwards;
}
</style>
