setTimeout(function() {
		$('.bar_loader_1').addClass('anim_1');
	}, 200);
setTimeout(function() {
		$('.bar_loader_2').addClass('anim_1');
	}, 200);
setTimeout(function() {
		$('.bar_loader_2').addClass('anim_2');
	}, 1400);
setTimeout(function() {
		$('.bar_loader_2').addClass('anim_3');
	}, 2400);
setTimeout(function() {
		$('.bar_loader_1').addClass('anim_3');
	}, 2400);


/* END LIGHTBOX */

$(document).ready(function() {

	$('.container_general').addClass('transition');

	$('.background_disc_slice_home').addClass('transition');

	$('.lightbox').addClass('transition');
})

$(window).load(function(){

	document.getElementById('container_img_buy_section').innerHTML = loadPage(base_url + "assets/product_custom/livo/"+ 'gif.html');

	$('body').removeClass('block');
	$('.loader').fadeOut(1000);
	setTimeout(function() {
		$('.background_disc_slice_home').addClass('anim');
	}, 0);
	setTimeout(function() {
		$('.logo').addClass('anim');
	}, 800);
	setTimeout(function() {
		$('.title_1').addClass('anim');
	}, 900);
	setTimeout(function() {
		$('.title_2').addClass('anim');
	}, 1000);
	setTimeout(function() {
		$('.bar_pres_home').addClass('anim');
	}, 1050);
	setTimeout(function() {
		$('.info_kit').addClass('anim');
	}, 1100);
	setTimeout(function() {
		$('.img_home_2').addClass('anim');
	}, 1300);
	setTimeout(function() {
		$('.img_home_1').addClass('anim');
	}, 1450);
	setTimeout(function() {
		$('.position_bar_v_info_kit_slice_1').addClass('anim');
	}, 1450);
	setTimeout(function() {
		$('.position_bar_v_info_kit_slice_2').addClass('anim');
	}, 1550);
	setTimeout(function() {
		$('.bar_h_info_kit_slice_1').addClass('anim');
	}, 1600);
	setTimeout(function() {
		$('.bar_h_info_kit_slice_2').addClass('anim');
	}, 1650);
	setTimeout(function() {
		$('.container_element_info_kit_slice_1').addClass('anim');
	}, 2000);
	setTimeout(function() {
		$('.container_element_info_kit_slice_2').addClass('anim');
	}, 2100);
	setTimeout(function() {
		$('.container_element_info_kit_slice_3').addClass('anim');
	}, 2200);
	setTimeout(function() {
		$('.container_element_info_kit_slice_4').addClass('anim');
	}, 2300);
	setTimeout(function() {
		$('.header_mobile').addClass('anim');
	}, 2000);



	$('.close_corner_box_menu').click(function() {
			$('.container_general').removeClass('hide');
			$('body').removeClass('block');
			$('.corner_box_menu').removeClass('show');
		})

		$('.join').click(function() {
			$('.container_general').toggleClass('hide');
			$('body').toggleClass('block');
			$('.corner_box_menu').toggleClass('show');
		})

	$('body').click(function() {
		if ($('.container_general').hasClass('hide')) {

			$('.container_general').removeClass('hide');
			$('body').removeClass('block');
			$('.corner_box_menu').removeClass('show');
		};

	})


	function loadPage(href)
	{
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open("GET", href, false);
	    xmlhttp.send();
	    return xmlhttp.responseText;
	}

	$('.open_lb').click(function(){
		document.getElementById('lightbox').innerHTML =  loadPage(base_url + "assets/product_custom/livo/"+ 'lightbox.html');;
	})

	/* LIGHTBOX */

	$('.title_section_pr').click(function(){
		$('.title_section_pr').removeClass('active');
		$(this).addClass('active');
		$('.section_type_lb').fadeOut(0);

		$('.content_1_header_lb').removeClass('hide');
			$('.content_2_header_lb').removeClass('show');
			$('.position_content_2_header_lb').removeClass('show');
			$('.container_back_content_1').removeClass('show');
	})

	$('.open_portfolio').click(function(){
		$('.portfolio').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_portfolio').addClass('show');
	})
	$('.open_social').click(function(){
		$('.social').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_social').addClass('show');
	})
	$('.open_menu').click(function(){
		$('.menu').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_menu').addClass('show');
	})
	$('.open_signin').click(function(){
		$('.signin').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_signin').addClass('show');
	})
	$('.open_profil').click(function(){
		$('.profil').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_profil').addClass('show');
	})
	$('.open_ecommerce').click(function(){
		$('.ecommerce').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_eshop').addClass('show');
	})
	$('.open_walkthrough').click(function(){
		$('.walkthrough').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_walkthrough').addClass('show');
	})
	$('.open_statistic').click(function(){
		$('.statistics').fadeIn(400);
		$('.title_screen_lb').removeClass('show');
		$('.title_statistics').addClass('show');
	})

	$('.container_title_section_lb').click(function(){
			$('.content_1_header_lb').addClass('hide');
			$('.content_2_header_lb').addClass('show');
			setTimeout(function() {
			$('.position_content_2_header_lb').addClass('show');
			}, 100);
			setTimeout(function() {
			$('.container_back_content_1').addClass('show');
			}, 300);

		})

	$('.container_back_content_1').click(function(){
			$('.content_1_header_lb').removeClass('hide');
			$('.content_2_header_lb').removeClass('show');
			$('.position_content_2_header_lb').removeClass('show');
			$('.container_back_content_1').removeClass('show');

		})

	if (window.matchMedia("(max-device-width : 800px)").matches) {
	  	$('.open_lb').click(function(){
			$('.header_mobile').fadeOut(0);
			$('.lightbox').addClass('show');
			$('.header_lb').addClass('show');
		})
		$('.close_lb').click(function(){
			$('.header_mobile').fadeIn(400);
			$('.lightbox').removeClass('show');
			$('.header_lb').removeClass('show');
			setTimeout(function() {
				$('.section_type_lb').fadeOut(0);
			}, 1000);
		})
	} else {

	  $('.open_lb').click(function(){
		$('.lightbox').addClass('show');
		$('body').addClass('block');
		$('.header_lb').addClass('show');
		})
		$('.close_lb').click(function(){
			$('.lightbox').removeClass('show');
			$('body').removeClass('block');
			$('.header_lb').removeClass('show');
			setTimeout(function() {
				$('.section_type_lb').fadeOut(0);
			}, 1000);
		})
	}

	var $head1 = $( '#position_img_organized' );
	$( '.ha-waypoint_1' ).each( function(i) {
		var $el1 = $( this ),
			animClassDown = $el1.data( 'animateDown' ),
			animClassUp = $el1.data( 'animateUp' );

		$el1.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head1.attr('class', 'position_img_organized ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head1.attr('class', 'position_img_organized ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head2 = $( '#container_img_1_categories_part_1' );
	$( '.ha-waypoint_2' ).each( function(i) {
		var $el2 = $( this ),
			animClassDown = $el2.data( 'animateDown' ),
			animClassUp = $el2.data( 'animateUp' );

		$el2.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head2.attr('class', 'container_img_1_categories_part_1 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head2.attr('class', 'container_img_1_categories_part_1 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head3 = $( '#container_img_2_categories_part_1' );
	$( '.ha-waypoint_3' ).each( function(i) {
		var $el3 = $( this ),
			animClassDown = $el3.data( 'animateDown' ),
			animClassUp = $el3.data( 'animateUp' );

		$el3.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head3.attr('class', 'container_img_2_categories_part_1 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head3.attr('class', 'container_img_2_categories_part_1 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head4 = $( '#container_img_3_categories_part_1' );
	$( '.ha-waypoint_4' ).each( function(i) {
		var $el4 = $( this ),
			animClassDown = $el4.data( 'animateDown' ),
			animClassUp = $el4.data( 'animateUp' );

		$el4.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head4.attr('class', 'container_img_3_categories_part_1 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head4.attr('class', 'container_img_3_categories_part_1 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head5 = $( '#container_element_categories_part_2_1' );
	$( '.ha-waypoint_5' ).each( function(i) {
		var $el5 = $( this ),
			animClassDown = $el5.data( 'animateDown' ),
			animClassUp = $el5.data( 'animateUp' );

		$el5.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head5.attr('class', 'container_element_categories_part_2_1 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head5.attr('class', 'container_element_categories_part_2_1 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head6 = $( '#container_element_categories_part_2_2' );
	$( '.ha-waypoint_6' ).each( function(i) {
		var $el6 = $( this ),
			animClassDown = $el6.data( 'animateDown' ),
			animClassUp = $el6.data( 'animateUp' );

		$el6.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head6.attr('class', 'container_element_categories_part_2_2 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head6.attr('class', 'container_element_categories_part_2_2 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head7 = $( '#container_left_categorie_part_3' );
	$( '.ha-waypoint_7' ).each( function(i) {
		var $el7 = $( this ),
			animClassDown = $el7.data( 'animateDown' ),
			animClassUp = $el7.data( 'animateUp' );

		$el7.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head7.attr('class', 'container_left_categorie_part_3 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head7.attr('class', 'container_left_categorie_part_3 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head8 = $( '#container_right_categorie_part_3' );
	$( '.ha-waypoint_8' ).each( function(i) {
		var $el8 = $( this ),
			animClassDown = $el8.data( 'animateDown' ),
			animClassUp = $el8.data( 'animateUp' );

		$el8.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head8.attr('class', 'container_right_categorie_part_3 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head8.attr('class', 'container_right_categorie_part_3 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );

	var $head9 = $( '#container_bottom_categorie_part_3' );
	$( '.ha-waypoint_9' ).each( function(i) {
		var $el9 = $( this ),
			animClassDown = $el9.data( 'animateDown' ),
			animClassUp = $el9.data( 'animateUp' );

		$el9.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head9.attr('class', 'container_bottom_categorie_part_3 ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head9.attr('class', 'container_bottom_categorie_part_3 ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );
})
