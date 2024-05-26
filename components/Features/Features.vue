<script setup lang='ts'>
import Offer from './Offer.vue';

</script>

<template>
  <div class="w-full h-[600px] bg-gray-300 px-10 xl:scale-110">
    <div class="flex justify-center items-center relative top-20">
      <ul class="flex bg-gray-50 rounded-lg drop-shadow-lg shadow-sm shadow-gray-300">
        <Offer title="komponent" :items="['item1', 'item2', 'item3', 'item4', 'item5']" price="100"/>
        <Offer title="strona" :items="['item1', 'item2', 'item3', 'item4', 'item5']" price="800" borderLeft borderRight/>
        <Offer title="sklep" :items="['item1', 'item2', 'item3', 'item4', 'item5']" price="2000"/>
      </ul>
    </div>
  </div>
</template>

<style></style>