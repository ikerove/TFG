<template>
 <div class= "title">
    <h3>Favoritos</h3>
    <div class="container my-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col"
                   v-for="(item, index) in favoritos" :key="index" :nombre="item.nombre" :id="item.id">
                    <div class="card">
                      <!--<router-link class= "link" to= "/board/:id">-->
                        <router-link :to="{ name: 'board-card-cert', params: { id: item.id } } ">
                        <img :src= "item.foto" class="card-img-top">
                        </router-link>
                      <!--</router-link>-->
                        
                      <div class="card-body">
                          <h5 class="card-title text-center"> {{item.nombre}}</h5>
                          <!--<h5 class="card-title text-center"> {{item.id}}</h5>-->
                          <!--<p class="card-text text-center"> {{item.correo}}</p>-->
                          <!--<button @click.prevent="muestraProducto(item.id)"> ver producto</button>-->
                          <!--<router-link to="/Certificados/Certificado1">
                            <button > Ver certificado</button>
                          </router-link>-->
                      </div>
                    </div>
                  
                </div>
            </div>
      </div>
</div>
</template>

<script>
import { collection, getDocs} from 'firebase/firestore/lite';
import { db } from "@/api/firebase";
    export default {
        name: 'favoritoS',

        data() {
            return {
                favoritos: [],
                favorito: {
                    nombre: '',
                    foto: ''
                }
            }
        },

        methods: {
           async obtenerDatos () { 
                const querySnapshot = await getDocs(collection(db, "favoritos"));
                querySnapshot.forEach((doc) => {
                let favorito = doc.data()
                favorito.id = doc.id
                this.favoritos.push(favorito)
                console.log(favorito)
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