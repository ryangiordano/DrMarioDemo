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
app.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl: 'templates/index.html'
    //Just the title
  })
  .when('/pills',{
    templateUrl: 'templates/pills.html',
    controller: 'pillsController'
  })
  .when('/virus',{
    templateUrl: 'templates/virus.html'
  })
  .when('/index1',{
    templateUrl: 'templates/index1.html'
    //Title with Viruses
  })
  .when('/index2',{
    templateUrl: 'templates/index2.html'
      //Title with Viruses and pills, discussing filters.
  })
  .when('/index3',{
    templateUrl: 'templates/index3.html'
      //Routing.
  })
  .when('/index4',{
    templateUrl: 'templates/index4.html'
      //Rating, discussing two-way-data-binding.
  })
  .when('/reviews',{
    templateUrl: 'templates/reviews.html'
      //Rating, discussing two-way-data-binding.
  })
  .otherwise({
    redirectTo: '/home'
  });
});

var menuToggle = function(){
	var menuOver = document.getElementById("menu-over");
	var menuIcon = document.getElementById("menu-icon");
	if(menuOver.style.display=="none"){
	TweenMax.to(menuOver, .2, {display:"block",opacity:1, ease:Power2.easeOut});
  TweenMax.to(menuIcon, .2, {rotation: "+=90", ease:Power2.easeOut});

   menuIcon.src = "/img/menux.svg";

	}else{
		TweenMax.to(menuOver, .2, {display:"none",opacity:0, ease:Power2.easeOut});
    TweenMax.to(menuIcon, .2, {rotation: "-=90", ease:Power2.easeOut});
     menuIcon.src = "/img/menu.svg";
	}

};
