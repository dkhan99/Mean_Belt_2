app.factory('bucketFactory',function($http,$route){
  var factory={};
    factory.index=function(cb){
      
      $http.get('/users').success(function(data){
        cb(data);
      })
    }
    factory.add=function(newbucket,cb){
      $http.post('/bucket/add',newbucket).success(function(data){
          cb(data)
      })
    }
    factory.index2=function(cb){

        $http.get('/buckets/all').success(function(data){
          cb(data);
        })
      }
    factory.show=function(id,cb){
      $http.get(`/show/${id}`).success(function(data){
        cb(data);
      })
    }
    factory.checked = function(bucket){
        $http.post('bucket/checked', bucket);
  }
  return factory;
})
