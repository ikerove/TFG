<template>
<div class="container" id="wrap">
	
    <div class="col-md-6 col-md-offset-3">
    <div class="field">
        <label class="label">Coleccion</label>
        <div class="control">
         <input v-model="item.colecion" class="input" type="text" placeholder="e.g productos">
        </div>
    </div>

    <div class="field">
        <label class="label">Id</label>
        <div class="control">
         <input v-model="item.id" class="input" type="text" placeholder="e.g udaAvweEFKwAjIS907QV">
        </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-primary" @click.prevent="eliminarDato(item.colecion, item.id)">
          Delete
        </a>
      </p>
      
    </div>
    </div>
    </div>
</template>

<script>
    import { deleteDoc, doc} from 'firebase/firestore/lite';
    import { db} from "@/api/firebase";
    import router from '@/router/index'
    
    export default {
        name: "deleteE",

        components: {

        },

        data() {
            return{
                items: [],
                item: {
                    colecion: '',
                    id: '',
                }
            }
        },

        methods: {
            async eliminarDato (colecion, id){
                
                if(colecion == "productos"){
                await deleteDoc(doc(db, "productos", id ));
                }else if(colecion == "certificados"){
                await deleteDoc(doc(db, "certificados", id ));
                }else if(colecion == "marcas"){
                await deleteDoc(doc(db, "marcas", id ));
                }else if(colecion == "categorias"){
                await deleteDoc(doc(db, "categorias", id ));
                }
                //await deleteDoc(doc(db, "productos", id ));
                router.push('/')
                

            },
        }
    }
</script>

<style lang="scss" scoped>

</style>