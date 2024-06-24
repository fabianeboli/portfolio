<script setup lang='ts'>

</script>

<template>
  <div class="flex flex-col relative bottom-32 sm:bottom-0">
    <h1 class="text-6xl font-bold ml-4 sm:ml-0 font-seriff text-main dark:text-slate-100 relative mark">{{ $t('contact.title') }}</h1>
    <div class="mt-20 ml-5 text-2xl xl:text-2xl flex flex-col gap-y-14 sm:gap-y-7 xl:gap-y-9 text-secondary dark:text-slate-200">
      <a class="hover:text-emerald-500 duration-200" href="mailto:fabianeboli@pm.me">
        <Icon class="mr-2" name="mdi:email" />fabianeboli@pm.me
      </a>
      <a class="hover:text-emerald-500 duration-200" href="https://github.com/fabianeboli" target="_blank">
        <Icon class="mr-2" name="mdi:github" />github
      </a>
      <a class="hover:text-emerald-500 duration-200" href="https://linkedin.com/in/fabian-eboli-b04945265" target="_blank">
        <Icon class="mr-2" name="mdi:linkedin" />fabian-eboli
      </a>
    </div>
  </div>


</template>

<style scoped>
.mark::after {
  content: '';
  position: absolute;
  height: 12px;
  width: 220px;
  left: 0;
  bottom: 3px;
  background-color: rgb(12, 146, 179);
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