<template >
<div class="container">
  <div class="card bg-light">
    <article class="card-body mx-auto" style="max-width: 400px;">

      <form>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fas fa-user"></i> </span>
          </div>
          <input name="name" class="form-control" v-model="username" placeholder="enter username" type="text" required>
        </div>

        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
          </div>
          <input name="Email" class="form-control" v-model="email" placeholder="Email address" type="email" required>
        </div>

        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fas fa-phone"></i> </span>
          </div>
          <input name="phone" class="form-control" v-model="phone" placeholder="phone" type="email" required>
        </div>
        <!-- form-group// -->


        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
          </div>
          <input name="password" class="form-control" v-model="password" placeholder="password" type="password" required>
        </div>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
          </div>
          <input name="confpassword" class="form-control" v-model="confpassword" placeholder="confirm-password" type="password" required>
        </div>
        <!-- form-group// -->

        <div class="form-group">
          <button type="submit" v-on:click="register" name="regsiter_user" class="btn btn-primary btn-block">Sign Up</button>
        </div>
        <!-- form-group// -->
        <p class="text-center">already have account? <a href="register.php">login</a> </p>
      </form>


    </article>
  </div>
  <!-- card.// -->

</div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      phone: '',
      password: '',
      confpassword: ''




    }
  },
  methods: {
    register: function() {

    }



  }
}
</script>

<style lang="css">
</style>
