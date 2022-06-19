<template>


<div class="container" id="wrap">
	<div class="row">
        <div class="col-md-6 col-md-offset-3">
            <form action="r" method="post" accept-charset="utf-8" class="form" role="form" @submit.prevent = "signup(this.email, this.password)">  <h3 class="title is-3">Registrarse</h3><hr>
                
                  
                <div class="row">
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="firstname"  class="form-control input-lg" placeholder="Nombre" v-model="name" />                        
                    </div>
                    <br>
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="lastname" class="form-control input-lg" placeholder="Apellido" v-model="lastName" />                        
                    </div>
                </div>
                
                <!--<input type="text" name="nif"  class="form-control input-lg" placeholder="NIF" v-model="nif" />-->
                <br>
                <input type="text" name="email"  class="form-control input-lg" placeholder="Email" v-model="email" />
                <br>
                <input type="password" name="password"  class="form-control input-lg" placeholder="Contraseña" v-model="password" />
                <br>
                <input type="password" name="confirm_password"  class="form-control input-lg" placeholder="Confirma la contraseña"  />                    
                <br>                 
                

                <button class="button is-primary" type="submit">
                    Crear cuenta
                </button>
            </form>     
            <div class="alert alert-danger" role="alert" v-if = "error">
                {{error}}
            </div>     
        </div>
    </div>            
</div>

</template>

<script>
    import '@/api/firebase'
    //import firebase from 'firebase/compat/app';
    import "firebase/auth";
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    
    export default {
        name: 'SignUp',
        data: function(){
            return{
                name: '',
                lastName: '',
                email: '',
                password: '',
                error: ''
            }
        },
        methods:{
            signup() {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(user => {
                    //actualizar el usuario
                    if(user) {
                        user.updateProfile({
                            displayname: this.name
                        }).then((u)=> {
                            this.name = ''
                            this.email = ''
                            this.password = ''
                            this.$router.push({name: 'home'})
                            console.log(u) 
                            
                        }).catch((err)=> {
                            this.error = err.message
                        })

                    }
                    
                })
                .catch((err) => {
                    //const errorCode = error.code;
                    this.err = err.code;
                    //const errorMessage = error.message;
                    
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>