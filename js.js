$(document).ready(function(){

	var gridCol = 16;

	var createGrid = function(){
		for (var j = 1 ; j < (gridCol+1) ; j++){
				for ( var i = 1 ; i < (gridCol+1) ; i++ ){
				$('#container').append("<div class='grid'></div>");
				$('.grid').width(500/gridCol + "px");
				$('.grid').height(500/gridCol + "px");
				};
			$('#container').append("<BR />");
		};
	};

	createGrid(gridCol);
	
	$('.eraser').click(function(){
		$('.grid').css({'background-color': '#989898', 'opacity': '1'});
	}); 

	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

	$('.grid').hover(function(){
		$(this).css({'background-color': getRandomColor()})
	})

});

