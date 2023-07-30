<script setup>
import {NList, NListItem, NCard, NThing} from "naive-ui";
import { Icon, IconConfigProvider } from "@vicons/utils";


</script>
<template>
  <h1>Projects
      <img src="../assets/FundProjectionScreenOutlined.svg" style="width: 40px;height: 40px">
  </h1>
    <div class="project-list">
  <n-list hoverable clickable>
    <n-list-item>
      <n-card title="Summer conference system"
              content-style="margin-top: 10px;">
        conference system<br>

      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card title="Web crawler" content-style="margin-top: 10px;">
        Ut enim ad minim veniam,<br>
        quis nostrud exercitation ullamco
      </n-card>
    </n-list-item>
  </n-list>







<!--          <n-card title="My ORCID">-->
<!--        https://orcid.org/0009-0001-6902-097X-->
<!--    </n-card>-->
<!--    <n-card title="My github address">-->
<!--        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My github</a>-->
<!--    </n-card>-->
<!--    <n-card title="My scholar page address">-->
<!--        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My scholar</a>-->
<!--    </n-card>-->
<!--    <n-card title="My linkedin">-->
<!--        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My linkedin</a>-->
<!--    </n-card>-->
<!--    <n-card title="My researchgate">-->
<!--        <a href="https://scholar.google.com/citations?user=7n1nsmsAAAAJ&hl=en&oi=ao" target="_blank">My researchgate</a>-->
<!--    </n-card>-->
    </div>
</template>

<style scoped>
.n-list.n-list--show-divider.n-list--hoverable.n-list--clickable{
    width: 700px;
}

.project-list{
    display: flex;
    justify-content: center;

}

</style>
