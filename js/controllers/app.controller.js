(function() {
    'use strict';
	
	var module = angular.module('game');
	
	module.controller('PlayCtrl', ['$location', function($location){
		var vm = this;

		vm.$location = $location;
		vm.players   = players;
		vm.rounds    = rounds;
		vm.games     = games;
		vm.winners   = winners;
		vm.won       = won;
		vm.battle    = function(){

			var p1      = players[0];
			var p2      = players[1];  
			var p1Chose = p1.chose;
			var p2Chose = p2.chose;

			if (p1Chose == p2Chose){ 
				won = {name: "Tie"};
			}else if ((p1Chose == "Rock" && p2Chose == "Scissors") || (p1Chose == "Paper" && p2Chose == "Rock") || (p1Chose == "Scissors" && p2Chose == "Paper")){
				p1.wins++;
				won = p1;
				p1.currentWinner = true;
			}else{
				p2.wins++;
				won = p2;
				p2.currentWinner = true;
			}

			rounds++;
			winners.push({ name: won.name , round: rounds -1, score: won.wins});

			p1.currentWinner = false;
			p2.currentWinner = false;

			if( won.wins === 3 ){
				games++;
				history.push({ name: won.name, game: games});
				storage(history);
			};

			$location.path( "/result" );
			
		}	
			
			function storage(history){
				if(typeof(Storage) != "undefined"){
					localStorage.setItem("gameData", JSON.stringify(history) )
				} 
			};				
	}]);

	/*function PlayCtrl($location){
		var vm = this;

		vm.$location = $location;
		vm.players   = players;
		vm.rounds    = rounds;
		vm.games     = games;
		vm.winners   = winners;
		vm.won       = won;
		vm.battle    = function(){

			var p1      = players[0];
			var p2      = players[1];  
			var p1Chose = p1.chose;
			var p2Chose = p2.chose;

			if (p1Chose == p2Chose){ 
				won = {name: "Tie"};
			}else if ((p1Chose == "Rock" && p2Chose == "Scissors") || (p1Chose == "Paper" && p2Chose == "Rock") || (p1Chose == "Scissors" && p2Chose == "Paper")){
				p1.wins++;
				won = p1;
				p1.currentWinner = true;
			}else{
				p2.wins++;
				won = p2;
				p2.currentWinner = true;
			}

			rounds++;
			winners.push({ name: won.name , round: rounds -1, score: won.wins});

			p1.currentWinner = false;
			p2.currentWinner = false;

			if( won.wins === 3 ){
				games++;
				history.push({ name: won.name, game: games});
				storage(history);
			};

			$location.path( "/result" );
		};	
	};

	function storage(history){
		if(typeof(Storage) != "undefined"){
			localStorage.setItem("gameData", JSON.stringify(history) )
		} 
	};*/	
})();