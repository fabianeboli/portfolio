<script setup lang='ts'>
import { useProjects } from '~/composables/useProjects';

definePageMeta({
  layout: 'custom',
})
const { params } = useRoute();
const projects = useProjects();

const project = projects.find(project => project.id.toString() === params.projectSlug);

</script>

<template>
  <div>
    {{ project }}
  </div>
</template>

<style scoped></style>