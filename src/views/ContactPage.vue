<script setup lang="ts">
import {NList, NListItem, NCard } from "naive-ui";
import {Vue3Lottie} from "vue3-lottie";
import Contact from "@/assets/animation_lkp12hif.json";


</script>
<template>
  <h1 class="header">
    Contact Me
    <img src="../assets/PermContactCalendarRound.svg"
         style="width: 20px;height: 20px"
         alt="">
  </h1>
    <div class="project-list">
      <div class="list">
          <n-list hoverable clickable>

             <n-list-item>
              <n-card content-style="margin-top: 10px;">
                            <div class="list-items">
                  <a href="https://www.linkedin.com/in/aydan-gasimova-a98b7521b/"
                     target="_blank">
                    <img src="../assets/Linkedin.svg" style="width: 20px;height: 20px">
                  </a>
                  <a
                      href="https://www.linkedin.com/in/aydan-gasimova-a98b7521b/"
                     target="_blank">
                    Linkedin
                  </a>
                  </div>
              </n-card>
            </n-list-item>
             <n-list-item>
              <n-card content-style="margin-top: 10px;">
                            <div class="list-items">
                  <a href="https://github.com/Aydawka" target="_blank">
                      <img src="../assets/LogoGithub.svg" style="width: 20px;height: 20px">
                  </a>
                 <a href="https://github.com/Aydawka"  target="_blank">Github page</a>
                </div>
              </n-card>
            </n-list-item>
  </n-list>
      </div>
      <div class="lottie">
          <Vue3Lottie :animationData="Contact" :height="300" :width="300" />
      </div>
    </div>
</template>

<style scoped>

.project-list{
    display: flex;
    justify-content: center;
    gap:25rem;

}


.header{
    margin-left:10rem;
    font-size: 1.5rem;
    transform: translateY(50%);
    text-transform: uppercase;
    font-weight: 800;
}


.list-items{
    display: flex;
    gap: 1rem;
}

.n-list.n-list--show-divider{
  min-width: 20rem;
}


a{    text-decoration: none;}

@media all and (max-width: 970px) {
 .project-list {

   gap: 10rem;
 }
}

@media all and (max-width: 670px) {
 .project-list {

   gap: 5rem;
 }
}

@media all and (max-width: 750px) {
 .project-list {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 0;

 }
}



</style>
