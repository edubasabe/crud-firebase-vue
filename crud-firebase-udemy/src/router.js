import Vue from 'vue'
import Router from 'vue-router'
// OLD WAY import Inicio from './views/Inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      // OLD WAY component: Inicio
      component: () => import(/* webpackChunkName: "inicio" */ './views/Inicio.vue')
    },
    {
      path: '/editar/:id',
      name: 'editar',
      // OLD WAY component: editar
      component: () => import(/* webpackChunkName: "editar" */ './views/Editar.vue')
    },
  ]
})
