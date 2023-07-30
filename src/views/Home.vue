<script setup lang="ts">
import DocumentationPageLottie from "@/assets/animation_lkp2ahxs.json";
import { Vue3Lottie } from "vue3-lottie";
import {NButton} from 'naive-ui'
</script>

<template>
  <main class="home-page">
    <div class="header">
        Aydan gasimova
    <div class="text">
        I'm a software engineer with practical experience developing applications using JavaScript and Python.
    <div class="button-wng" ><n-button type="warning"><RouterLink to="/contact">Contact me</RouterLink></n-button></div>
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
    margin-left:15rem;
    font-size: 3.5rem;
    transform: translateY(50%);
    text-transform: uppercase;
    font-weight: 800;
    top: 50%;
}

.text{
    font-size: 1rem;
    font-weight: 500;

}

h1{margin: 0}
</style>