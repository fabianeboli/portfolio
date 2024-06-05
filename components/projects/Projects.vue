<script setup lang='ts'>
import ProjectCard from './ProjectCard.vue';
import { projectsData } from '../../composables/projectsData';
import ProjectSwiper from './ProjectSwiper.vue';

const { isSwiper } = defineProps<{ isSwiper: boolean }>();
</script>

<template>
  <div  class="">
    <div v-if="isSwiper" class="mx-52 h-screen relative top-28">
      <ProjectSwiper/>
    </div>
    <ul v-else class="flex justify-around lg:gap-x-16 xl:gap-x-5 gap-y-10 flex-wrap lg:mx-52 ">
      <ProjectCard :is-swiper="false" v-for="project in projectsData" :id="project.id" :key="project.id" :title="project.title" :description="project.description"
        :image="project.image" :technologies="project.technologies" :link="project.link"
        :repository="project.repository" :demo="project.demo" :video-link="project.videoLink" />
    </ul>
  </div>
</template>

<style></style>
