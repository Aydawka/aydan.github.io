<script setup>
import {NList, NListItem, NCard, NThing} from "naive-ui";
import { Icon, IconConfigProvider } from "@vicons/utils";
import {Vue3Lottie} from "vue3-lottie";
import Contact from "@/assets/animation_lkp12hif.json";


</script>
<template>
  <h1 class="header">Contact Me <img src="../assets/PermContactCalendarRound.svg" style="width: 20px;height: 20px"></h1>
    <div class="project-list">
        <div class="list">
  <n-list hoverable clickable>
     <n-list-item>
      <n-card content-style="margin-top: 10px;">
          <div class="list-items">
      <img src="../assets/LocalPhoneRound.svg" style="width: 20px;height: 20px">
          701-xxxxxx
              </div>
      </n-card>
    </n-list-item>
      <n-list-item>

      <n-card content-style="margin-top: 10px;">
          <div class="list-items">
          <a href="mailto:aydan.gasimova@gmail.com"  target="_blank"><img src="../assets/AlternateEmailOutlined.svg" style="width: 20px;height: 20px"></a>
          <a href="mailto:aydan.gasimova@gmail.com"  target="_blank">aydan.gasimova@gmail.com</a>
      </div></n-card>
    </n-list-item>
   <n-list-item>
      <n-card content-style="margin-top: 10px;">
                    <div class="list-items">
      <a href="https://orcid.org/0009-0001-6902-097X"  target="_blank"><img src="../assets/Orcid.svg" style="width: 20px;height: 20px"></a>
      <a href="https://orcid.org/0009-0001-6902-097X"  target="_blank">ORCID </a>
                        </div>
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card content-style="margin-top: 10px;">
                    <div class="list-items">
          <a href="https://www.linkedin.com/in/aydan-gasimova-a98b7521b/"  target="_blank"><img src="../assets/Linkedin.svg" style="width: 20px;height: 20px"></a>
          <a href="https://www.linkedin.com/in/aydan-gasimova-a98b7521b/"  target="_blank">Linkedin</a>
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

.list{
    width: 30rem;
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



</style>
