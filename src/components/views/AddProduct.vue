<template>

<div class="container" id="wrap">
	
    <div class="col-md-6 col-md-offset-3">
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
    <!--<div class="field">
        <label class="label">ID</label>
        <div class="control">
         <input v-model="producto.id" class="input" type="text" placeholder="e.g 00001">
        </div>
    </div>-->
    <div class="control">
        <label class="label">Certificados</label>       
        
         <div class="control">
         <input v-model="producto.certificados" class="input" type="text" placeholder="e.g ECO">
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
        <label class="label">Valoracion</label>
        <div class="control">
         <input v-model="producto.valoracion" class="input" type="text" placeholder="e.g 1">
        </div>
    </div>

    <div class="field">
        <label class="label">Link de compra</label>
        <div class="control">
         <input v-model="producto.link" class="input" type="link" placeholder="e.g. levis.com">
        </div>
    </div>

    <div class="input-group my-3">
        <input type="file" @change="buscarImagen($event)">
    </div>

    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-primary" @click.prevent="agregarDato()">
          Submit
        </a>
      </p>
      
    </div>
    </div>
    </div>
</template>

<script>
    import { collection, addDoc} from 'firebase/firestore/lite';
    import { db} from "@/api/firebase";
    import router from '@/router/index'
    import firebase from 'firebase/compat/app';
    export default {
        name: "AddProduct",

        components: {

        },

        data() {
            return {
            imagenes: [],
            file: null,
            //datoImagen: null,

            productos: [],
            producto: {
                categoria: '',
                nombre: '',
                //id: '',
                certificados: '',
                marca: '',
                materiales: '', 
                link: '',
                
            }
            }
        },

        methods: {
            async agregarDato(){
                try{
                    var storageRef = firebase.storage().ref();
                    await storageRef.child('imagenes').child(this.file.name).put(this.file)
                    const urlDescarga = await storageRef.child('imagenes').child(this.file.name).getDownloadURL()
                    

                    await addDoc(collection(db, "productos"), {
                        nombre: this.producto.nombre,
                        //id: this.producto.id,
                        categoria: this.producto.categoria,
                        certificados: this.producto.certificados,
                        marca: this.producto.marca,
                        materiales: this.producto.materiales,
                        link: this.producto.link,
                        foto: urlDescarga,

                    })

                    this.error = 'Image upload succesfully'
                    this.file = null
                }
                catch(error){
                    console.log(error);
                }
                finally{
                    router.push('/')
                }
                  
                },

            buscarImagen(event){
                    console.log(event.target.files[0]);
                    const tipoArchivo = event.target.files[0].type;
                    if(tipoArchivo === 'image/jpeg' || tipoArchivo === 'image/png'){
                        this.file = event.target.files[0]
                        this.error = null
                    }
                        else{
                        this.error = 'Archivo no válido'
                        this.file = null
                        return 
                        }
                        const reader = new FileReader();
                        reader.readAsDataURL(this.file);
                        reader.onload = (e) => {
                        this.datoImagen = e.target.result
                        }
                },
            
            subeImagen(){
                var storageRef = firebase.storage().ref();
                const refImg = storageRef.child("imagenes/" + this.file.name);
                const metadata = { contentType: "img/jpeg" };
                refImg.put(this.imagen, metadata).then((e) => console.log(e));
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>