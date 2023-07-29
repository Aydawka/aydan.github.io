<script setup lang="ts">
import {NCard } from 'naive-ui'
import DocumentationPageLottie from "@/assets/animation_lkhzpapw.json";
import { Vue3Lottie } from "vue3-lottie";

</script>
<template>

  <h1 class="about-h1">About page</h1>
    <div class="about-general">
      <div class="about">
          Hello! I'm a software engineer with practical experience developing applications using JavaScript and Python.
            I'm a passionate, driven, and quick life-long learner dedicated to providing solutions through problem solving.
      </div>
      <div class="yoga">
        <Vue3Lottie :animationData="DocumentationPageLottie" :height="300" :width="300" />
      </div>
   </div>
</template>
<style scoped>

.about{display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    color: #3b1f29;
    margin-left: 30rem;
    background: #F6DBDFF2;
    padding: 5rem;
}

.about .n-card.n-card--bordered {
    max-width: 700px;
    width: 80rem;
    margin-left: 33rem;
}

h1{
    justify-content: center;
    display: flex;
}

.about-h1{
        font-size: 6rem;
    transform: translateY(50%);
    text-transform: uppercase;
    font-weight: 800;
}

.about-general{display: flex;}

.yoga{min-width: 35rem}
</style>
