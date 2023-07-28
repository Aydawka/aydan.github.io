<script setup>
import {NList, NListItem, NCard, NThing} from "naive-ui";
import { Icon, IconConfigProvider } from "@vicons/utils";


</script>
<template>
  <h1>Contact me <img src="../assets/PermContactCalendarRound.svg" style="width: 20px;height: 20px"></h1>
    <div class="project-list">
  <n-list hoverable clickable>
     <n-list-item>
      <n-card content-style="margin-top: 10px;">
      My contact number <img src="../assets/LocalPhoneRound.svg" style="width: 20px;height: 20px"> :
      </n-card>
    </n-list-item>
      <n-list-item>
      <n-card content-style="margin-top: 10px;">
      My email <img src="../assets/AlternateEmailOutlined.svg" style="width: 20px;height: 20px">:
          aydan.gasimova@gmail.com
      </n-card>
    </n-list-item>
   <n-list-item>
      <n-card content-style="margin-top: 10px;">
      ORCID <img src="../assets/Orcid.svg" style="width: 20px;height: 20px">
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card content-style="margin-top: 10px;">
        Linkedin <img src="../assets/Linkedin.svg" style="width: 20px;height: 20px">
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card content-style="margin-top: 10px;">
        Google scholar <img src="../assets/GraduationCap.svg" style="width: 20px;height: 20px">
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card content-style="margin-top: 10px;">
      Reach out to My GitHub page  <img src="../assets/LogoGithub.svg" style="width: 20px;height: 20px">
      </n-card>
    </n-list-item>
  </n-list>
    </div>
</template>

<style scoped>

.project-list{
    display: flex;
    justify-content: center;
}

.n-list.n-list--show-divider.n-list--hoverable.n-list--clickable{
    width: 700px;
}
</style>
