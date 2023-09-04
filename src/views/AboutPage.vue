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
    width: 900px;
    height: 400px;

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


@media all and (max-width: 820px) {

  .about-general{
    flex-direction: column-reverse;
  }


/*.lottie-animation-container{
  width: 200px;
  height: 200px;
  display: flex;
    justify-content: center;

}*/

}



@media all and (max-width: 520px) {

.about{
  max-width: 25rem;
}
}





</style>
