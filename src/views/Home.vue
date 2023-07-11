<script setup lang="ts">
import { NIcon, NMenu, NCarousel, NGradientText } from 'naive-ui'

</script>

<template>
  <main class="home-page">

<div class="carousel">

<n-carousel>
  <div class="carousel-slide">
    <img class="carousel-img" src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.webp?b=1&s=170667a&w=0&k=20&c=iQE4in2blXsYoRYjoX7F8e4AFF6kOaE-TZiVNMPQ5kI=">
    <div class="carousel-text"> Hello! I'm a software engineer with practical experience developing applications using JavaScript and Python.
          I'm a passionate, driven, and quick life-long learner dedicated to providing solutions through problem solving
          and troubleshooting.</div>
  </div>
  <div class="carousel-slide">
    <img class="carousel-img" src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png">
    <div class="carousel-text">Text 2</div>
  </div>
  <div class="carousel-slide">
    <img class="carousel-img" src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png">
    <div class="carousel-text">Text 3</div>
  </div>
      <div class="carousel-slide">
    <img class="carousel-img" src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png">
    <div class="carousel-text">Text 2</div>
  </div>
</n-carousel>
</div>
<!--      <div class="content">-->
<!--          Hello! I'm a software engineer with practical experience developing applications using JavaScript and Python.-->
<!--          I'm a passionate, driven, and quick life-long learner dedicated to providing solutions through problem solving-->
<!--          and troubleshooting. I am a creative soul who loves brainstorming solutions – be it with a computer or a client.-->
<!--      </div>-->
   </main>

    <n-gradient-text type="success">
    Personal project section
  </n-gradient-text>
</template>



<style scoped>
.carousel-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}


.carousel-text {
  position: absolute;
  top: 40%;
  left: 75%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
}



h1{margin: 0}
</style>