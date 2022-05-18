<template>
<div class="card">
    <div class="columns">
        <div class="column is-two-fifths">
            <figure class="">
                <br> <br> 
            <img src="@/assets/RCS.png" alt="imagen" title="RCS.png" width="300" height="300">
            </figure>
        </div>

        <div class="column">
            <br><br>
            <h3>
            <label> Nombre: RCS </label>
            <br><br>
            <label> Marcas que usan este certificado: </label>
            <label>Levis, Zara</label>
            <br><br>
            <label> Especificaciones: Establece los requisitos para la certificación de tercera parte de contenido reciclado y cadena de custodia </label>
            <br>
            </h3>
        </div>
        
    </div>
</div>
</template>

<script>
import { doc, getDoc} from "firebase/firestore";
import { db } from "@/api/firebase";


    export default {
        name: 'zCertificado',
        data: function () {
        return {
            id: 'dbUWxtlfZTC9e5vifdER',
            certificados: [],
            certificado: {}
        }
        },
        methods: {
            async recogedato(){
            const docRef = doc(db, "certificados", this.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
            }
        },

        mounted() {
            this.recogedato();
        }
    }
</script>

<style lang="scss" scoped>

</style>