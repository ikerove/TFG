<template>
    <div class="field">
        <label class="label">Coleccion</label>
        <div class="control">
         <input v-model="item.colecion" class="input" type="text" placeholder="e.g Tiro Alto">
        </div>
    </div>

    <div class="field">
        <label class="label">Id</label>
        <div class="control">
         <input v-model="item.id" class="input" type="text" placeholder="e.g Vintage">
        </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-primary" @click.prevent="eliminarDato(item.colecion, item.id)">
          Delete
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
            async eliminarDato (colecion,id){
                if(colecion == "productos"){
                await deleteDoc(doc(db, "productos", id ));
                }else if(colecion == "certificados"){
                await deleteDoc(doc(db, "certificados", id ));
                }
                //await deleteDoc(doc(db, "productos", id ));
                router.go('/')
                

            },
        }
    }
</script>

<style lang="scss" scoped>

</style>