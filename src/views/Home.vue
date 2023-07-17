<script setup lang="ts">
import { NIcon, NMenu, NCarousel, NGradientText } from 'naive-ui'
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home-page">

<div class="carousel">

<n-carousel show-arrow>
  <div class="carousel-slide">
    <img class="carousel-img" src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.webp?b=1&s=170667a&w=0&k=20&c=iQE4in2blXsYoRYjoX7F8e4AFF6kOaE-TZiVNMPQ5kI=">
    <div class="carousel-text"><RouterLink to="about/me" class="carousel-text">See About Me :)</RouterLink></div>
  </div>
  <div class="carousel-slide">
    <img class="carousel-img" src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png">
    <div class="carousel-text"><RouterLink to="publications" class="carousel-text">See my Publications</RouterLink></div>
  </div>
  <div class="carousel-slide">
    <img class="carousel-img" src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png">
    <div class="carousel-text"><RouterLink to="projects" class="carousel-text">See my Projects</RouterLink></div>
  </div>

</n-carousel>
</div>

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

.carousel-text{
    color: white;
    text-decoration: none;
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