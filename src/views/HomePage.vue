<script setup lang="ts">
import DocumentationPageLottie from "@/assets/animation_lkp2ahxs.json";
import { Vue3Lottie } from "vue3-lottie";
import {NButton} from 'naive-ui'
</script>

<template>
  <main>
    <div class="home-page">
      <div class="main-content">
        <div class="text-h1">
          <h1 class="header">
            AYDAN GASIMOVA
        </h1>
        <div class="text">
          I'm a software engineer with practical experience developing applications using TypeScript and Python.
          I'm a passionate, driven, and quick life-long learner dedicated to providing
          solutions through problem solving and troubleshooting.
        <div class="button-wng" >
          <n-button type="warning" class="type">
            <RouterLink to="/contact" style="text-decoration: none;
            font-size: 1.7rem;
            font-weight: 800;
            padding: 1rem;
            color: white"
            >Contact me
            </RouterLink>
        </n-button>
        </div>
        </div>
        </div>
      </div>

        <div class="yoga">
          <Vue3Lottie :animationData="DocumentationPageLottie" :height="300" :width="300" />
        </div>
      </div>
   </main>
</template>



<style scoped>
.home-page{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
}



.header{
    margin-top: 4rem ;
    margin-left:15rem;
    font-size: 3.8rem;
    transform: translateY(50%);
    font-weight: 600;
    top: 50%;
}

.text{
    font-size: 1rem;
    font-weight: 500;
    max-width: 50rem;
    margin-top: 5rem;
    padding-left: 10rem;
}

.text-h1{display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;}

h1{
  margin: 0;
min-width: 65rem;
}

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

.main-content{
  display: flex;
  gap: 20rem;
  justify-content:center;
}

.type{
         padding: 1rem;
         color: white!important;
         background-color: #f5a950 !important;
         border-radius: 0.25rem;
  border: none;
         transition: background-color 0.3s, transform 0.3s;
}



.type:hover{
  background-color: #d2a779;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  outline: 2px solid #f5ae4f;
}

@media all and (max-width: 1500px) {
.home-page{
    display: flex;
    gap: 0;
    flex-wrap: wrap-reverse;
    margin-top: 0;
}


}

@media all and (max-width: 670px) {
.home-page{
    display: flex;
    gap: 0;
    flex-wrap: wrap-reverse;
    margin-top: 0;
}

  .header{
    max-width: 20rem;
    height: 0.3rem;


  }

  .yoga{
  margin-top: 1rem;
}
.header{
    font-size: 1.8rem;
  transform: translateY(50%);
    font-weight: 600;
    top: 50%;
}

   .text{ font-size: 1rem;
    font-weight: 500;
    max-width: 45rem;
    /* margin-top: 5rem; */
    padding-left: 4rem;}


}
</style>