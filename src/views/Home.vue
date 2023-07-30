<script setup lang="ts">
import DocumentationPageLottie from "@/assets/animation_lkp2ahxs.json";
import { Vue3Lottie } from "vue3-lottie";
import {NButton} from 'naive-ui'
</script>

<template>
  <main class="home-page">
    <div class="header">
        AYDAN GASIMOVA
    <div class="text">
      I'm a software engineer with practical experience developing applications using TypeScript and Python.
      I'm a passionate, driven, and quick life-long learner dedicated to providing
      solutions through problem solving and troubleshooting.
    <div class="button-wng" ><n-button type="warning"><RouterLink to="/contact" style="text-decoration: none;
    font-size: 1.7rem;
    font-weight: 800;
    padding: 1rem;"
    >Contact me</RouterLink></n-button></div>
    </div>
    </div>
    <div class="yoga">
      <Vue3Lottie :animationData="DocumentationPageLottie" :height="300" :width="300" />
    </div>
   </main>
</template>



<style scoped>
.home-page{
    display: flex;
    gap: 25rem;}



.header{
    margin-top: 4rem ;
    margin-left:15rem;
    font-size: 3.5rem;
    transform: translateY(50%);
    font-weight: 800;
    top: 50%;
}

.text{
    font-size: 1rem;
    font-weight: 500;
    margin-top: 2rem;
}

h1{margin: 0}

.n-button{
      height: 3.5rem;
      width: 14rem;
}

.button-wng{
  margin-top: 3rem;
}

.yoga{
  margin-top: 8rem;
}
</style>