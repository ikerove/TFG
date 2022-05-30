<template>
 <!-- <router-link class="board-card" :to="{ name: 'board', params: { nombre, id } }">-->
      <!--<span class="board-card-title">❏ {{ name }}</span>-->
       
 <!-- </router-link>-->
 <div class= "carta3">
 <board-view-cat :item="item"/>
 </div>
 
</template>

<script>
//import Board from '@/components/Board'

export default {
  name: 'board-card-cat',
  props: {
    id: String
    
  },
  components: {
    BoardCert
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