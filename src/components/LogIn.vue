<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3">Iniciar sesion</h3><hr>
        <form action="#" @submit.prevent="login">    

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email"  v-model="email">
            </div>
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input class="input" type="password" v-model="password">
            </div>
          </div>

          <button type="submit" class="button is-primary">Iniciar sesion</button>
        </form>

        <div class="notification is-danger mt-10" v-if="error">          
          {{ error }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from '@/router/index'
export default {
  data () {
    return {     
      email: '',
      password: '',
      error: ''
    }
  },
  name: 'aaAA',
  methods: {
    login() {
      //console.log(this.user);
                //console.log(this.password);

				const auth = getAuth();
				signInWithEmailAndPassword(auth, this.email, this.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user)
					router.push('/')
					// ...
				})
				.catch((err) => {
					//const errorCode = error.code;
					//const errorMessage = error.message;
					this.err = err.code;
				});
            }
        
  }
}
</script>
