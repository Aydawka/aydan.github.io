<script setup lang="ts">
import DocumentationPageLottie from "@/assets/animation_lkhzpapw.json";
import { Vue3Lottie } from "vue3-lottie";

</script>
<template>

  <h1 class="about-h1">About Page</h1>
    <div class="about-general">
      <div class="about">
         Hello! I'm a software engineer with practical experience developing applications using JavaScript and Python.
        I'm a passionate, driven, and quick life-long learner dedicated to providing solutions through problem solving and troubleshooting.
        I am a creative soul who loves brainstorming solutions – be it with a computer or a client.
        I love all aspects of software development from full-stack development to data science.
        Although I enjoy experimenting with different technology and building side-projects,
        I excel in a collaborative team-based environment with a variety of differing perspectives.
        I have successfully built clean, scalable, and dynamic front-end web applications with TypeScript and Angular.
        Using Python I have developed Flask-based web applications and machine learning techniques for
        cybersecurity threat detection using neural networks.
        Some of my skills include:

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
    font-size: 1rem;
    font-weight: bold;
    color: #3b1f29;
    margin-left: 30rem;

    padding: 5rem;
}

.about .n-card.n-card--bordered {
    max-width: 700px;
    width: 80rem;
    margin-left: 33rem;
}


.about-h1{
    font-size: 4rem;
    transform: translateY(50%);
    font-weight: 800;
    justify-content: center;
    display: flex;
  margin-left: -2rem;
}

.about-general{display: flex;}

.yoga{min-width: 35rem}
</style>
