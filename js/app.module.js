(function(){
	"use strict";

	angular.module('game', ['ngRoute'])

	.config(function($routeProvider) {
	  $routeProvider
	    .when('/', {
	      controller:'PlayCtrl',
	      templateUrl:'/Entrega/views/selectPlayer.html'
	    })	  
	    .when('/start', {
	      controller:'PlayCtrl',
	      templateUrl:'/Entrega/views/playboard1.html'
	    })
	    .when('/player2', {
	      controller:'PlayCtrl',
	      templateUrl:'/Entrega/views/playboard2.html'
	    })
	    .when('/result', {
	      controller:'PlayCtrl',
	      templateUrl:'/Entrega/views/result.html'
	    })
	    .when('/again', {
	      controller:'PlayCtrl',
	      templateUrl:'/Entrega/views/playboard1.html'
	    })	    		    	    
        .otherwise({
            redirectTo: '/'
        });	    
	});
})();
