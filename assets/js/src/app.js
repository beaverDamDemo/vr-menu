$(document).ready( function() {


	$('.cbtn').on('click', function(event) {
		event.stopPropagation();
		var _id = $(this).attr('id');
		updateVal(_id);
	});

	$('.cbtn').on('mousedown', function(e) {
		console.warn(' click touchend');
		var _id = $(this).attr('id');
		// var ourInterval = setInterval( function() {
		// 	updateVal(_id);
		// }, 200);
		updateVal(_id);
	});

	function updateVal(n) {
		var _id = n.slice(-1);
		var _dir = n.slice(-3, -2);
		var _currVal = $('#val_'+_id).text(); 
		if( _dir == 'l') {
			if( _currVal > 0)
			_currVal--;	
		} else {
			if( _currVal < 100 )
			_currVal++;
		}
		
		$('#val_'+_id).text(_currVal);
	}

});

                 // <div class="el"><p>Rebound</p></div>
                 //  <div class="cbtn btn--left" id='cbtn_l_2'></div>
                 //  <p class="valLeft__val" id='val_2'>40</p>
                 //  <div class="cbtn btn--right" id='cbtn_r_2'></div>