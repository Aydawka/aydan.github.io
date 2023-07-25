<script setup lang="ts">
import {NCard } from 'naive-ui'
import DocumentationPageLottie from "@/assets/animation_lkhzpapw.json";
import { Vue3Lottie } from "vue3-lottie";

</script>
<template>

  <h1>About page</h1>
    <div class="mb-8">
      <Vue3Lottie :animationData="DocumentationPageLottie" :height="300" :width="300" />
    </div>
  <div class="about">

    <n-card hoverable title="About me">
        Hello! I'm a software engineer with practical experience developing applications using JavaScript and Python.
          I'm a passionate, driven, and quick life-long learner dedicated to providing solutions through problem solving.
    </n-card>
    <n-card title="My ORCID">
        https://orcid.org/0009-0001-6902-097X
    </n-card>
    <n-card title="My github address">
        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My github</a>
    </n-card>
    <n-card title="My scholar page address">
        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My scholar</a>
    </n-card>
    <n-card title="My linkedin">
        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My linkedin</a>
    </n-card>
    <n-card title="My researchgate">
        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My researchgate</a>
    </n-card>

  </div>
</template>
<style scoped>

.about{display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.about .n-card.n-card--bordered{
    max-width: 700px;

}

h1{
    justify-content: center;
    display: flex;
}
</style>
