<template>
 <!-- <router-link class="board-card" :to="{ name: 'board', params: { nombre, id } }">-->
      <!--<span class="board-card-title">❏ {{ name }}</span>-->
       
 <!-- </router-link>-->
 <div class= "carta2">
 <board-view-cert :item="item"/>
 </div>
 
</template>

<script>
//import Board from '@/components/Board'

export default {
  name: 'board-card-cert',
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
  //.board-card {
  //  background-color: #546E7A;
  //  box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
  //    0 2px 5px 0 rgba(49,49,93,.1),
  //    0 1px 2px 0 rgba(0,0,0,.08);
  //  box-sizing: border-box;
  //  border-radius: 5px;
  //  color: #fafafa;
  //  margin: 0.5rem 1.5rem;
  //  padding: 1rem;
  //  text-align: left;
  //  text-decoration: none;
  //  transition: all 600ms ease;
  //  width: 100%;
  //  height: 100px;
  //  &-title {
  //    font-size: 1.2rem;
  //  }
  //  &:hover {
  //    background-color: #90a4ae;
  //    font-weight: bold;
  //  }
  //  @media screen and (min-width: 600px) {
  //    width: 33%;
  //  }
  //  @media screen and (min-width: 1024px) {
  //    width: 250px;
  //  }
  //}
</style>