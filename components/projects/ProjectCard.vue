<script setup lang='ts'>
import { type IProject } from '~/utils/types';

const { id, title, description, image, technologies, link, repository, demo, videoLink } = defineProps<IProject>();
const router = useRouter();

const shortenTechnologies = (technologies: string[]) => {
  const joinedTechnologies = technologies.join(", ");
  return joinedTechnologies.length > 50 ? joinedTechnologies.slice(0, 50) + '...' : joinedTechnologies;
}

const shortenDescription = (description: string) => {
  return description.length > 350 ? description.slice(0, 350) + '...' : description;
}

const openLink = (path: string) => {
  if (path) window.open(path, "_blank");
  else console.log("no link");
}

</script>
<template>
  <div
    class="bg-gray-50 rounded-sm drop-shadow-lg shadow-sm shadow-gray-300 w-80 px-5 py-2 flex flex-auto flex-col justify-between items-center">
    <div class="container w-full h-64 rounded-md overflow-hidden mb-2"
      :class="{ 'hover:scale-110 duration-300 hover:shadow-md': image, ' bg-gray-100': !image }">
      <img class=" h-full object-cover " :src="image" aria-label="Project image" />
    </div>
    <div class="flex gap-x-1 text-lg justify-center">
      <h1 class="text-2xl font-semibold text-main mr-2"> {{ title }} </h1>
      <button class="hover:scale-125 duration-300" v-if="link" @click="() => openLink(link!)">
        <Icon name="mdi:source-branch" />"
      </button>
      <button class="hover:scale-125 duration-300" v-if="repository" @click="() => openLink(repository!)">
        <Icon name="mdi:github" />
      </button>
      <button class="hover:scale-125 duration-300" v-if="demo" @click="() => openLink(demo!)">
        <Icon name="mdi:web" />
      </button>
      <button class="hover:scale-125 duration-300" v-if="videoLink" @click="() => openLink(videoLink!)">
        <Icon name="mdi:video" />
      </button>
    </div>
    <p class="xs:text-sm text-sm text-secondary my-5 text-justify"> {{ shortenDescription(description) }} </p>
    <h2 class="sm:text-sm text-md text-secondary text-justify self-start">
      <Icon name="mdi:source-branch" /> {{ shortenTechnologies(technologies) }}
    </h2>
    <button
      class="text-emerald-100 sm:text-sm text-md bg-emerald-700 rounded-md shadow-md hover:bg-emerald-800 hover:text-emerald-50 duration-300 transition-all font-semibold hover:shadow-none px-5 py-1.5 mt-5 mb-3"
      @click="() => router.push('/projects/' + id)">Details</button>
  </div>
</template>

<style scoped></style>