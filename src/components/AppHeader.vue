<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <span class="title">Nombre App</span>
      
      <ul v-show= "!mobile" class ="navigation">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li><router-link class="link" to="/LogIn">Login</router-link></li>
        <li><router-link class="link" to="/LogIn">Categorias</router-link></li>
        <li><router-link class="link" to="/LogIn">Certificados</router-link></li>
        <li><router-link class="link" to="/LogIn">Marcas</router-link></li>
        <li><router-link class="link" to="/LogIn">Novedades</router-link></li>
      </ul>
      <div class= "icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show= "mobileNav" class ="dropdown-nav">
          <li><router-link class="link" to="/">Home</router-link></li>
          <li><router-link class="link" to="/LogIn">Login</router-link></li>
          <li><router-link class="link" to="/LogIn">Categorias</router-link></li>
          <li><router-link class="link" to="/LogIn">Certificados</router-link></li>
          <li><router-link class="link" to="/LogIn">Marcas</router-link></li>
          <li><router-link class="link" to="/LogIn">Novedades</router-link></li>
        </ul>
      </transition>
      <div>
        <ul>
          <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
        <b-nav pills>
        <b-nav-item-dropdown id="my-nav-dropdown" text="Dropdown" toggle-class="nav-link-custom" right>
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        
      
        <router-link class="link" to="/LogIn">
          <button class="btn btn-outline-success btn-lg my-3 my-sm-2" type="submit">Log In</button>
        </router-link>
        <router-link class="link" to="/SignUp"> 
      
        <button class="btn btn-outline-success btn-lg my-3 my-sm-2" type="submit">Sign Up</button>
        </router-link>
       </b-nav>
       </ul>
      </div>
      
    </nav>
    
  </header>
</template>

<script>
import { getAuth,onAuthStateChanged,signOut,} from "firebase/auth";
export default {
  name: 'app-header',
  data: function() {
    return{
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,

    };
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav(){
      this.mobileNav= !this.mobileNav;
    },
    updateScroll(){
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
      }).catch((error) => {
        console.log(error);
      });
    },
    created() {
      const auth = getAuth();
      onAuthStateChanged(auth)
      .then((user) => {
        if(user){
        this.user = user;
        }else {
          this.user = null;
        }
      })
      .catch((error) =>{
          console.log(error);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
  

  .title {
      align-self: center;
      color: #eceff1;
      font-size: 1.2rem;  
      font-weight: bold;
      margin-right: 1rem;
    }

    
    .btn-header {
    background-color: #455A64;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
      0 2px 5px 0 rgba(49, 49, 93, .1),
      0 1px 2px 0 rgba(0, 0, 0,.08);
    color: #B0BEC5;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0 0.5rem
  }

  nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
    max-width: 1140px;
    }
    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }
    .branding {
      display: flex;
      align-items: center;

      img{
        width: 50px;
        transition: 0.5s ease all;
      }

    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.08s ease all;
      }

    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav{
      display: flex;
      align-items: column;
      position: fixed;
      widows: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #f8f;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
        .link{
          color: #000;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }

}

.scrolled-nav{
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img{
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}

</style>