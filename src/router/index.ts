import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Publications from "@/views/Publications.vue";
import Contact from "@/views/Contact.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
