<script setup lang='ts'>
import VideoPlayer from '~/components/utils/VideoPlayer.vue';
import { useProjects } from '~/composables/useProjects';
definePageMeta({
  layout: 'project',
})

const { params } = useRoute();
const projects = useProjects();


const project = projects.find(project => project.id.toString() === params.projectSlug);
if(!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-10">
      <h1 class="font-seriff text-7xl font-bold text-main dark:text-slate-100 mb-10"> {{ project?.title }} </h1>
      <div class="flex gap-x-5">
        <NuxtLink v-if="project?.repository" :to="project.repository">
          <UButton color="black" variant="soft">
            <Icon size="2em" name="mdi:github" />
          </UButton>
        </NuxtLink>
        <NuxtLink v-if="project?.demo" :to="project.demo">
          <UButton color="black" variant="soft">
            <Icon size="2em" name="mdi:web" />
          </UButton>
        </NuxtLink>
      </div>
    </div>
    <div v-if="project?.videoLink" class="w-1/2 mx-auto">
      <VideoPlayer  :video-link="project.videoLink" />
    </div>
    <img v-else class="w-1/2 mx-auto" :src="project?.image" :aria-label="'Project image' + project?.title">
    <article class="text-secondary dark:text-slate-200 text-xl leading-9 mt-10 mx-10"> {{ project?.description }} </article>
    <div>

    </div>
  </div>
</template>

<style scoped></style>