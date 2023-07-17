<script setup>
import {NList, NListItem, NCard, NThing} from "naive-ui";


</script>
<template>
  <h1>Projects</h1>
    <div class="project-list">
  <n-list hoverable clickable>
    <n-list-item>
      <n-card title="Better Late Than Never" content-style="margin-top: 10px;">
        Lorem ipsum dolor sit amet,<br>
        consectetur adipiscing elit,<br>

      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card title="Lorem Ipsum" content-style="margin-top: 10px;">
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
