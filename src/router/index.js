import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/contacto',
    component: () => import('@/views/ContactoVIew.vue')
  },
  {
    path: '/detalle/:id',
    component: () => import('@/views/DetalleView.vue')
  },
  {
    path: '/productos',
    component: () => import('@/views/ProductosView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
