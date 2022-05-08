
import {createRouter, createWebHistory} from 'vue-router'
    


import Home from '@/components/views/Home'
import Board from '@/components/views/Board'
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'
import AddProduct from '@/components/views/AddProduct'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: "/board/:id",
    name: 'board',
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
  }


]

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router