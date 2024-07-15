<script setup lang='ts'>
import  { MenuType } from '~/types/enum';
import MainMenu from './utils/MainMenu.vue';
import ProjectMenu from './utils/ProjectMenu.vue';
const { setLocale } = useI18n();
const colorMode = useColorMode()
const isSliderOpen = ref<boolean>(false);
const isLanguageOpen = ref<boolean>(false);
const switchTheme = ref<boolean>(colorMode.value === 'dark');

const {menuType} = defineProps<{ menuType: MenuType }>();

const toggleTheme = () => {
  switchTheme.value = !switchTheme.value;
  colorMode.value = switchTheme.value ? 'dark' : 'light';
  colorMode.preference = switchTheme.value ? 'dark' : 'light';
}

const selectLanguage = (locale: string) => {
  isLanguageOpen.value = false;
  isSliderOpen.value = false;
  setLocale(locale);
}

const toggleMenu = () => {
  isSliderOpen.value = !isSliderOpen.value;
};

</script>

<template>
  <div>
    <UButton
      class="text-white dark:text-white hover:bg-emerald-800 hover:drop-shadow-lg hover:drop-shadow-emerald-200 font-bold border-2 rounded-full border-emerald-700 bg-emerald-700 drop-shadow-lg fixed z-50 top-5 sm:relative"
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
              <Icon name="material-symbols:light-mode-outline" class="text-secondary dark:text-yellow-300 mr-2"
                size="1.7em" />
              <UToggle v-model="switchTheme" @click="toggleTheme" color="teal" size="lg" />
              <Icon name="material-symbols:dark-mode-outline" class="text-secondary dark:text-amber-600 ml-2"
                size="1.7em" />

            </div>
            <h1 class="font-semibold text-2xl dark:text-white mr-20">Menu</h1>
            <UButton size="xl" color="red" variant="soft" @click="isSliderOpen = false">
              <Icon name="mdi:close" />
            </UButton>
          </div>
        </template>
        <div>
          <ul
            class="flex bg-white dark:bg-gray-900 dark:text-slate-100 hover:dark:text-white text-xl flex-col gap-y-10 text-center">
              <MainMenu v-if="menuType === MenuType.Main" @select-languate="selectLanguage"/>
              <ProjectMenu v-if="menuType === MenuType.Projects" @toggleMenu="toggleMenu"/>
            
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