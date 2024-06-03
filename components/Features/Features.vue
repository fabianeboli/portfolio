<script setup lang='ts'>
import Offer from './Offer.vue';

</script>

<template>
  <div class="w-full h-[600px] bg-gray-300 px-10 relative">
    <div class="flex justify-center items-center relative top-20">
      <ul id="offer" class="flex bg-gray-50 rounded-lg drop-shadow-lg shadow-sm shadow-gray-300 xl:scale-110">
        <Offer title="komponent" :items="['item1', 'item2', 'item3', 'item4', 'item5']" price="100" />
        <Offer title="strona" :items="['item1', 'item2', 'item3', 'item4', 'item5']" price="800" borderLeft
          borderRight />
        <Offer title="sklep" :items="['item1', 'item2', 'item3', 'item4', 'item5']" price="2000" />
      </ul>
    </div>
    <Button 
      class="text-gray-400 font-semibold absolute bottom-0 right-0 mb-4 mr-4 text-right text-2xl">Contact me <Icon name="mdi:chevron-right" />
    </Button>
  </div>
</template>

<style></style>