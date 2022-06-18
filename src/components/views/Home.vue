<template>
  <!--<body class = "panel">-->
    
    <!--<div class = "boards-collection">-->
      <!--<input
        type = "text"
        placeholder = "Añde un nuevo panel"
        v-model = "boardName"
        @keyup.enter = "add()"
        />-->
      <!--<board-card
        v-for="(board, index) in boards"
        :key = "index"
        :name = "board.name"
        :id = "board.id">
      </board-card>-->
   <!-- </div>-->
   <div class= "title">
     <h3>Ultimos añadidos</h3>
      <div class="container my-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col"
                   v-for="(item, index) in productos" :key="index" :nombre="item.nombre" :id="item.id">
                    <div class="card">
                      <!--<router-link class= "link" to= "/board/:id">-->
                        <router-link :to="{ name: 'board-card', params: { id: item.id } } ">
                        <img :src= "item.foto" width="500" height="10">
                        </router-link>
                      <!--</router-link>-->
                        
                      <div class="card-body">
                          <h5 class="card-title text-center"> {{item.nombre}}</h5>
                          <!--<h5 class="card-title text-center"> {{item.id}}</h5>-->
                          <!--<p class="card-text text-center"> {{item.correo}}</p>-->
                          <!--Este es importante<button @click.prevent="muestraProducto(item.id)"> ver producto</button>-->
                          <!--<router-link to="/Pantalones/Pantalon1">
                            <button > ver producto</button>
                          </router-link>-->
                      </div>
                    </div>
                  
                </div>
            </div>
      </div>
    </div>
  <!--<app-footer></app-footer>-->
  <!--</body>-->
</template>

<script>
//import BoardCard from '@/components/BoardCard'
//import AppFooter from '@/components/AppFooter'
import { collection, getDocs, getDoc, doc} from 'firebase/firestore/lite';
import { db } from "@/api/firebase";
export default {
  name: 'home-view',
  //components: {AppFooter},
  
  data: function () {
    return {
      //boardName: '',
      //boards: [
      //  { id: 1, name: 'Componente 1'}, 
      //  { id: 2, name: 'Componente 2'}  
      //]
      productos: [],
          producto: {
            nombre: '',
            //correo: '',
            foto: ''
          }
    }
  },
  methods: {
      //  add: function (){
      //    this.boards.push({name: this.boardName})
      //  }
      async obtenerDatos () { 
      const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
        let producto = doc.data()
        producto.id = doc.id
        this.productos.push(producto)
        console.log(producto)
      });
    },
    async muestraProducto(id) {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            this.producto = docSnap.data()
            this.producto.id = docSnap.id

            console.log(this.producto.id)
            console.log(this.producto.nombre)
            console.log(this.producto.marca)
            console.log(this.producto.categoria)
            console.log(this.producto.link)
            console.log(this.producto.materiales)
            } 
            else {
            console.log("¡No existe el documento!");
            }

    }
  },

  props: {
    item: Object
  },


  mounted() {
    this.obtenerDatos();
  }

}
</script>

<style lang="scss" scoped>
//        h3 {
//            text-align: left;
//            margin: 1.5rem;
//        }
//
//        .mt-50 {
//              margin-top: 100px;
//            }
//
//
//          .boards-collection {
//            position: fixed;
//            display: flex;
//            flex-direction: row;
//            flex-wrap: Wrap;
//            justify-content: center;
//            padding-top: 1rem;
//          }
//
//          input {
//            box-sizing: border-box;
//            background-color: #546E7A;
//            border: 2px solid D#546E7A;
//            border-radius: 3px;
//            font-size: 1.1rem;
//            outline: e;
//            padding: 0.5rem;
//            transition: all 600ms ease;
//
//            &:focus,
//            &:active {
//              background-color: white;
//              color: #546E7A;
//            }
//            &::placeholder {
//              color: white;
//            }
//          }

    
</style>