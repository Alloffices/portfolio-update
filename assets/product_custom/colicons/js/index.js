$(window).load(function(){

	/* ANIM HOME */

	$('#header-market-desktop').addClass('tr');

	$('#header-market-mobile').addClass('tr');

	$('#header-product').addClass('tr');

	$('#section-home .patch').addClass('anim');
	
	setTimeout(function() { 
		$('#section-home h1').addClass('anim');
	}, 250);

	setTimeout(function() { 
		$('#section-desc').addClass('show');

		$('#header-market-desktop').addClass('show');

		$('#header-market-mobile').addClass('show');

		$('#header-product').addClass('show');
	}, 1500);

	setTimeout(function() { 
		$('#header-market-desktop').removeClass('tr');

		$('#header-market-mobile').removeClass('tr');

		$('#header-product').removeClass('tr');
	}, 1750);
	setTimeout(function() { 
		$('body').removeClass('block');
	}, 2200);

	setTimeout(function() { 
		$('.section-desc_lpt_ipad .info').addClass('anim');
	}, 2000);



	/* END ANIM HOME */


	/* LIGHBTOX */

	$('.cdr.show').click(function(){
		$('body').addClass('block');
		$('#lightbox').addClass('show');
	})

	$('.section-categories_see_all').click(function(){
		$('body').addClass('block');
		$('#lightbox').addClass('show');
	})

	$('#lightbox #close-lightbox').click(function(){
		$('body').removeClass('block');
		$('#lightbox').removeClass('show');
	})

	/* END LIGHTBOX */


	/* WAYPOINT */

	var $head = $( '#container-general' );
	$( '.ha-waypoint' ).each( function(i) {
		var $el = $( this ),
			animClassDown = $el.data( 'animateDown' ),
			animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head.attr('class', ' ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head.attr('class', ' ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	/* END WAYPOINT */

})