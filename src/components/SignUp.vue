<template>


<div class="container" id="wrap">
	<div class="row">
        <div class="col-md-6 col-md-offset-3">
            <form action="r" method="post" accept-charset="utf-8" class="form" role="form" @submit.prevent = "signup(this.email, this.password)">  <legend>Sign Up</legend>
                
                  
                <div class="row">
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="firstname"  class="form-control input-lg" placeholder="First Name" v-model="name" />                        
                    </div>
                    <div class="col-xs-6 col-md-6">
                        <input type="text" name="lastname" class="form-control input-lg" placeholder="Last Name" v-model="lastName" />                        
                    </div>
                </div>
                <input type="text" name="email"  class="form-control input-lg" placeholder="Your Email" v-model="email" />
                <input type="password" name="password"  class="form-control input-lg" placeholder="Password" v-model="password" />
                <input type="password" name="confirm_password"  class="form-control input-lg" placeholder="Confirm Password"  />                    
                                   
                

                <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                    Create my account
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
#wrap{
background-image: -ms-linear-gradient(top, #FFFFFF 0%, #D3D8E8 100%);
/* Mozilla Firefox */ 
background-image: -moz-linear-gradient(top, #FFFFFF 0%, #D3D8E8 100%);
/* Opera */ 
background-image: -o-linear-gradient(top, #FFFFFF 0%, #D3D8E8 100%);
/* Webkit (Safari/Chrome 10) */ 
background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #FFFFFF), color-stop(1, #D3D8E8));
/* Webkit (Chrome 11+) */ 
background-image: -webkit-linear-gradient(top, #FFFFFF 0%, #D3D8E8 100%);
/* W3C Markup, IE10 Release Preview */ 
background-image: linear-gradient(to bottom, #FFFFFF 0%, #D3D8E8 100%);
background-repeat: no-repeat;
background-attachment: fixed;
}
legend{
	color:#141823;
	font-size:25px;
	font-weight:bold;
}
.signup-btn {
  background: #79bc64;
  background-image: -webkit-linear-gradient(top, #79bc64, #578843);
  background-image: -moz-linear-gradient(top, #79bc64, #578843);
  background-image: -ms-linear-gradient(top, #79bc64, #578843);
  background-image: -o-linear-gradient(top, #79bc64, #578843);
  background-image: linear-gradient(to bottom, #79bc64, #578843);
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  text-shadow: 0px 1px 0px #898a88;
  -webkit-box-shadow: 0px 0px 0px #a4e388;
  -moz-box-shadow: 0px 0px 0px #a4e388;
  box-shadow: 0px 0px 0px #a4e388;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: solid #3b6e22  1px;
  text-decoration: none;
}

.signup-btn:hover {
  background: #79bc64;
  background-image: -webkit-linear-gradient(top, #79bc64, #5e7056);
  background-image: -moz-linear-gradient(top, #79bc64, #5e7056);
  background-image: -ms-linear-gradient(top, #79bc64, #5e7056);
  background-image: -o-linear-gradient(top, #79bc64, #5e7056);
  background-image: linear-gradient(to bottom, #79bc64, #5e7056);
  text-decoration: none;
}
.navbar-default .navbar-brand{
		color:#fff;
		font-size:30px;
		font-weight:bold;
	}
.form .form-control { margin-bottom: 10px; }
@media (min-width:768px) {
	#home{
		margin-top:50px;
	}
	#home .slogan{
		color: #0e385f;
		line-height: 29px;
		font-weight:bold;
	}
}
</style>