<template>
    
    <div v-if ="true" class="card">
    <div class="columns">
        <div class="column is-two-fifths">
            <figure class="">
                <br> <br> 
            <!--<img src="@/assets/aa.jpeg" alt="imagen" title="aa.jepg" width="300" height="300">-->
                <img :src="marca2.foto" width="500" height="10">
            </figure>
        </div>

        <div class="column">
            <br><br>
            <h3>
            <label id ="nombre-marca" ref ="nombre-marca"> Nombre: {{marca2.nombre}} </label>
            <br><br>
            <label id ="nombre-marca">Certificados que usa esta marca: {{marca2.certificados}}</label>
            <br><br>
            
            <br><br>
            
            </h3>
        </div>
        
    </div>
</div>
</template>

<script>
import { getDoc, doc } from 'firebase/firestore/lite';
import { db } from "@/api/firebase";
    export default {
        name: 'board-view-marc',
        data() {
            return{
                marca2: {
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
            async muestraProducto(id) {
            const docRef = doc(db, "marcas", id);
            const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.marca2 = docSnap.data()
                    //this.producto2.id = docSnap.id


                    console.log(this.marca2.id)
                    

                    console.log(this.marca2.nombre)
                    console.log(this.marca2.certificados)
                    
                    
                    } 
                    else {
                    console.log("¡No existe el documento!");
                    }

            }
        },

        mounted(){
            this.muestraProducto(this.id);
           
            
        }
    }
</script>

<style lang="scss" scoped>

</style>