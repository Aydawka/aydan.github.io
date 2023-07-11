<script setup lang="ts">
import { RouterView } from 'vue-router'
import {defineComponent, h, ref, Component, Ref} from 'vue'
import { NIcon, NMenu, NCarousel, NGradientText } from 'naive-ui'
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
        label: 'Cybersecurity',
        key: 'cyber-security'
      }
    ]
  },
]

const activeKey:Ref<string>= ref('');


</script>

<template>
      <main class="home-page">
    <div class="header">
      <div class="menu">
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      </div>
    </div>
   </main>
  <RouterView />
</template>
<style scoped>

.menu{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

}

.header{
    margin: 0 5rem 0 5rem;
}

h1{margin: 0}
</style>
