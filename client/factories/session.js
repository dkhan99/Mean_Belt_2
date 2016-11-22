app.factory('sessionFactory',function($http,$location){
  var factory={};
  factory.checkSess=function(cb){
    $http.get('/user/checksess').success(function(data){
    if(!data){
      $location.url('/logreg')
    }
    else{
      cb(data);
    }
    })
  }
  factory.logReg=function(user,cb){
    $http.post('/user/login' ,user).success(function(data){
      if(data.errors){
        // console.log(data.errors.name.message);
        cb(data.errors.name.message);
      }
      if(data.status==true){
        $location.url('/dashboard');
      }
      else{
        $location.url('/logreg');
      }
    })
  }

  return factory;
})
