<script setup lang='ts'>
const router = useRouter();
definePageMeta({
  layout: 'default'
})
const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/Fabian_Eboli_CV.pdf';
  link.download = 'Fabian Eboli - CV.pdf';
  link.target = '_blank';
  link.click();
}

</script>

<template>
  <div class="">

    <div class=" xl:h-screen">
      <div class="video-container">
        <video autoplay loop muted class="fullscreen-bg-video w-52" poster="/projectImages/fallback_for_landing_video.png">
          <!-- <source src="/projectVideos/854053-hd_1920_1080_25fps_background.mp4" type="video/mp4"> -->
          <source src="/projectVideos/854053-sd_960_540_25fps.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>


      <div>
        <Navbar />
      </div>
      <section class="">
        <div class="flex flex-col xl:flex-row justify-center gap-x-80 w-[90%] sm:w-[80%] mx-2 sm:mx-auto mt-[10%]">
          <section class="flex flex-col text-center xl:text-5xl mt-24">
            <h1 class="text-6xl xl:text-8xl mb-52 font-serif font-bold text-white drop-shadow-lg">Fabian Eboli</h1>
            <h2 class="text-4xl text-emerald-500 font-serif font-bold drop-shado-sm"> {{ $t('landingPage.subTitle') }} </h2>
            <span @click="() => router.push('/#offer')"
              class="mt-20 my-animation-bounce text-white/80 cursor-pointer drop-shadow-md text-6xl md:text-md">
              <Icon size="1.25em" name="ic:baseline-arrow-drop-down" />
            </span>
          </section>
          <section
            class="flex text-xl flex-col w-[105%] md:w-[800px] xl:w-[1100px] 2xl:w-[700px] relative top-8 mb-24 lg:mb-20 bg-gray-200 dark:bg-gray-800 p-4 rounded-sm drop-shadow-lg shadow-gray-500 text-secondary dark:text-slate-50 text-justify">
            <p class="mb-20 leading-7 mx-2 text-secondary dark:text-slate-200">{{ $t('landingPage.article') }}</p>
            <button @click="downloadCV"
              class="flex justify-end items-center gap-x-0.5 cursor-pointer font-semibold text-emerald-700 dark:text-emerald-600 duration-500 hover:text-emerald-500 dark:hover:text-emerald-400">{{ $t('landingPage.downloadCV') }}
              <Icon class="mt-1" name="mdi:download" />
            </button>
          </section>
        </div>

      </section>

    </div>



  </div>


</template>

<style scoped>
video {
    background-image: url(/projectImages/fallback_for_landing_video.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}


.typingEffect {
  width: 0;
  overflow: hidden;
  /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid white;
  /* The cursor*/
  font-size: 16px;
  white-space: nowrap;
  /* Keeps the text on a single line */
  animation: typing 2s forwards;
}

/* The typing animation */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange;
  }
}


.video-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -20;
  height: 105vh;
}

.video-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.6);
  z-index: 1;
  backdrop-filter: blur(10px);
}

.fullscreen-bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.my-animation-bounce {
  animation: bounce 3s infinite ease-in-out;

  @keyframes bounce {

    0%,
    100% {
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