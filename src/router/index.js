import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeListaClientes from '../views/HomeListaClientes.vue'
import HomeAtualizaCliente from '../views/HomeAtualizaCliente.vue'
import HomeCreateClientes from '../views/HomeCreateClientes.vue'
import HomeLogin from '../views/HomeLogin.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/atualiza/:id',
    name: 'HomeAtualizaCliente',
    component: HomeAtualizaCliente,
    props:true
  },
  {
    path: '/clientes',
    name: 'HomeListaClientes',
    component: HomeListaClientes
  },
  {
    path: '/',
    name: 'HomeLogin',
    component: HomeLogin
  },

  {
    path: '/clientes/create',
    name: 'HomeCreateClientes',
    component: HomeCreateClientes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
