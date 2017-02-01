console.log('bucketController begins');

var app = angular.module('app');
app.controller('bucketController',
  [
    'bucketFactory','sessionFactory', '$routeParams','$location','$route',
    
    function(bucketFactory,sessionFactory,$routeParams,$location,$route){
      var self = this;
      var bucketitem = [];

      sessionFactory.checkSess(function(data){
        self.session_user = data
        console.log(self.session_user)

      })
      


      self.index = function(){
        bucketFactory.index(function(data){
          self.users = data;
          console.log(self)
          console.log('Buckets from the index function', self.buckets)
        })
        
        bucketFactory.index2(function(data){
          self.buckets=data;
          console.log('Buckets from the index 2 function', self.buckets)
        })
      };
      
      
      self.index()
      


      self.add = function(){

        if(!self.newbucket||self.newbucket.title===undefined ||self.newbucket.description===undefined||self.newbucket.title.length<5 || self.newbucket.description.length<10){
          self.error="Please enter a Title greater than 5 chars and a Description greater than 10 chars";
        }
        else{

          bucketFactory.add(self.newbucket,function(data){
            self.bucket=data;
            self.newbucket={};
            $route.reload();
          })
        }
      }
      
      
      
      if($routeParams.id){
        console.log($routeParams.id);
        bucketFactory.show($routeParams.id,function(data){
        self.bucketusers=data
      })
    }
    self.check = function(id){
            var data = {bucket_id: id};
            bucketFactory.checked(data);
            
    }
  }
 ]
)
