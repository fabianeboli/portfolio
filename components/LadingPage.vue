<script setup lang='ts'>

definePageMeta({
  layout: 'default'
})


</script>

<template>
  <div>
    <Navbar />
  </div>
  <section>
    <div class="flex justify-center gap-x-24">
      <section class="flex flex-col text-2xl">
        <div>
          <h1>Fabian Eboli</h1>
          <h2>Software Developer</h2>
        </div>
      </section>
      <section class="flex flex-col bg-gray-100 p-4 rounded-md drop-shadow-md shadow-gray-500">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil commodi, non quasi, maxime quod maiores neque
          impedit laborum repellat libero iure quam ea in unde, enim eius. At, sequi nisi!</p>
        <span>Download CV<span>
            <Icon name="mdi:download" />
          </span>
        </span>
      </section>
    </div>

  </section>
</template>

<style></style>