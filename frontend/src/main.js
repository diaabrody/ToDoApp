// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Auth from './packages/auth/Auth.js'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Auth)

/* eslint-disable no-new */

Router.beforeEach(function (to, from, next){
  if(to.matched.some(record=>record.meta.forvisitors)){
    if(Vue.auth.isAuth()){

      next({
        path:'/tasks'
      });
    }
    else {
      next();
    }


  }

  else if(to.matched.some(record=>record.meta.forAuth)){
    if(!Vue.auth.isAuth()){
      next({
        path:'/login'
      });

    }
    else
    {
      next();
    }

  }

  else {
    next();
  }


});
new Vue({
  el: '#app',
  components: { App },
  router:Router ,
  template: '<App/>'
})
