<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <!--<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">-->
      <h3 class="title is-3">MyApp</h3>

    </router-link>

    <a role="button" class="navbar-burger" :class="{'is-active': isOpen}"  @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Home
      </router-link>

      <router-link class="navbar-item" to="/">
        Certificados
      </router-link>

      <router-link class="navbar-item" to="/">
        Categorias
      </router-link>

      <router-link class="navbar-item" to="/">
        Marcas
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable" v-if="user">
        <a class="navbar-link">
          Admin
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/AddProduct">
            Añadir Certificado
          </router-link>
          <a class="navbar-item">
            Añadir producto
          </a>
          <a class="navbar-item">
            Añadir marca
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Eliminar
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
          <template v-if="user">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        {{user.email}}
                    </a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/">
                            Main
                        </router-link>
                        <a class="navbar-item" @click.prevent="logout">
                            Log out
                        </a>
                        
                    </div>
                </div>
          </template> 
          <template v-else>
              <div class="buttons">
                <router-link class="button is-primary" to="/LogIn">
                     <strong>Log in</strong>
                </router-link>
                <router-link class="button is-light" to="/SignUp">
                     <strong>Sign Up</strong>
                </router-link>
              </div>
          </template>
        
      </div>
    </div>
  </div>
</nav>


</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
    export default {
        name: 'app-prueba',

        data() {
            return {
            user: null,
            isOpen: false,
            }
        },

        methods: {
            logout (){
               const auth = getAuth();
               signOut(auth).then(() => {
               // Sign-out successful.
               }).catch((error) => {
               // An error happened.
               this.error = error.code;  
               }); 
            },

            toggleMenu (){
                const status = !this.isOpen
                this.isOpen = status
            }
        },
        created(){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                //const uid = user.uid;
                this.user = user
                
            } else {
                // User is signed out
                this.user = null
            }
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>