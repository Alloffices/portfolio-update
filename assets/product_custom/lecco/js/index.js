$(window).load(function(){


	/* LOADER */

	setTimeout(function() {
		$('.loader_container_rd').addClass('active');
	}, 1000);
	setTimeout(function() {
		$('.loader_rd')
			.addClass('active');
	}, 1500);
	setTimeout(function() {
		$('.loader').fadeOut(400);
	}, 1550);

	setTimeout(function() {
		$('body').removeClass('block');
	}, 1550);

	setTimeout(function() {
		$('.section-home_title').addClass('active');
	}, 2000);
	setTimeout(function() {
		$('.section-home_subtitle').addClass('show');
	}, 2200);
	setTimeout(function() {
		$('.section-home_link').addClass('show');
	}, 2350);


	setTimeout(function() {
		$('.nav_section').addClass('show');
	}, 2400);



	setTimeout(function() {
		$('.section-home_video').addClass('show');
	}, 2500);
	/*
	setTimeout(function() {
		$('.section-home_gradient').addClass('show');
	}, 2500);
	setTimeout(function() {
		$('.section-home_live_version').addClass('show');
	}, 2500);
	setTimeout(function() {
		$('.section-home_text').addClass('show');
	}, 2500);

	*/


	/* END LOADER */

	$('body').click(function() {
			if ($('.container_g').hasClass('hide')) {

				$('.container_g').removeClass('hide');
				$('body').removeClass('block');
			};

	})


	/* NAV */

	var $head1 = $( '#nav_section' );
		$( '.ha-waypoint_1' ).each( function(i) {
			var $el1 = $( this ),
				animClassDown = $el1.data( 'animateDown' ),
				animClassUp = $el1.data( 'animateUp' );

			$el1.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head1.attr('class', 'nav_section ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head1.attr('class', 'nav_section ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END NAV */


	/* SECTION HOME */

	var $head3 = $( '#section-home_text' );
		$( '.ha-waypoint_3' ).each( function(i) {
			var $el3 = $( this ),
				animClassDown = $el3.data( 'animateDown' ),
				animClassUp = $el3.data( 'animateUp' );

			$el3.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head3.attr('class', 'section-home_text ' + 'show ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head3.attr('class', 'section-home_text ' + 'show ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END SECTION HOME */



	/* ICS NAV */

	$('.section_ics_nav_bottom').unbind('click').bind('click',function() {

		$('.section-ics_container_img_text_content .word .word_1.show').removeClass('show').addClass('hide_top').next().removeClass('hide_bottom').addClass('show');
		$('.section-ics_container_img_text_content .word .word_2.show').removeClass('show').addClass('hide_top').next().removeClass('hide_bottom').addClass('show');
		$('.section-ics_container_img_text_content .word .word_3.show').removeClass('show').addClass('hide_top').next().removeClass('hide_bottom').addClass('show');

		$('.section-ics_img.show').removeClass('show').addClass('hide_top').next().removeClass('hide_bottom').addClass('show');

		$('.section-ics_screen_content img.show').removeClass('show').addClass('hide_top').next().removeClass('hide_bottom').addClass('show');

		$('.section-ics_number_nav_el.active').removeClass('active').next().addClass('active');

		$('.section-ics_text_title_content.show').removeClass('show').next().addClass('show');

		$('.section-ics_text_description_content.show').removeClass('show').next().addClass('show');


		if ($('.section-ics_img.first').hasClass('show')) {
			$('.section_ics_nav_top').fadeOut(0);
		}else{
			$('.section_ics_nav_top').fadeIn(0);
		}

		if ($('.section-ics_img.last').hasClass('show')) {
			$('.section_ics_nav_bottom').fadeOut(0);
		}else{
			$('.section_ics_nav_bottom').fadeIn(0);
		}
	})
	$('.section_ics_nav_top').unbind('click').bind('click',function() {
		$('.section-ics_container_img_text_content .word .word_1.show').removeClass('show').addClass('hide_bottom').prev().removeClass('hide_top').addClass('show');
		$('.section-ics_container_img_text_content .word .word_2.show').removeClass('show').addClass('hide_bottom').prev().removeClass('hide_top').addClass('show');
		$('.section-ics_container_img_text_content .word .word_3.show').removeClass('show').addClass('hide_bottom').prev().removeClass('hide_top').addClass('show');

		$('.section-ics_img.show').removeClass('show').addClass('hide_bottom').prev().removeClass('hide_top').addClass('show');

		$('.section-ics_screen_content img.show').removeClass('show').addClass('hide_bottom').prev().removeClass('hide_top').addClass('show');

		$('.section-ics_number_nav_el.active').removeClass('active').prev().addClass('active');

		$('.section-ics_text_title_content.show').removeClass('show').prev().addClass('show');

		$('.section-ics_text_description_content.show').removeClass('show').prev().addClass('show');


		if ($('.section-ics_img.first').hasClass('show')) {
			$('.section_ics_nav_top').fadeOut(0);
		}else{
			$('.section_ics_nav_top').fadeIn(0);
		}

		if ($('.section-ics_img.last').hasClass('show')) {
			$('.section_ics_nav_bottom').fadeOut(0);
		}else{
			$('.section_ics_nav_bottom').fadeIn(0);
		}
	})

	/* END ICS NAV */



	/* SECTION MFEATURES */

	var $head2 = $( '#section_mfeatures' );
		$( '.ha-waypoint_2' ).each( function(i) {
			var $el2 = $( this ),
				animClassDown = $el2.data( 'animateDown' ),
				animClassUp = $el2.data( 'animateUp' );

			$el2.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head2.attr('class', 'section_mfeatures ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head2.attr('class', 'section_mfeatures ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END SECTION MFEATURES */



	/* SECTION BUY IT */

	var $head4 = $( '#section-buy-it_content' );
		$( '.ha-waypoint_4' ).each( function(i) {
			var $el4 = $( this ),
				animClassDown = $el4.data( 'animateDown' ),
				animClassUp = $el4.data( 'animateUp' );

			$el4.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head4.attr('class', 'section-buy-it_content ' + 'show ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head4.attr('class', 'section-buy-it_content ' + 'show ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	/* END SECTION BUY IT */

	$('.section-powerfull_start').click(function(){
		$(this).addClass('check');
		setTimeout(function() {
			$('.section-powerfull_start').removeClass('check');
		}, 2000);
	})

	$('.section-buy-it_content_start').click(function(){
		$(this).addClass('check');
		setTimeout(function() {
			$('.section-buy-it_content_start').removeClass('check');
		}, 2000);
	})


	/* FAQ */

	$('.lb-faq_el').click(function() {
		$('.lb-faq_el').removeClass('active');
		$(this).toggleClass('active');
	})

	/* END FAQ */

})
