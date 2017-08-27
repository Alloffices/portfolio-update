setTimeout(function() {
	$('.container_title_loader div:nth-child(1)').addClass('show');
}, 500);
setTimeout(function() {
	$('.container_title_loader div:nth-child(2)').addClass('show');
}, 550);
setTimeout(function() {
	$('.container_title_loader div:nth-child(3)').addClass('show');
}, 600);
setTimeout(function() {
	$('.container_title_loader div:nth-child(4)').addClass('show');
}, 650);
setTimeout(function() {
	$('.container_title_loader div:nth-child(5)').addClass('show');
}, 700);

$(window).load(function(){

	setTimeout(function() {
	$('.loader_bar_1').addClass('show');
	}, 0);
	setTimeout(function() {
	$('.loader_bar_3').addClass('show');
	}, 500);
	setTimeout(function() {
	$('.loader_bar_2').addClass('show');
	}, 1000);
	setTimeout(function() {
	$('.loader').fadeOut(400);
	}, 1000);

	setTimeout(function() {
	$('body').removeClass('block');
	}, 1500);

	setTimeout(function() {
	$('.section-home_title').addClass('show');
	}, 1500);

	setTimeout(function() {
	$('.section-home_description').addClass('show');
	}, 1650);

	setTimeout(function() {
	$('.section_top .see_all_slide').addClass('show');
	}, 1800);

	setTimeout(function() {
	$('.buy_element').addClass('show');
	}, 1800);
	setTimeout(function() {
	$('.share_element_1').addClass('show');
	}, 1900);
	setTimeout(function() {
	$('.share_element_2').addClass('show');
	}, 2000);

	setTimeout(function() {
	$('.section-home_buy').addClass('show');
	}, 1950);

	setTimeout(function() {
	$('.section-home_available').addClass('show');
	}, 1950);

	setTimeout(function() {
	$('.section-home_available_element_1').addClass('show');
	}, 2050);
	setTimeout(function() {
	$('.section-home_available_element_2').addClass('show');
	}, 2100);
	setTimeout(function() {
	$('.section-home_available_element_3').addClass('show');
	}, 2150);

	setTimeout(function() {
	$('.section-home_container_video').addClass('show');
	}, 1800);

	setTimeout(function() {
	$('.nav_section').addClass('show');
	}, 2300);

	setTimeout(function() {
	$('.section-home_scroll').addClass('show');
	}, 2900);

	$('body').click(function() {
			if ($('.container_general').hasClass('hide')) {

				$('.container_general').removeClass('hide');
				$('body').removeClass('block');
				$('.corner_box_menu').removeClass('show');
			};

	})

if (window.matchMedia("(min-width: 600px)").matches) {

	/* SCROLL */

	$(document).ready(function(){

	    var $windows = $('.section_h, .section_m');

	    $windows.windows({
	        snapping: true,
	        snapSpeed: 500,
	        snapInterval: 800,
	        onScroll: function(s){},
	        onSnapComplete: function($el){},
	        onWindowEnter: function($el){}
	    });

	});


	var $head = $( '#nav_section' );
		$( '.ha-waypoint' ).each( function(i) {
			var $el = $( this ),
				animClassDown = $el.data( 'animateDown' ),
				animClassUp = $el.data( 'animateUp' );

			$el.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head.attr('class', 'nav_section show ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head.attr('class', 'nav_section show ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	var $head_1 = $( '#container_general' );
		$( '.ha-waypoint_g' ).each( function(i) {
			var $el_1 = $( this ),
				animClassDown = $el_1.data( 'animateDown' ),
				animClassUp = $el_1.data( 'animateUp' );

			$el_1.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head_1.attr('class', 'container_general ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head_1.attr('class', 'container_general ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	var $head_2 = $( '#nav-section_container_bar_portfolio' );
		$( '.ha-waypoint_portfolio' ).each( function(i) {
			var $el_2 = $( this ),
				animClassDown = $el_2.data( 'animateDown' ),
				animClassUp = $el_2.data( 'animateUp' );

			$el_2.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head_2.attr('class', 'nav-section_container_bar_portfolio ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head_2.attr('class', 'nav-section_container_bar_portfolio ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );


	/* END SCROLL */

	};

	var $head_3 = $( '#section-portfolio_container_title' );
		$( '.ha-waypoint_text_portfolio' ).each( function(i) {
			var $el_3 = $( this ),
				animClassDown = $el_3.data( 'animateDown' ),
				animClassUp = $el_3.data( 'animateUp' );

			$el_3.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head_3.attr('class', 'section-portfolio_container_title ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head_3.attr('class', 'section-portfolio_container_title ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	var $head_4 = $( '#see_all_slide' );
		$( '.ha-waypoint_text_portfolio' ).each( function(i) {
			var $el_4 = $( this ),
				animClassDown = $el_4.data( 'animateDown' ),
				animClassUp = $el_4.data( 'animateUp' );

			$el_4.waypoint( function( direction ) {
				if( direction === 'down' && animClassDown ) {
					$head_4.attr('class', 'see_all_slide ' + animClassDown);
				}
				else if( direction === 'up' && animClassUp ){
					$head_4.attr('class', 'see_all_slide ' + animClassUp);
				}
			}, { offset: '100%' } );
		} );

	$('a[href^="#"]')
		.click(function() {
			var id = $(this)
				.attr("href");
			var offset = $(id)
				.offset()
				.top
			$('html, body')
				.animate({
					scrollTop: offset
				}, 'slow');
			return false;
		});


	/* SLIDE */

	$('.section-slide_nav_right').click(function() {

		$('.section-slide_content_screen .screen.show').removeClass('show').addClass('hide_2').next().addClass('show').removeClass('hide_1');

		if ($('.screen.last').hasClass('show')) {
			$('.section-slide_nav_right').fadeOut(0);
		}else{
			$('.section-slide_nav_left').fadeIn(400);
			$('.section-slide_nav_right').fadeIn(400);
		}

	})


	$('.section-slide_nav_left').click(function() {

		$('.section-slide_content_screen .screen.show').removeClass('show').addClass('hide_1').prev().addClass('show').removeClass('hide_2');

		if ($('.screen.first').hasClass('show')) {
			$('.section-slide_nav_left').fadeOut(0);
		}else{
			$('.section-slide_nav_left').fadeIn(400);
			$('.section-slide_nav_right').fadeIn(400);
		}

	})

	/* END SLIDE */


	/* FEATURES SLIDE */

	$('.section-features_button_slider_2').click(function() {
		$('.section-features_slider_element.left').removeClass('left').addClass('left_hide');
		$('.section-features_slider_element.middle').removeClass('middle').addClass('left');
		$('.section-features_slider_element.right').removeClass('right').addClass('middle').next().removeClass('right_hide').addClass('right');

		if ($('.section-features_slider_element.last').hasClass('middle')) {
			$('.section-features_button_slider_2').fadeOut(0);
		}else{
			$('.section-features_button_slider_2').fadeIn(400);
			$('.section-features_button_slider_1').fadeIn(400);
		}
	})

	$('.section-features_button_slider_1').click(function() {
		$('.section-features_slider_element.right').removeClass('right').addClass('right_hide');
		$('.section-features_slider_element.middle').removeClass('middle').addClass('right');
		$('.section-features_slider_element.left').removeClass('left').addClass('middle').prev().removeClass('left_hide').addClass('left');

		if ($('.section-features_slider_element.first').hasClass('middle')) {
			$('.section-features_button_slider_1').fadeOut(0);
		}else{
			$('.section-features_button_slider_2').fadeIn(400);
			$('.section-features_button_slider_1').fadeIn(400);
		}
	})


	/* END FEATURES SLIDE */



	/* LIGHTBOX */


	function loadPage(href)
	{
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open("GET", href, false);
	    xmlhttp.send();
	    return xmlhttp.responseText;
	}

	document.getElementById('lightbox').innerHTML = loadPage(base_url + "/assets/product_custom/musso/"+ 'lightbox.html');

	$('.see_all_slide').click(function() {
		$('body').addClass('block');
		$('.lightbox').fadeIn(0);
		$('.lightbox').addClass('show');


		setTimeout(function() {
		$('.lightbox-title').addClass('show');
		}, 700);
		setTimeout(function() {
		$('.lightbox-close').addClass('show');
		}, 700);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(3)').addClass('show');
		}, 700);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(4)').addClass('show');
		}, 800);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(5)').addClass('show');
		}, 900);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(6)').addClass('show');
		}, 1000);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(7)').addClass('show');
		}, 1100);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(8)').addClass('show');
		}, 1200);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(9)').addClass('show');
		}, 1300);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(10)').addClass('show');
		}, 1400);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(11)').addClass('show');
		}, 1500);
		setTimeout(function() {
		$('.container_img_lighbox_anim:nth-child(12)').addClass('show');
		}, 1600);

	})

	$('.lightbox-close').click(function() {

		$('body').removeClass('block');
		$('.lightbox').fadeOut(400);
		$('.lightbox').removeClass('show');
		$('.lightbox-title').removeClass('show');
		$('.lightbox-close').removeClass('show');

		$('.container_img_lighbox_anim').removeClass('show');
	})

	/* END LIGHTBOX */

})
