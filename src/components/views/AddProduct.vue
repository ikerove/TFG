<template>
    <div class="field">
        <label class="label">Categoria</label>
        <div class="control">
         <input v-model="producto.categoria" class="input" type="text" placeholder="e.g Pantalones">
        </div>
    </div>

    <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
         <input v-model="producto.nombre" class="input" type="text" placeholder="e.g Vintage">
        </div>
    </div>
    <div class="field">
        <label class="label">ID</label>
        <div class="control">
         <input v-model="producto.id" class="input" type="text" placeholder="e.g 00001">
        </div>
    </div>
    <div class="control">
        <label class="label">Certificados</label>       
        <div class="select">
         <select>
             <option>Select dropdown</option>
             <option>ECO</option>
         </select>
     </div>
    </div>
    <div class="field">
        <label class="label">Marca</label>
        <div class="control">
         <input v-model="producto.marca" class="input" type="text" placeholder="e.g Levis">
        </div>
    </div>
    <div class="field">
        <label class="label">Materiales</label>
        <div class="control">
         <input v-model="producto.materiales" class="input" type="text" placeholder="e.g Algodon">
        </div>
    </div>

    <div class="field">
        <label class="label">Link de compra</label>
        <div class="control">
         <input v-model="producto.link" class="input" type="link" placeholder="e.g. levis.com">
        </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-primary">
          Submit
        </a>
      </p>
      <p class="control">
        <a class="button is-light">
            Cancel
        </a>
      </p>
    </div>
</template>

<script>
    import { collection, addDoc } from 'firebase/firestore/lite';
    import { db } from "@/api/firebase";
    import router from '@/router/index'
    export default {
        name: "AddProduct",

        components: {

        },

        data() {
            return {
            productos: [],

            producto: {
                categoria: '',
                nombre: '',
                id: '',
                certificados: '',
                marca: '',
                materiales: '', 
                link: ''
            }
            }
        },

        methods: {
            async agregarDato(){
                const docRef = await addDoc(collection(db, "productos"), {
                    nombre: this.producto.nombre,
                    id: this.producto.id,
                    certificados: this.producto.certificados,
                    marca: this.producto.marca,
                    materiales: this.producto.materiales,
                    link: this.producto.link,

                })
                    .then(() => {
                    router.go('/')
                    console.log("Documento añadido");
                    console.log(docRef);
                    })
                    .catch(function(error) {
                    console.error("Error al añadir el documento: ", error);
                    });
                },
        }
    }
</script>

<style lang="scss" scoped>

</style>