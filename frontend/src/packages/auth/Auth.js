export default function(Vue){

  Vue.auth={

    setToken(token,expire){
      localStorage.setItem('token',token);
      localStorage.setItem('expire',expire);

    } ,
    getToken() {
      var token = localStorage.getItem('token');
      var expire = localStorage.getItem('expire');
      if (!token || !expire)
        return null ;
      if(Date.now() > parseInt(expire))
      {
        this.destoryStorage() ;
        return null ;
      }
      else
      {
        return token ;
      }




    } ,

    isAuth() {
      if(this.getToken())
      {
        return true ;
      }
      else {
        return false;
      }


    }
    ,
    destoryStorage:()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('expire');
    }
  }
  Object.defineProperties(Vue.prototype , {
    $auth:{
      get:()=>{
        return   Vue.auth ;
      }

    }
  } )
}
