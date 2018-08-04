import Vue from 'vue' ;
import VueRouter from 'vue-router' ;
import Tasks from '../components/Tasks';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

Vue.use(VueRouter);

const router = new VueRouter({

  routes:[
    {
      path : '/tasks' ,
      component:Tasks ,
      meta:{
        forAuth:true
      }

    } ,

    {
      path : '/login' ,
      component:Login ,
      meta:{
        forvisitors:true
      }
    } ,

    {
      path : '/register' ,
      component:Register ,
      meta:{
        forvisitors:true
      }
    }


  ]

});

export default router ;
