<script setup lang='ts'>

</script>

<template>
  <div class="flex justify-center items-center gap-x-60 mx-[12.5%] mt-[10%]">
    <div class="flex-1 mx-52">
      <Skills />
    </div>
    <article class="flex-1">
      <h1 class="text-7xl font-bold font-seriff text-main relative text-end mark mb-24">Skills</h1>
      <p class="text-tertiary text-xl leading-9 text-justify">As a programmer, I have developed a wide range of skills in software
        development. From problem-solving to collaboration, I have honed my abilities in various programming languages
        and frameworks. I am proficient in languages such as Python, JavaScript, and Java, and have experience with
        popular frameworks like React, Vue.js, and Spring Boot. My programming skills include writing clean, efficient
        code, working effectively with version control systems, and collaborating with team members to deliver
        high-quality software solutions. While I take pride in my technical expertise, I also recognize the importance
        of continuous learning and staying up-to-date with the latest trends and best practices in the field. I am
        committed to staying adaptable and continuously improving my skills to meet the evolving needs of technology.
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

</style>