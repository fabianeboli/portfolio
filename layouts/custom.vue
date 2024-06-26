<script setup lang='ts'>
const projects = useProjects();
const projectMenu = projects.map(({ id, title }) => ({ id, title }));
</script>

<template>
  <div class="flex bg-gray-400">
    <aside class="h-screen w-[200px] border-r-2 border-r-gray-200 shadow-lg shadow-gray-400 bg-slate-100 flex-none">
      <div class="flex items-center justify-center">
        <h1 class="text-2xl text-center font-semibold my-6">Projects</h1>
        <NuxtLink to="/"><UButton color="emerald" variant="soft" ><Icon size="1.5em" name="mdi:home"/></UButton></NuxtLink>
      </div>
      
      <ul class="flex flex-col gap-y-5 ml-4">
        <li v-for="project in projectMenu" :key="project.id" class="text-main text-lg hover:text-emerald-700 cursor-pointer" :class="{ 'font-bold !text-emerald-500': project.id.toString() === $route.params.projectSlug }">
         <span class="">{{ project.id }}.</span> <NuxtLink :to="`/projects/${project.id}`">{{ project.title }}</NuxtLink>
        </li>
      </ul>
    </aside>
    <div class="xl:mx-[25%] bg-gray-100 shadow-gray-400 shadow-lg">
      <div class="mx-12 my-10">
        <slot />
      </div>

    </div>

  </div>
</template>

<style></style>
