import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/proyectos/:slug',
      name: 'proyecto',
      component: () => import('@/views/ProjectDetailView.vue'),
      props: true,
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactView.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
