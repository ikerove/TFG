import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueStars } from "vue-stars"


//import VueAxios from 'vue-axios'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min";
//import 'node_modules/bulma/bulma.css';




//import { Axios } from 'axios'
// .use(VueAxios, Axios)
createApp(App).component("vue-stars", VueStars).use(router).mount('#app')

