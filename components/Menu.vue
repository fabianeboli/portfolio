<script setup lang='ts'>
const isOpen = ref<boolean>(false);

const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]


</script>

<template>
  <UDropdown :ui="{ background: 'bg-gray-50' }" :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton size="md" class="text-emerald-700 font-bold border-2 rounded-full border-emerald-700 drop-shadow-lg shadow-emerald-200" color="white" label="" trailing-icon="i-heroicons-bars-3-20-solid" />
  </UDropdown>
</template>

<style></style>