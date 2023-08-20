<script setup lang="ts">
import DocumentationPageLottie from "@/assets/animation_lkhzpapw.json";
import { Vue3Lottie } from "vue3-lottie";

</script>
<template>
    <div class="about-general">
      <div class="about">
         <div>
           <h1 class="about-h1">About Page</h1>
         </div>

          Hello! I'm a software engineer with practical experience developing applications using JavaScript and Python.
        I'm a passionate, driven, and quick life-long learner dedicated to providing solutions through problem solving and troubleshooting.
        I am a creative soul who loves brainstorming solutions – be it with a computer or a client.
        I love all aspects of software development from full-stack development to data science.



      </div>
      <div class="yoga">
        <Vue3Lottie :animationData="DocumentationPageLottie" :height="300" :width="300" />
      </div>
   </div>
</template>
<style scoped>

.about{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1rem;
    font-weight: bold;
    color: #3b1f29;
    margin-left: 15rem;
    padding: 5rem;
    width: 900px;
    height: 400px;
    box-shadow: inset 20px 20px 20px rgba(0,0,0,0.05),
    25px 35px 20px rgba(0,0,0,0.05),
    25px 35px 30px rgba(0,0,0,0.05),
    inset -20px -20px 25px rgba(0,0,0,0.09);
    border-radius: 57% 43% 43% 57%/43% 43% 57% 57%;
  transition: 0.5s ease-in-out;
}

.about:hover{
  border-radius: 50%;
}

.about::before{
  content: '';
  position: absolute;
  width: 35px;
  height: 35px;
  top: 50px;
  left: 85px;
  border-radius: 50%;
  opacity: 0.9;
}



.about .n-card.n-card--bordered {
    max-width: 700px;
    width: 80rem;
    margin-left: 33rem;
}


.about-h1{
    font-size: 4rem;
    margin-top: 0!important;
    font-weight: 800;
    background: none!important;

}

.about-general{display: flex;
    margin-top: 6rem;}

.yoga{min-width: 35rem}


@media all and (max-width: 1388px) {
.about-h1{
    font-size: 2rem;
    font-weight: 800;
  min-width: 30rem;
}


.about{margin-left: 8rem}

}

@media all and (max-width: 1130px) {
.lottie-animation-container{
  margin-left: 2.5rem!important;

}
  .about{
    margin-left: 0;
      width: 600px;
    height: 300px;}

}

@media all and (max-width: 970px) {
  .about-general{
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: flex-start;
    }
.lottie-animation-container{
  width: 100px;
  height: 100px;

}
}

</style>
