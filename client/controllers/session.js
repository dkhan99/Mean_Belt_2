app.controller('sessionController',function($scope,sessionFactory){
  sessionFactory.checkSess(function(data){
    $scope.session_user=data
  })
  $scope.logReg=function(){
    if(!$scope.newUser||$scope.newUser.name.length<3){
      $scope.error="something went wrong";
    }
    else{
    sessionFactory.logReg($scope.newUser,function(data){
      $scope.error=data;
      console.log($scope.error);
    });
  }
  }
})
