import { createRouter, createWebHistory } from 'vue-router'
import About from "@/views/AboutPage.vue";
import Projects from "../views/ProjectPage.vue"
import Publications from "@/views/PublicationPage.vue";
import Contact from "@/views/ContactPage.vue";
import HomePage from "@/views/HomePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about/me',
      name: 'about-me',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})

export default router
