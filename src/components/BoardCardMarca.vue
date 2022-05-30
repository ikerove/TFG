<template>
 <!-- <router-link class="board-card" :to="{ name: 'board', params: { nombre, id } }">-->
      <!--<span class="board-card-title">❏ {{ name }}</span>-->
       
 <!-- </router-link>-->
 <div class= "carta">
 <board-view :item="item"/>
 </div>
 
</template>

<script>
import BoardMarca from '@/components/BoardMarca'

export default {
  name: 'board-card-marca',
  props: {//["id"],
    //id: String,
    //name: String
    //nombre: String,
    //foto: String,
    //id: String
    id: String
    
  },
  components: {
    BoardMarca
  },

  data(){
    return{
      item: null,
    };
    
  },


  
  
}
</script>

<style lang="scss" scoped>
  
</style>