<script setup lang='ts'>
definePageMeta({
  layout: 'default'
})

const downloadFile = () => {
  const link = document.createElement('a');
  link.href = '/Fabian_Eboli_CV.pdf';
  link.download = 'Fabian Eboli - CV.pdf';
  link.target = '_blank';
  link.click();
}

const router = useRouter();
</script>

<template>
  <div class="h-screen">
    <div>
      <Navbar />
    </div>
    <section class="">
      <div class="flex justify-center gap-x-40 w-[80%] mx-auto mt-[5%]">
        <section class="flex flex-col text-center xl:text-5xl w-full mt-24">
          <h1 class="text-7xl mb-20 font-serif">Fabian Eboli</h1>
          <h2 class="text-3xl">Software Developer</h2>
          <span @click="() => router.push('/#offer')" class="mt-20 my-animation-bounce text-quaternary opacity-50 cursor-pointer"><Icon size="1.25em" name="ic:baseline-arrow-drop-down"/></span>
        </section>
        <section
          class="flex text-xl flex-col md:w-[800px] xl:w-[1100px] 2xl:w-[800px] bg-gray-50 p-4 rounded-md drop-shadow-md shadow-gray-500 text-tertiary">
          <p class="mb-20 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore
            magna aliqua. At augue eget arcu dictum varius. Malesuada proin libero nunc consequat interdum varius sit
            amet. Dictum fusce ut placerat orci nulla pellentesque dignissim. Vehicula ipsum a arcu cursus vitae.
            Tristique senectus et netus et malesuada fames ac turpis. Nibh tortor id aliquet lectus proin nibh nisl
            condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. A arcu cursus vitae
            congue mauris. Quisque id diam vel quam elementum. Urna cursus eget nunc scelerisque viverra mauris in
            aliquam. Eu augue ut lectus arcu bibendum at varius vel.</p>
          <button @click="downloadFile"
            class="flex justify-end items-center gap-x-0.5 cursor-pointer font-semibold text-emerald-700 duration-500 hover:text-emerald-500">Download
            CV
            <Icon name="mdi:download" />
          </button>
        </section>
      </div>

    </section>

  </div>

</template>

<style scoped> 
.my-animation-bounce {
  animation: bounce 3s infinite ease-in-out;

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    /* animation-timing-function: cubic-bezier(0.8, 0, 1, 1); */
  }
  50% {
    transform: translateY(0);
    /* animation-timing-function: cubic-bezier(0, 0, 0.2, 1); */
  }
}
}

</style>