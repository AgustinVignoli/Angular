function showData(){
	var preObject = localStorage.getItem('gameData');
	var gamedata  = JSON.parse(preObject);
	if( gamedata !== null ){
		var table     = $("#history-table");
		var tableTr   = $("#history-table table #history-table-tr");
		var closed    = true;

		var i = gamedata.length;
		while(i--){
			var newData = "<tr><td><span>" + gamedata[i].game + "</span></td><td><span>" + gamedata[i].name + "</span></td></tr>"; 		
			$(newData).insertAfter( tableTr );
		}

		$("#history-table").show();

		$("#history-table > #closer").click(function(){
			if( closed ){
				table.stop().animate({
					right: "0px"
				},400,function(){
					closed = false;
				});
			}else{
				table.stop().animate({
					right: "-300px"
				},400,function(){
					closed = true;
				});			
			}
		});
	}
};

function playMusic(){
	var play    = $("#play");
	var pause   = $("#pause");
	var music   = $("#music audio");
	var playing = true;

	pause.click(function(){
		if( playing ){
			music[0].pause();
			pause.css("display","none");
			play.css("display","block");
			playing = false;
		}			
	});

	play.click(function(){
		if( !playing ){
			music[0].play();
			play.css("display","none");
			pause.css("display","block");
			playing = true;
		}
	});
};

function clearHistory(){
	$("#clearH").click(function(e){
		e.preventDefault();
		localStorage.clear();
		$("#history-table").css("display","none");
	});
};

$(document).ready(function(){
	showData();
	playMusic();
	clearHistory();
});

$(window).load(function(){
	setTimeout(function(){
		$("#screen").fadeOut(1000,function(){
			$(this).remove();
		});
	},2000);
});