<script setup lang='ts'>
definePageMeta({
  layout: 'custom',
})

import { useProjects } from '~/composables/useProjects';

const { params } = useRoute();
const projects = useProjects();
</script>

<template>
  TO BE REDIRECTED
</template>

<style scoped>

</style>