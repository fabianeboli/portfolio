<script setup lang='ts'>
definePageMeta({
  layout: 'project',
  colorMode: 'system',
})

import { useProjects } from '~/composables/useProjects';

const { params } = useRoute();
await navigateTo('/projects/1')
</script>

<template>
  TO BE REDIRECTED
</template>

