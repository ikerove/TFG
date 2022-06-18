<template>
    
    <div v-if ="true" class="card">
    <div class="columns">
        <div class="column is-two-fifths">
            <figure class="">
                <br> <br> 
            <!--<img src="@/assets/aa.jpeg" alt="imagen" title="aa.jepg" width="300" height="300">-->
                <img :src="producto2.foto" width="500" height="10">
            </figure>
        </div>

        <div class="column">
            <br><br>
            <h3>
            <label id ="nombre-producto" ref ="nombre-producto"> Nombre: {{producto2.nombre}} </label>
            <br><br>
            <label id ="nombre-certificados"> Certificados que tiene este producto: </label><br>
            <label>{{producto2.certificados}}</label>
            <br><br>
            <label id ="nombre-marca">Marca: {{producto2.marca}}</label>
            <br><br>
            <label id ="nombre-materiales"> Materiales de este producto: </label>
            <label>{{producto2.materiales}}</label>
            <br><br>
            <label v-if="producto2.valoracion == '1'">
            <label>Valoración: ★☆☆☆☆</label>
            </label>        
            <label v-else-if="producto2.valoracion == '2'">
            <label>Valoración: ★★☆☆☆</label>
            </label>          
            <label v-else-if="producto2.valoracion == '3'">
            <label>Valoración: ★★★☆☆</label>
            </label>          
            <label v-else-if="producto2.valoracion == '4'">
            <label>Valoración: ★★★★☆</label>
            </label>         
            <label v-else-if="producto2.valoracion == '5'">
            <label>Valoración: ★★★★★</label>
            </label>
            <br><br>
            <button id ="eliminar-favoritos" class="button"  v-if= "favorito.has(this.result.id)" @click="eliminarFavorito">Añadido a favoritos</button>
            <button id ="añadir-favoritos" class="button"  v-else @click="addFavorito" >Añadir a favoritos</button>
            <br><br>
            <label id="nombre-link" ><a target="_blank" :href= "producto2.link">Compra este producto </a></label>
            <br>
            </h3>
        </div>
        
    </div>
</div>
</template>

<script>
import { getDoc, doc } from 'firebase/firestore/lite';
import { db } from "@/api/firebase";
    export default {
        name: 'board-view',
        data() {
            return{
                favorito: new Map(),
                resultados:[],
                    result:{
                    id: '1',
                    nombre: 'aa'
                },
                producto2: {
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
            link:String,
            
        },

        methods: {
            async muestraProducto(id) {
            const docRef = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.producto2 = docSnap.data()
                    //this.producto2.id = docSnap.id


                    console.log(this.producto2.id)
                    

                    console.log(this.producto2.nombre)
                    console.log(this.producto2.marca)
                    console.log(this.producto2.categoria)
                    console.log(this.producto2.link)
                    console.log(this.producto2.materiales)
                    } 
                    else {
                    console.log("¡No existe el documento!");
                    }

            },

        addFavorito() {
        console.log("añadido");
        this.favorito.set(this.result.id, this.result)
        console.log(this.result);
        
        

        },

        eliminarFavorito() {
        console.log("eliminado");
        this.favorito.delete(this.result.id, this.result)
        console.log(this.result);
        },
        },

        

        mounted(){
            this.muestraProducto(this.id);
           
            
        }
    }
</script>

<style lang="scss" scoped>
  //  section {
  //      text-align: left;
  //  }
  //  h3 {
  //      color: O#37474f;
  //      text-align: left;
  //      margin: 1.5rem;
  //      span {
  //          color: #546e7a;
  //      }
  //  }
</style>