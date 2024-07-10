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
  <div class="flex flex-col w-[320px] sm:w-[400px] md:w-[600px] xl:w-full h-full pt-8 pb-9 sm:px-8 bg-white dark:bg-gray-800">
    <h1 class="text-2xl font-serif font-semibold sm:font-normal text-main dark:text-white my-8 text-center ml-1">{{ title }}</h1>
    <ul class="flex flex-col gap-y-3 lg:px-10 xl:px-0 list-disc md:list-none"
      :class="{ 'xl:border-l-2 xl:border-l-gray-300': borderLeft, 'xl:border-r-2 xl:border-r-gray-300': borderRight }">
      <li class="text-tertiary 2xl:w-[250px] dark:text-gray-300 md:text-center mx-10 sm:mx-0 2xl:mx-10" v-for="item in items" :key="item"> {{ item }} </li>
    </ul>
    <h2 class="text-2xl font-bold text-main dark:text-white text-center mt-10 ml-3"> {{ price }} {{ $t('features.currency') }}</h2>
  </div>
</template>

<style scoped></style>