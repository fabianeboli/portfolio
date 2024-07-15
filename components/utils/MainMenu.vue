<script setup lang='ts'>

const isLanguageOpen = ref<boolean>(false);

const emits = defineEmits(['selectLanguate']);


</script>

<template>
    <NuxtLink to="/projects/1">
              <li class="border-b-2 border-b-gray-100 pb-2 hover:text-gray-700 hover:border-b-emerald-500">Projects
              </li>
            </NuxtLink>

            <!-- <li class="border-b-2 border-b-gray-100 pb-2 hover:text-gray-700 hover:border-b-emerald-500">
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
            </li> -->
            <li
              class="border-b-2 border-b-gray-100 hover:text-gray-700 hover:dark:text-slate-200 hover:border-b-emerald-500 h-10"
              @click="isLanguageOpen = !isLanguageOpen">

              <p class="grid grid-cols-3 items-center cursor-pointer">
              <div class="col-start-2 justify-self-center flex items-end gap-x-2 text-[#212121] dark:text-slate-200">
                <p>{{ $t('slide.language') }}</p>
                <Icon name="ion:language" size="" color="" />
              </div>

              <Icon class="col-start-3 justify-self-end mr-7 text-white !dark:text-white"
                :class="{ 'rotate-180 duration-200': isLanguageOpen, 'rotate-0 duration-200': !isLanguageOpen }"
                name="ion:chevron-down" size=""  />

              </p>
              <Transition name="slide">
                <div v-show="isLanguageOpen">
                  <div
                    class="relative top-2.5 bg-gray-50 dark:bg-gray-700 shadow-inner flex flex-col px-4 py-2 items-center gap-y-4 hover:border-b-2 border-emerald-500 text-secondary dark:text-slate-100">
                    <ul class="flex flex-col justify-center">
                      <button @click="$emit('selectLanguate', 'en')"
                        class="border-b-2 border-b-gray-100 hover:text-main hover:dark:text-slate-300 hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2">english
                        <Icon name="flag:gb-1x1" />
                      </button>

                      <button @click="$emit('selectLanguate', 'pl')"
                        class="border-b-2 border-b-gray-100 hover:text-main hover:dark:text-slate-300 hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2 ">polski
                        <Icon name="flag:pl-1x1" />
                      </button>
                      <button @click="$emit('selectLanguate', 'it')"
                        class="border-b-2 border-b-gray-100 hover:text-main hover:dark:text-slate-300 hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2">italiano
                        <Icon name="flag:it-1x1" />
                      </button>
                    </ul>
                  </div>
                </div>
              </Transition>

            </li>
</template>

<style scoped>

</style>