<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Home
      </router-link>

      <router-link class="navbar-item" to="/">
        Documentation
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
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