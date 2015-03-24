(function(){
	"use strict";

	angular.module('game', ['ngRoute'])

	.config(function($routeProvider) {
	  $routeProvider
	    .when('/', {
	      controller:'PlayCtrl',
	      templateUrl:'views/selectPlayer.html'
	    })	  
	    .when('/start', {
	      controller:'PlayCtrl',
	      templateUrl:'views/playboard1.html'
	    })
	    .when('/player2', {
	      controller:'PlayCtrl',
	      templateUrl:'views/playboard2.html'
	    })
	    .when('/result', {
	      controller:'PlayCtrl',
	      templateUrl:'views/result.html'
	    })
	    .when('/again', {
	      controller:'PlayCtrl',
	      templateUrl:'views/playboard1.html'
	    })	    		    	    
        .otherwise({
            redirectTo: '/'
        });	    
	});
})();
