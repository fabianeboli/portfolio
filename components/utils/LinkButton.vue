<script setup lang='ts'>
const { href } = defineProps<{ title: string, href: string }>()
const router = useRouter();
</script>

<template>
  <Button @click="() => router.push(href)"
    class="text-gray-400 font-semibold absolute bottom-0 right-0 mb-4 mr-4 text-right text-2xl">{{ title }}
    <Icon name="mdi:chevron-right" />
  </Button>
</template>

<style>
</style>