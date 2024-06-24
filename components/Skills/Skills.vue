<script setup lang='ts'>
import { frontendData, backendData, databasesData, toolsData } from '../../utils/skillsData';
import Skill from './Skill.vue';

const items = [{
  label: 'Frontend',
  icon: 'i-heroicons-computer-desktop',
  defaultOpen: false,
  slot: 'frontend'
}, {
  label: 'Backend',
  icon: 'i-heroicons-server-stack',
  disabled: false,
  slot: 'backend'
}, {
  label: 'Databases and CMS',
  icon: 'i-heroicons-circle-stack',
  slot: 'databases'
}, {
  label: 'Other tools',
  icon: 'i-heroicons-wrench-screwdriver',
  slot: 'tools'
}
];
</script>
<template>
  <div>
    <UAccordion class="w-[80vw] sm:w-full" color="emerald" variant="solid" size="xl" :items="items">
      <template #item="{ item }">
        <p class="italic text-gray-900 dark:text-white text-center">
          {{ item.description }}
        </p>
      </template>

      <template #frontend>
        <div class="text-gray-900 dark:text-white text-center">
          <Logo class="w-auto h-8 mx-auto" />
          <div class="flex flex-wrap justify-center gap-8 my-5">
            <Skill v-for="image in frontendData" :name="image.name" :icon="image.icon" />
          </div>
        </div>
      </template>

      <template #backend>
        <div class="text-gray-900 dark:text-white text-center">
          <Logo class="w-auto h-8 mx-auto" />
          <div class="flex flex-wrap justify-center gap-8 my-5">
            <Skill v-for="image in backendData" :name="image.name" :icon="image.icon" />
          </div>
        </div>
      </template>

      <template #databases>
        <div class="text-gray-900 dark:text-white text-center">
          <Logo class="w-auto h-8 mx-auto" />
          <div class="flex flex-wrap justify-center gap-8 my-5">
            <Skill v-for="image in databasesData" :name="image.name" :icon="image.icon" />
          </div>
        </div>
      </template>

      <template #tools>
        <div class="text-gray-900 dark:text-white text-center">
          <Logo class="w-auto h-8 mx-auto" />
          <div class="flex flex-wrap justify-center gap-8 my-5">
            <Skill v-for="image in toolsData" :name="image.name" :icon="image.icon" />
          </div>
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<style scoped></style>