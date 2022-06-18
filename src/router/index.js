
import {createRouter, createWebHistory} from 'vue-router'
    


import Home from '@/components/views/Home'
import Board from '@/components/views/Board'
import BoardCert from '@/components/views/BoardCert'
import BoardMarca from '@/components/views/BoardMarca'
import BoardCat from '@/components/views/BoardCat'
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
import Favoritos from '@/components/views/Favoritos'

import ZCertificado from '@/components/views/ZCertificado'
import ZProducto from '@/components/views/ZProducto'
import ZMarca from '@/components/views/ZMarca'


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
    path: "/board/:id",
    name: 'board-card-cert',
    component: BoardCert,
    props: true

  },

  {
    path: "/board/:id",
    name: 'board-card-marca',
    component: BoardMarca,
    props: true

  },

  {
    path: "/board/:id",
    name: 'board-card-cat',
    component: BoardCat,
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
    path:"/Favoritos",
    name:"favoritosA",
    component: Favoritos
  },

  {
    path:"/Delete",
    name:"deleteE",
    component: DeleteE
  },

  {
    path:"/Certificados/Certificado1",
    name:"Certi1",
    component: ZCertificado
  },

  {
    path:"/Pantalones/Pantalon1",
    name:"Pantalon1",
    component: ZProducto
  },

  {
    path:"/Marcas/Marca1",
    name:"Marca1",
    component: ZMarca
  },




]

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router