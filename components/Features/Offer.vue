<script setup lang='ts'>
const { title, items, price } = defineProps<{
  title: string,
  items: string[],
  price: string,
  borderLeft?: boolean,
  borderRight?: boolean
}>()


</script>

<template>
  <div class="flex flex-col w-full h-full pt-8 pb-9 px-8 bg-white dark:bg-gray-800">
    <h1 class="text-2xl font-serif font-semibold sm:font-normal text-main dark:text-white my-10 sm:my-6 text-center ml-1">{{ title }}</h1>
    <ul class="flex flex-col gap-y-3 px-20"
      :class="{ 'sm:border-l-2 sm:border-l-gray-300': borderLeft, 'sm:border-r-2 sm:border-r-gray-300': borderRight }">
      <li class="text-tertiary dark:text-gray-300 text-center" v-for="item in items" :key="item"> {{ item }} </li>
    </ul>
    <h2 class="text-2xl font-bold text-main dark:text-white text-center mt-10 ml-3"> {{ price }} {{ $t('features.currency') }}</h2>
  </div>
</template>

<style scoped></style>