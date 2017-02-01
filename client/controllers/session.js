console.log('Sessions controller begins');

var app = angular.module('app');

app.controller('sessionController',
  ['sessionFactory',
    function(sessionFactory){
      var self = this;
      sessionFactory.checkSess(function(data){
        self.session_user=data
      })
      self.logReg=function(){
        if(!self.newUser||self.newUser.name.length<3){
          self.error="Please Enter a name greater than 3 characters";
        }
        else{
        sessionFactory.logReg(self.newUser,function(data){
          self.error = data;
          console.log(self.error);
        });
       }
      }
    }
  ]
)
