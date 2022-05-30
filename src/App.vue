<template>
    <div id="app">
      <!--<app-header></app-header>-->
      <prueba-a></prueba-a>
      <router-view class="container"></router-view>
      <!--<app-footer></app-footer>-->
    </div>
</template>

<script>

//import AppHeader from './components/AppHeader'
//import AppFooter from './components/AppFooter'
import PruebaA from './components/PruebaA'

export default {
  name: 'app',
  components: {
    //AppHeader,
    PruebaA,
    //AppFooter,
    
   
  }
}
</script>

<!-- scoped significa que este estilo es solo para esta pagina -->
<style lang="scss" scoped> 

@import "~bulma/css/bulma.css";
/*#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0 auto;
  padding: 0;
}

.container{
  padding-bottom: 4rem;
}*/
</style>
