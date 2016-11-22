app.controller('bucketController',function($scope,bucketFactory,sessionFactory,$routeParams,$location,$route){
  $scope.bucketitem=[];
  sessionFactory.checkSess(function(data){
    $scope.session_user=data
  })
  $scope.add=function(){

    if(!$scope.newbucket||$scope.newbucket.title===undefined ||$scope.newbucket.description===undefined||$scope.newbucket.title.length<5 || $scope.newbucket.description.length<10){
      $scope.error="something went wrong";
    }
    else{

    bucketFactory.add($scope.newbucket,function(data){
      $scope.bucket=data;
      $scope.newbucket={};
      $route.reload();
    })
  }
  }
  bucketFactory.index(function(data){
    $scope.users=data;
  })
  bucketFactory.index2(function(data){
    $scope.buckets=data;
  })
  if($routeParams.id){
    console.log($routeParams.id);
    bucketFactory.show($routeParams.id,function(data){
    $scope.bucketusers=data
  })
}
$scope.check = function(id){
        var data = {bucket_id: id};
        bucketFactory.checked(data);
          $location.url('dashboard')
    }
})
