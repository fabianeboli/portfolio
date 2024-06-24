<script setup lang='ts'>
import Offer from './Offer.vue';
const { t } = useI18n();
const items1 = [t('features.offer1.item1'), t('features.offer1.item2')];
const items2 = [t('features.offer2.item1'), t('features.offer2.item2')];
const items3 = [t('features.offer3.item1'), t('features.offer3.item2')];

</script>

<template>
  <div class="w-full sm:h-[600px] bg-gray-300 px-10 relative backgroundGradient">
    <div class="flex justify-center items-center relative top-24 mx-20 xl:mx-80">
      <ul id="offer"
        class="flex flex-col sm:flex-row bg-gray-50 rounded-lg drop-shadow-lg shadow-sm shadow-gray-300 dark:shadow-gray-900 xl:scale-110">
        <Offer :title="$t('features.offer1.title')"
          :items="items1" :price="$t('features.offer1.price')" />
        <Offer :title="$t('features.offer2.title')" :items="items2" :price="$t('features.offer2.price')"
          borderLeft borderRight />
        <Offer :title="$t('features.offer3.title')" :items="items3"
          :price="$t('features.offer3.price')" />
      </ul>
    </div>
    <!-- <Button 
      class="text-gray-400 font-semibold absolute bottom-0 right-0 mb-4 mr-0 sm:mr-4 text-right text-lg sm:text-2xl">Contact me <Icon name="mdi:chevron-right" />
    </Button> -->
  </div>
</template>

<style scoped>
.backgroundGradient {
  background: linear-gradient(57deg, #093028, #237a57);
  background-size: 200% 200%;
  box-shadow: -15px -20px 100px #237a57;
  -webkit-animation: BackgroundGradient 10s ease infinite;
  -moz-animation: BackgroundGradient 10s ease infinite;
  -o-animation: BackgroundGradient 10s ease infinite;
  animation: BackgroundGradient 1s ease infinite;
  animation: ShadowAnimation 5s ease-in-out infinite;
}

@keyframes ShadowAnimation {
  0% {
    box-shadow: -15px -15px 80px #237a5791
  }

  50% {
    box-shadow: -5px -10px 50px #237a5791
  }

  100% {
    box-shadow: -15px -15px 80px #237a5791
  }
}

@-webkit-keyframes BackgroundGradient {
  0% {
    background-position: 0% 62%
  }

  50% {
    background-position: 100% 39%
  }

  100% {
    background-position: 0% 62%
  }
}

@-moz-keyframes BackgroundGradient {
  0% {
    background-position: 0% 62%
  }

  50% {
    background-position: 100% 39%
  }

  100% {
    background-position: 0% 62%
  }
}

@-o-keyframes BackgroundGradient {
  0% {
    background-position: 0% 62%
  }

  50% {
    background-position: 100% 39%
  }

  100% {
    background-position: 0% 62%
  }
}

@keyframes BackgroundGradient {
  0% {
    background-position: 0% 62%
  }

  50% {
    background-position: 100% 39%
  }

  100% {
    background-position: 0% 62%
  }
}
</style>