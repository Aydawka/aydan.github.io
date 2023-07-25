<script setup>
import {NList, NListItem, NCard, NThing} from "naive-ui";
import { Icon, IconConfigProvider } from "@vicons/utils";


</script>
<template>
  <h1>Projects <img src="../assets/FundProjectionScreenOutlined.svg" style="width: 40px;height: 40px"></h1>
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
    </div>
</template>

<style>

.project-list{
    display: flex;
    justify-content: center;
}

</style>
