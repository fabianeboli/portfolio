<script setup lang='ts'>
const {name, icon} = defineProps<{ name: string, icon: string }>()
const isHovered =  ref<boolean>(false);
</script>

<template>
<div class="relative" @mouseover="isHovered = true" @mouseleave="isHovered = false">
  <p class="absolute bottom-10 left-1/2 -translate-x-1/2 bg-teal-500 text-center text-white p-3 rounded-lg" :class="{ 'visible z-50': isHovered, 'invisible': !isHovered }">{{ name }}</p>
  <Icon :class="{'brightness-125 duration-1000': isHovered, 'brightness-100': !isHovered}" :name="icon" size="4rem"/>
</div>
</template>

<style scoped>

</style>