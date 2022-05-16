<template>
 <!-- <router-link class="board-card" :to="{ name: 'board', params: { nombre, id } }">-->
      <!--<span class="board-card-title">❏ {{ name }}</span>-->
       
 <!-- </router-link>-->
 <!--<board-view :item="item.id"/>-->
 <h3>{{item.id}}holaaaaa</h3>
</template>

<script>
//import Board from '@/components/Board'
import { getDoc, doc } from 'firebase/firestore/lite';
import { db } from "@/api/firebase";
export default {
  name: 'board-card',
  props: {//["id"],
    //id: String,
    //name: String
    //nombre: String,
    //foto: String,
    //id: String
    id: Object
    
  },
 // components: {
 //   Board
 // },

  data(){
    return{
      item: null,
    };
    
  },

  mounted() {
     //async  muestraProducto(id) {
      const docRef = doc(db, "productos", this.id);
      const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            this.producto = docSnap.data()
            this.producto.id = docSnap.id

            console.log(this.producto.id)
            console.log(this.producto.nombre)
            console.log(this.producto.marca)
            console.log(this.producto.categoria)
            console.log(this.producto.link)
            console.log(this.producto.materiales)
            } 
            else {
            console.log("¡No existe el documento!");
            }

    }
  //}
}
</script>

<style lang="scss" scoped>
  //.board-card {
  //  background-color: #546E7A;
  //  box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
  //    0 2px 5px 0 rgba(49,49,93,.1),
  //    0 1px 2px 0 rgba(0,0,0,.08);
  //  box-sizing: border-box;
  //  border-radius: 5px;
  //  color: #fafafa;
  //  margin: 0.5rem 1.5rem;
  //  padding: 1rem;
  //  text-align: left;
  //  text-decoration: none;
  //  transition: all 600ms ease;
  //  width: 100%;
  //  height: 100px;
  //  &-title {
  //    font-size: 1.2rem;
  //  }
  //  &:hover {
  //    background-color: #90a4ae;
  //    font-weight: bold;
  //  }
  //  @media screen and (min-width: 600px) {
  //    width: 33%;
  //  }
  //  @media screen and (min-width: 1024px) {
  //    width: 250px;
  //  }
  //}
</style>