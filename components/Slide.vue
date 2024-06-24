<script setup lang='ts'>
const { setLocale } = useI18n();
const colorMode = useColorMode()

const isSliderOpen = ref<boolean>(false);
const isLanguageOpen = ref<boolean>(false);
const switchTheme = ref<boolean>(colorMode.preference === 'dark');

const toggleTheme = () => {
  console.log(colorMode.value, colorMode.value === 'light');
  switchTheme.value = !switchTheme.value;
  colorMode.value = switchTheme.value ? 'dark' : 'light';
}

const selectLanguage = (locale: string) => {
  isLanguageOpen.value = false;
  isSliderOpen.value = false;
  setLocale(locale);
}
</script>

<template>
  <div>
    <UButton
      class="text-white dark:text-white hover:bg-emerald-800 hover:drop-shadow-lg hover:drop-shadow-emerald-200 font-bold border-2 rounded-full border-emerald-700 bg-emerald-700 drop-shadow-lg fixed z-50 top-5 sm:static"
      label="" slide="left" size="lg" trailing-icon="i-heroicons-bars-3-20-solid" @click="isSliderOpen = true" />

    <!-- <UButton
      class="text-emerald-700 bg-transparent hover:bg-transparent hover:drop-shadow-lg hover:drop-shadow-emerald-200 font-bold border-2 rounded-full border-emerald-700 drop-shadow-lg shadow-emerald-200"
      label="" slide="left" trailing-icon="i-heroicons-bars-3-20-solid" @click="isSliderOpen = true" /> -->

    <USlideover class="!w-3/4 sm:!w-auto" v-model="isSliderOpen">
      <UCard class="flex main-content flex-col flex-1 text-main"
        :ui="{ body: { base: '!px-0' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex justify-between items-center mx-1">
            <div class="flex items-center">
              <Icon name="material-symbols:light-mode-outline" class="text-secondary dark:text-yellow-300 mr-2" size="1.7em" />
              <UToggle v-model="switchTheme" @click="toggleTheme" color="teal" size="lg" />
              <Icon name="material-symbols:dark-mode-outline" class="text-secondary dark:text-amber-600 ml-2" size="1.7em" />

            </div>
            <h1 class="font-semibold text-2xl dark:text-white mr-20">Menu</h1>
            <UButton size="xl" color="red" variant="soft" @click="isSliderOpen = false">
              <Icon name="mdi:close" />
            </UButton>
          </div>
        </template>
        <div>
          <ul class="flex bg-white dark:bg-gray-800 dark:text-slate-100 hover:dark:text-white text-xl flex-col gap-y-10 text-center">
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
            <li class="border-b-2 border-b-gray-100 hover:text-gray-700 hover:dark:text-slate-200 hover:border-b-emerald-500 h-10"
              @click="isLanguageOpen = !isLanguageOpen">

              <p class="grid grid-cols-3 items-center cursor-pointer">
              <div class="col-start-2 justify-self-center flex items-end gap-x-2 text-[#212121] dark:text-slate-200">
                <p>{{ $t('slide.language') }}</p>
                <Icon name="ion:language" size="" color="" />
              </div>

              <Icon class="col-start-3 justify-self-end mr-7"
                :class="{ 'rotate-180 duration-200': isLanguageOpen, 'rotate-0 duration-200': !isLanguageOpen }"
                name="ion:chevron-down" size="" color="#212121" />

              </p>
              <Transition name="slide">
                <div v-show="isLanguageOpen">
                  <div
                    class="relative top-2.5 bg-gray-50 dark:bg-gray-700 shadow-inner flex flex-col px-4 py-2 items-center gap-y-4 hover:border-b-2 border-emerald-500 text-secondary dark:text-slate-100">
                    <ul class="flex flex-col justify-center">
                      <button @click="selectLanguage('en')"
                        class="border-b-2 border-b-gray-100 hover:text-main hover:dark:text-slate-300 hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2">english
                        <Icon name="flag:gb-1x1" />
                      </button>

                      <button @click="selectLanguage('pl')"
                        class="border-b-2 border-b-gray-100 hover:text-main hover:dark:text-slate-300 hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2 ">polski
                        <Icon name="flag:pl-1x1" />
                      </button>
                      <button @click="selectLanguage('it')"
                        class="border-b-2 border-b-gray-100 hover:text-main hover:dark:text-slate-300 hover:border-b-emerald-500 pt-3 pb-1.5 flex justify-center items-center gap-x-2">italiano
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
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}
</style>