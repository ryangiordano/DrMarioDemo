var app = angular.module("DoctorMario",['ngRoute']);
app.filter('ordinal',function(){
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    }else{
      var lastDigit = number % 10;
      if(lastDigit ===1){
        return number + 'st';
      }else if(lastDigit ===2){
        return number + 'nd';
      }else if(lastDigit ===3){
        return number + 'rd';
      }else{
        return number + 'th';

      }
    }
  }
});
app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/home',{
    templateUrl: 'templates/index.html'
  })
  .when('/pills',{
    templateUrl: 'templates/pills.html',
    controller: 'pillsController'
  })
  .when('/virus',{
    templateUrl: 'templates/virus.html'
  })
  .otherwise({
    redirectTo: '/home'
  });
});
