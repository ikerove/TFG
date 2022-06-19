<template>
<div class="container" id="wrap">
	
    <div class="col-md-6 col-md-offset-3">
    <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
         <input v-model="certificado.nombre" class="input" type="text" placeholder="e.g RCS">
        </div>
    </div>
    <div class="field">
        <label class="label">Especificaciones</label>
        <div class="control">
         <input v-model="certificado.especificaciones" class="input" type="text" placeholder="e.g Establece los requisitos para la certificación de tercera parte de contenido reciclado y cadena de custodia.">
        </div>
    </div>

    <div class="field">
        <label class="label">Marcas</label>
        <div class="control">
         <input v-model="certificado.marcas" class="input" type="text" placeholder="e.g Levis">
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
        name: "AddCertificate",
        components: {

        },

        data() {
          return {
            imagenes: [],
            file: null,

            certificados: [],
            certificado: {
                nombre: '',
                especificaciones: '',
                marcas: '',
            }
          }
        },

        methods: {
          async agregarDato(){
                try{
                    var storageRef = firebase.storage().ref();
                    await storageRef.child('imagenes').child(this.file.name).put(this.file)
                    const urlDescarga = await storageRef.child('imagenes').child(this.file.name).getDownloadURL()
                    

                    await addDoc(collection(db, "certificados"), {
                        nombre: this.certificado.nombre,
                        //id: this.producto.id,
                        especificaciones: this.certificado.especificaciones,
                        marcas: this.certificado.marcas,
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