/* LOADER */
var t;
var timer_is_on = 0;

function timedCount() {
    $('.loader').toggleClass('anim');
    t = setTimeout(function(){timedCount()}, 1000);
}

if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
}
/* END LOADER */

/* ON LOAD */
$(document).ready(function(){


	$('.container_form_load').fadeOut(400);

	$('.container_title_loader').addClass('transition');

	setTimeout(function() {
		$('.container_title_loader').addClass('anim');
	}, 200);
	setTimeout(function() {
		$('.loader').fadeOut(400);
	}, 400);

	setTimeout(function() {
		$('.cadre-bar_hide_bottom').removeClass('show');
	}, 900);
	setTimeout(function() {
		$('.cadre-bar_hide_right').removeClass('show');
	}, 900);
	setTimeout(function() {
		$('.cadre-bar_hide_top').removeClass('show');
	}, 900);
	setTimeout(function() {
		$('.cadre-bar_hide_left').removeClass('show');
	}, 900);


	setTimeout(function() {
		$('.home-container_mac').addClass('show');
	}, 1050);
	setTimeout(function() {
		$('.home-container_iphone').addClass('show');
	}, 1200);

	setTimeout(function() {
		$('.home-title_pr').addClass('show');
	}, 900);
	setTimeout(function() {
		$('.home-description_pr').addClass('show');
	}, 1000);

	setTimeout(function() {
		$('.home-link_live_preview').addClass('show');
	}, 1100);


/*
	$('body').click(function() {
		if ($('.container_general').hasClass('hide')) {

			$('.container_general').removeClass('hide');
			$('body').removeClass('block');
			$('.corner_box_menu').removeClass('show');
		};

	}) */


	/* SECTION TEXT */

	var $head1 = $( '#section_text' );
		$( '.ha-waypoint_1' ).each( function(i) {
			var $el1 = $( this ),
				animClassDown = $el1.data( 'animateDown' ),
				animClassUp = $el1.data( 'animateUp' );

			$el1.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head1.attr('class', 'section_text ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head1.attr('class', 'section_text ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END SECTION TEXT */

	/* SECTION FLEXIBLE */

	var $head2 = $( '#section_flexible' );
		$( '.ha-waypoint_2' ).each( function(i) {
			var $el2 = $( this ),
				animClassDown = $el2.data( 'animateDown' ),
				animClassUp = $el2.data( 'animateUp' );

			$el2.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head2.attr('class', 'section_flexible ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head2.attr('class', 'section_flexible ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END SECTION FLEXIBLE */

	/* SECTION FEATURES */

	var $head3 = $( '#section_features' );
		$( '.ha-waypoint_3' ).each( function(i) {
			var $el3 = $( this ),
				animClassDown = $el3.data( 'animateDown' ),
				animClassUp = $el3.data( 'animateUp' );

			$el3.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head3.attr('class', 'section_features ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head3.attr('class', 'section_features ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END SECTION FEATURES */

	/* SECTION BUY */

	var $head4 = $( '#section_buy' );
		$( '.ha-waypoint_4' ).each( function(i) {
			var $el4 = $( this ),
				animClassDown = $el4.data( 'animateDown' ),
				animClassUp = $el4.data( 'animateUp' );

			$el4.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head4.attr('class', 'section_buy ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head4.attr('class', 'section_buy ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END SECTION BUY */

	$('.sbuy-buy_button').click(function(){
		$(this).addClass('check');
		setTimeout(function() {
			$('.sbuy-buy_button').removeClass('check');
		}, 2000);
	})

})
/* END ON LOAD */
