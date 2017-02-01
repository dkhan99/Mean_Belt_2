var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/logreg',{
    templateUrl:'partials/logreg.html'
  })
  .when('/dashboard',{
    templateUrl:'partials/dashboard.html'
  })
  .when('/dashboard/:id/user',{
    templateUrl:'partials/user.html'
  })
  .otherwise({
    redirectTo:'/logreg'
  })
})
