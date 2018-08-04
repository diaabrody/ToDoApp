<template>
  <div class="container">
  <div class="card bg-light">
  <article class="card-body mx-auto" style="max-width: 400px;">

  	<form >

      <div class="form-group input-group">
      	<div class="input-group-prepend">
  		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
  		 </div>
          <input name="Email" class="form-control" v-model="email" placeholder="Email address" type="email" required>
      </div> <!-- form-group// -->


      <div class="form-group input-group">
      	<div class="input-group-prepend">
  		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
  		</div>
          <input name="password" class="form-control" v-model="password" placeholder="password" type="password" required >
      </div> <!-- form-group// -->

      <div class="form-group">
          <button v-on:click="login" name="login_user" class="btn btn-primary btn-block"> Login  </button>
      </div> <!-- form-group// -->
      <p class="text-center">Do Not Have Account? <a href="register.php">Register</a> </p>
  </form>


  </article>
  </div> <!-- card.// -->

  </div>

</template>

<script>
export default {
  name : 'Login',
  data(){
    return{
      email: '' ,
      password : '' ,
    }
  } ,
  methods:{
    login:function(e){
      e.preventDefault();
      var data = {
        client_id : 2 ,
        client_secret : 'o0jvIGR1m3f1AqrUWcwxu3QwJdsQCDo7LmjQUVc9' ,
        grant_type: 'password',
        username:this.email ,
        password:this.password

      }
      this.$http.post("http://127.0.0.1:8000/oauth/token" , data).then(response=>{
        this.$auth.setToken(response.body.access_token , response.body.expires_in + Date.now());
        this.$router.push('/tasks'); // nav to task
      });
    }


  }
}
</script>

<style lang="css">

</style>
