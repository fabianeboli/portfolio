<script setup lang='ts'>
const isOpen = ref<boolean>(false);

const items = () => {

}

</script>

<template>
  <div>
    <UButton
      class="text-emerald-700 bg-transparent hover:bg-transparent hover:drop-shadow-lg hover:drop-shadow-emerald-200 font-bold border-2 rounded-full border-emerald-700 drop-shadow-lg shadow-emerald-200"
      label="" slide="left" trailing-icon="i-heroicons-bars-3-20-solid" @click="isOpen = true" />

    <USlideover v-model="isOpen">
      <UCard class="flex flex-col flex-1"
        :ui="{ body: { base: 'px-0' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex justify-between items-center mx-1">
            <h1 class="font-semibold text-lg">Menu</h1>
            <UButton size="xl" color="red" variant="soft" @click="isOpen = false">
              <Icon name="mdi:close" />
            </UButton>
          </div>
        </template>
        <div>
          <ul class="flex text-xl flex-col gap-y-10 text-center">
            <li class="border-b-2 border-b-gray-100 pb-2 hover:text-gray-700 hover:border-b-emerald-500">
              <NuxtLink to="/offer">Offer</NuxtLink>
            </li>
            <li class="border-b-2 border-b-gray-100 pb-2 hover:text-gray-700 hover:border-b-emerald-500">
              <NuxtLink to="/#about">About</NuxtLink>
            </li>
            <li class="border-b-2 border-b-gray-100 pb-2 hover:text-gray-700 hover:border-b-emerald-500">
              <NuxtLink to="/projects">Projects</NuxtLink>
            </li>
            <li class="border-b-2 border-b-gray-100 pb-2 hover:text-gray-700 hover:border-b-emerald-500">
              <NuxtLink to="/skills">Skills</NuxtLink>
            </li>
          </ul>
        </div>
        <Placeholder class="h-full" />


      </UCard>
    </USlideover>
  </div>
</template>

<style></style>