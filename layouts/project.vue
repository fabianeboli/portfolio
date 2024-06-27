<script setup lang='ts'>
const projects = useProjects();
const projectMenu = projects.map(({ id, title }) => ({ id, title }));
</script>

<template>
  <div class="flex bg-gray-400 dark:bg-gray-700">
    <aside class="h-screen w-[200px] border-r-2 border-r-gray-200 dark:border-r-gray-900 shadow-lg shadow-gray-500 dark:shadow-transparent bg-slate-100 dark:bg-slate-800 flex-none">
      <div class="flex items-center justify-center">
        <h1 class="text-2xl text-center text-main dark:text-primary font-semibold my-6">Projects</h1>
        <NuxtLink to="/"><UButton color="emerald" variant="soft" ><Icon size="1.5em" name="mdi:home"/></UButton></NuxtLink>
      </div>
      
      <ul class="flex flex-col gap-y-5 ml-4">
        <li v-for="project in projectMenu" :key="project.id" class="text-main dark:text-white text-lg hover:text-emerald-700 cursor-pointer" :class="{ 'font-bold !text-emerald-500': project.id.toString() === $route.params.projectSlug }">
         <span class="">{{ project.id }}.</span> <NuxtLink :to="`/projects/${project.id}`">{{ project.title }}</NuxtLink>
        </li>
      </ul>
    </aside>
    <div class="xl:mx-[25%] w-full bg-gray-100 dark:bg-gray-800 shadow-gray-500 dark:shadow-transparent shadow-xl">
      <div class="mx-12 my-10">
        <slot />
      </div>

    </div>

  </div>
</template>