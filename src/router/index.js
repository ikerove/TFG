
import {createRouter, createWebHistory} from 'vue-router'
    


import Home from '@/components/views/Home'
import Board from '@/components/views/Board'
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'
import AddProduct from '@/components/views/AddProduct'
import AddCertificate from '@/components/views/AddCertificate'
import Certificados from '@/components/views/Certificados'
import AddCategoria from '@/components/views/AddCategoria'
import Categorias from '@/components/views/Categorias'
import AddMarca from '@/components/views/AddMarca'
import Marcas from '@/components/views/Marcas'

import DeleteE from '@/components/views/DeleteE'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: "/board/:id",
    name: 'board-card',
    component: Board,
    props: true

  },

  {
    path:"/LogIn",
    name: 'login',
    component: LogIn
  },

  {
    path:"/SignUp",
    name: 'signup',
    component: SignUp
  },

  {
    path:"/AddProduct",
    name:"addproduct",
    component: AddProduct
  },

  {
    path:"/AddCertificate",
    name:"addcertificate",
    component: AddCertificate
  },

  {
    path:"/AddCategoria",
    name:"addcategoria",
    component: AddCategoria
  },

  {
    path:"/AddMarca",
    name:"addmarca",
    component: AddMarca
  },

  {
    path:"/Certificados",
    name:"certificados",
    component: Certificados
  },

  {
    path:"/Categorias",
    name:"categoriasA",
    component: Categorias
  },

  {
    path:"/Marcas",
    name:"marcasA",
    component: Marcas
  },

  {
    path:"/Delete",
    name:"deleteE",
    component: DeleteE
  },



]

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router