<script setup lang='ts'>
const projects = useProjects();
const projectMenu = projects.map(({ id, title }) => ({ id, title }));
</script>

<template>
 <div class="flex items-center justify-center">
        <h1 class="text-2xl text-center text-main dark:text-primary font-semibold my-6">Projects</h1>
        <NuxtLink to="/"><UButton color="emerald" variant="soft" ><Icon size="1.5em" name="mdi:home"/></UButton></NuxtLink>
      </div>
      
      <ul class="flex flex-col gap-y-5 ml-4">
        <li v-for="project in projectMenu" @click="$emit('toggleMenu')" :key="project.id" class="text-main dark:text-white text-lg hover:text-emerald-700 cursor-pointer" :class="{ 'font-bold !text-emerald-500': project.id.toString() === $route.params.projectSlug }">
        <NuxtLink :to="`/projects/${project.id}`"> <span class="">{{ project.id }}.</span> {{ project.title }}</NuxtLink>
        </li>
      </ul>
</template>

<style scoped>

</style>