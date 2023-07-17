<script setup lang="ts">
import { RouterView } from 'vue-router'
import { h, ref, Component, Ref} from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,

} from '@vicons/ionicons5'
import {RouterLink} from "vue-router";

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => 'Home' }
      ),
    key: 'home',
    icon: renderIcon(BookIcon),
  },
      {
        label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'about-me',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => 'About Me' }
      ),
    key: 'about-me',
    icon: renderIcon(BookIcon),
  },
  {
        label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'projects',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => 'Recent Projects' }
      ),
    key: 'projects',
    icon: renderIcon(BookIcon),
    children: [
      {
                label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'publications',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => 'Publications' }
      ),
        key: 'publications'
      }
    ]
  },
]

const activeKey:Ref<string>= ref('');


</script>

<template>
  <main class="home-page">
  <div class="menu">
       <div class="header">
           <h1><a href="/">Home</a></h1>
       </div>

      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>


    <RouterView />

  </main>
</template>
<style scoped>

.home-page{
        margin: 0 2rem 0 2rem;

}
.menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem 0.5rem 1rem ;
    border-bottom: 2px solid black;

}
.header{    display: flex;
    justify-content: flex-end;
    align-items: flex-end;}


h1{margin: 0}

a{text-decoration: none;
color: black}
</style>
