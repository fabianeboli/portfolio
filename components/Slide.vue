<script setup lang='ts'>
const isSliderOpen = ref<boolean>(false);
const isLanguageOpen = ref<boolean>(false);

const items = () => {

}

</script>

<template>
  <div>
    <UButton
      class="text-white hover:bg-emerald-800 hover:drop-shadow-lg hover:drop-shadow-emerald-200 font-bold border-2 rounded-full border-emerald-700 bg-emerald-700 drop-shadow-lg"
      label="" slide="left" size="lg" trailing-icon="i-heroicons-bars-3-20-solid" @click="isSliderOpen = true" />

      <!-- <UButton
      class="text-emerald-700 bg-transparent hover:bg-transparent hover:drop-shadow-lg hover:drop-shadow-emerald-200 font-bold border-2 rounded-full border-emerald-700 drop-shadow-lg shadow-emerald-200"
      label="" slide="left" trailing-icon="i-heroicons-bars-3-20-solid" @click="isSliderOpen = true" /> -->

    <USlideover class="!w-1/2 lg:w-full"  v-model="isSliderOpen">
      <UCard class="flex  main-content flex-col flex-1 text-main"
        :ui="{ body: { base: '!px-0' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex justify-between items-center mx-1">
            <h1 class="font-semibold text-2xl">Menu</h1>
            <UButton size="xl" color="red" variant="soft" @click="isSliderOpen = false">
              <Icon name="mdi:close" />
            </UButton>
          </div>
        </template>
        <div>
          <ul class="flex bg-white text-xl flex-col gap-y-10 text-center">
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
            <li class="border-b-2 border-b-gray-100  hover:text-gray-700 hover:border-b-emerald-500 h-10"
              @click="isLanguageOpen = !isLanguageOpen">

              <p class="grid grid-cols-3 items-center cursor-pointer">
              <div class="col-start-2 justify-self-center flex items-center gap-x-2">
                <p>Language</p>
                <Icon name="ion:language" size="" color="#212121" />
              </div>

              <Icon class="col-start-3 justify-self-end mr-7"
                :class="{ 'rotate-180 duration-200': isLanguageOpen, 'rotate-0 duration-200': !isLanguageOpen }"
                name="ion:chevron-down" size="" color="#212121" />

              </p>
              <Transition name="slide">
                <div v-show="isLanguageOpen">
                  <div
                    class="relative top-2.5 bg-gray-50 shadow-inner flex flex-col px-4 py-2 items-center gap-y-4 hover:border-b-2 border-emerald-500 text-secondary"
                    >
                    <ul class="flex flex-col justify-center">
                      <button
                        class="border-b-2 border-b-gray-100  hover:text-main hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2">english
                        <Icon name="flag:gb-1x1" />
                      </button>
                      <button
                        class="border-b-2 border-b-gray-100  hover:text-main hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2 ">polski
                        <Icon name="flag:pl-1x1" />
                      </button>
                      <button
                        class="border-b-2 border-b-gray-100  hover:text-main hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2">italiano
                        <Icon name="flag:it-1x1" />
                      </button>
                    </ul>
                  </div>
                </div>
              </Transition>

            </li>
          </ul>
        </div>
        <Placeholder class="h-full" />


      </UCard>
    </USlideover>
  </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}
</style>