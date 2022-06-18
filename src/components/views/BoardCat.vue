<template>
    
    <div class="container my-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col"
                   v-for="(item, index) in productos" :key="index" :nombre="item.nombre" :id="item.id">
                    <div class="card">
                      <!--<router-link class= "link" to= "/board/:id">-->
                        <router-link :to="{ name: 'board-card-cat', params: { id: item.id } } ">
                        <img :src= "item.foto" class="card-img-top">
                        </router-link>
                      <!--</router-link>-->
                        
                      <div class="card-body">
                          <h5 class="card-title text-center"> {{item.nombre}}</h5>
                          <!--<h5 class="card-title text-center"> {{item.id}}</h5>-->
                          <!--<p class="card-text text-center"> {{item.correo}}</p>-->
                          
                      </div>
                    </div>
                  
                </div>
            </div>
      </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "@/api/firebase";
    export default {
        name: 'board-view-cat',
        data() {
            return{
                productos: [],
                    producto: {
                        nombre: '',
                        //correo: '',
                        foto: ''
                    }
            }
        },
        components: {},

        props: {
            //name: String,
            //id: String
            //nombre: String,
            //foto: String,
            //id: String
            id: String,
          
            
        },

        methods: {
            async obtenerDatos () { 
                const querySnapshot = await getDocs(collection(db, "productos"));
                querySnapshot.forEach((doc) => {
                let producto = doc.data()
                producto.id = doc.id
                this.productos.push(producto)
                console.log(producto)
            });
            }, 
        },

        mounted() {
            this.obtenerDatos();
        }
    }
</script>

<style lang="scss" scoped>

</style>