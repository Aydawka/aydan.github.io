<script setup lang="ts">
import { NIcon, NMenu, NCarousel, NGradientText } from 'naive-ui'
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home-page">

<div class="carousel">

<n-carousel show-arrow>
  <div class="carousel-slide">
    <img class="carousel-img" src="https://i.etsystatic.com/19848283/r/il/25fe0b/2347020755/il_fullxfull.2347020755_dp0a.jpg">
    <div class="carousel-text"><RouterLink to="about/me" class="carousel-text">Aydan Gasimova :)</RouterLink></div>
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