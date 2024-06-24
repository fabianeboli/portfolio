<script setup lang='ts'>
const { locale } = useI18n();
console.log("locale in skills: ", locale.value);
</script>

<template>
  <div
    class="flex flex-col-reverse sm:flex-row justify-center items-center gap-x-60 mx-10 sm:mx-[12.5%] relative top-20 sm:top-10 sm:mt-[10%]">
    <div class="flex-1 mx-52">
      <Skills />
    </div>
    <article class="flex-1">
      <h1 class="text-7xl font-bold font-seriff text-main dark:text-slate-50 relative text-end mark mb-10 sm:mb-24"
        :class="{ 'markPl': locale === 'pl', 'markIt': locale === 'it' }">{{ $t('skills.title') }}</h1>
      <p class="text-tertiary dark:text-slate-200 text-xl leading-9 text-justify mb-16 sm:mb-0">{{ $t('skills.article') }}
      </p>
    </article>
  </div>
</template>

<style scoped>
.mark::after {
  content: '';
  position: absolute;
  height: 12px;
  width: 175px;
  right: 0;
  bottom: 3px;
  background-color: rgb(20 184 166);
  opacity: 0.8;
  border-radius: 0 0 10px 10px;
  transform: skewY(0.4deg);
  transform: all 0.3s;
  transform-origin: 0 100%;
  z-index: -1;
  -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
  animation: 1.5s highlight 1.5s 1 normal forwards;
}

.markPl::after {
  content: '';
  position: absolute;
  height: 12px;
  width: 420px;
  right: 0;
  bottom: 3px;
  background-color: rgb(20 184 166);
  opacity: 0.8;
  border-radius: 0 0 10px 10px;
  transform: skewY(0.4deg);
  transform: all 0.3s;
  transform-origin: 0 100%;
  z-index: -1;
  -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
  animation: 1.5s highlight 1.5s 1 normal forwards;
}

.markIt::after {
  content: '';
  position: absolute;
  height: 12px;
  width: 250px;
  right: 0;
  bottom: 3px;
  background-color: rgb(20 184 166);
  opacity: 0.8;
  border-radius: 0 0 10px 10px;
  transform: skewY(0.4deg);
  transform: all 0.3s;
  transform-origin: 0 100%;
  z-index: -1;
  -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
  animation: 1.5s highlight 1.5s 1 normal forwards;
}
</style>