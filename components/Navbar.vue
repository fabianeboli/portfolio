<script setup lang='ts'>

</script>

<template>
  <div>
    <div class="flex justify-between mt-5 mb-20">
      <div class="ml-10">
        <span v-if="false">
          <Menu />
        </span>
        <span v-if="true">
          <Slide />
        </span>
      </div>

      <!-- <div class="flex justify-end gap-x-10 text-xl mr-10">
        <nav aria-label="Page navigation"
          class="flex flex-col bg-gray-50 rounded-full px-7 py-1.5 drop-shadow-md shadow-gray-100 text-gray-400 ">
          <ul class="flex gap-x-4">
            <li class="hover:text-gray-700 hover:border-b-2 hover:border-b-emerald-500">
              <NuxtLink to="/offer">Offer</NuxtLink>
            </li>
            <li class="hover:text-gray-700 hover:border-b-2 hover:border-b-emerald-500">
              <NuxtLink to="/#about">About</NuxtLink>
            </li>
            <li class="hover:text-gray-700 hover:border-b-2 hover:border-b-emerald-500">
              <NuxtLink to="/projects">Projects</NuxtLink>
            </li>
            <li class="hover:text-gray-700 hover:border-b-2 hover:border-b-emerald-500">
              <NuxtLink to="/skills">Skills</NuxtLink>
            </li>
          </ul>

        </nav>
        <nav aria-label="Functional menu"
          class="flex bg-gray-50 rounded-full px-7 py-1.5 drop-shadow-md shadow-gray-100 text-gray-400">
          <ul class="flex gap-x-2">
            <li class="hover:text-gray-700 border-b-2 border-b-transparent hover:border-b-emerald-500">
              <NuxtLink to="/#">
                <Icon name="ion:language" color="#212121" />
              </NuxtLink>
            </li>
            <li class="hover:text-gray-700 border-b-2 border-b-transparent hover:border-b-emerald-500">
              <NuxtLink to="/#footer">
                <Icon name="mdi:palette-outline" color="#212121" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div> -->

    </div>
  </div>


</template>

<style></style>