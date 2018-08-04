<template>

  <div id="start">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">

  <Nav></Nav>
<router-view></router-view>
  </div>

</template>


<script>
import Nav from './components/Nav';
import Tasks from './components/Tasks';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

export default {
  name: 'App' ,
  components : {
     Tasks ,
    Nav ,
    Login ,
    Register


  }


}
</script>


<style>

</style>
