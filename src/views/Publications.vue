<script setup lang="ts">

import {NList, NListItem, NCard, NThing} from "naive-ui";
</script>
<template>

 <h1 class="header">Publications</h1>
 <div class="pub-list">
  <n-list hoverable clickable>
    <n-list-item>
      <n-card
              title="A comparative analysis of the ensemble models for detecting gps spoofing attacks on UAVs"
              content-style="margin-top: 10px;">
        xxx
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card
              title="A lightweight Distributed Database Management in WS"
               content-style="margin-top: 10px;">
        N
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card
              title="A comparative analysis of supervised and unsupervised models for detecting gps spoofing attack on UAVs"
              content-style="margin-top: 10px;">
          xxx
      </n-card>
    </n-list-item>
  </n-list>
</div>
</template>

<style>

.pub-list{
    display: flex;
    justify-content: center;
}

.header{
   margin-left: 23%;
}

</style>
