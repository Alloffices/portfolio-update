jQuery(document).ready(function($){

	$(function(){

	$('#header_responsive .menu_links').css('color',$('.menu_links').data('color1'));
   $(window).scroll(function () {
      if ($(this).scrollTop() > 160) {
        	$('#header_desktop').addClass("background_show");
        	$('#header_desktop .menu_links').css('color',$('.menu_links').data('color1'));
      } else {
      		$('#header_desktop').removeClass("background_show");
      		$('#header_desktop .menu_links').css('color','#fff');
      }
   });
 });

	setTimeout(function(){
      $('.header_play_button').css('display','block');
    },2000);

	if (navigator.userAgent.match(/iPad/i)) {
		var viewportmeta = document.querySelector('meta[name="viewport"]'); 
		if (viewportmeta) {
			viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0'; 
			document.body.addEventListener('gesturestart', function() { 
				viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0'; 
			}, false); 
		} 
	}

	function productHeight(){
		$('.showcase').each(function(){
			var tmp = new Image()
			tmp.src=$(this).next().find('img').attr('src');
			var height=(tmp.height/tmp.width)*$(this).next().width();
			$(this).height(height);
		})
	}
	productHeight();
	$(window).resize(productHeight);
	$(window).load(productHeight);

	$('.rb-grid li').click(function(){
		$('#top').hide();
	});
	$('.rb-close').on('click',function(){
		$('#top').show();
	})

	// Set pixelRatio to 1 if the browser doesn't offer it up.
	var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
	 
	// Rather than waiting for document ready, where the images
	// have already loaded, we'll jump in as soon as possible.
	$(window).on("load", function() {
	    if (pixelRatio > 1) {
	        $('img.retina').each(function() {
	 
	            // Very naive replacement that assumes no dots in file names.
	            $(this).attr('src', $(this).attr('src').replace(".","@2x."));
	        });
	        $('.all_services img').each(function(){
				$(this).attr('src', $(this).attr('data'));
			});
	        $('.news .icon img').each(function(){
				$(this).attr('src', $(this).attr('data'));
			});
			if($('.lecco_logo img').attr('data')){
				$('.lecco_logo img').attr('src', $('#logo a img').attr('data'));
			}
			if($('link[rel="icon"]').attr('data')){
				$('link[rel="icon"]').attr('href', $('link[rel="icon"]').attr('data'));
			}
	    }
	});

	$('.header-responsive_open').click(function() {
		$(this).toggleClass('active');
		$('.header-responsive_content').toggleClass('active');
	})

	$('.cat').each(function(){
	    var title = $(this).find('.title');
		var id = $(title).text();
	    var link = $(this).data('cat');
		var menu = '<li><a href=".' + link + '" class="menu_' + link + ' menu_links" data-color1="" data-color2="">' + id + '</a></li>';
		var menu_phone = '<a href=".' + link + '" class="menu_' + link + ' menu_links"><li>' + id + '</li></a>'
		$('.header-desktop_container ul').append(menu);
		$('.header-responsive_content ul').append(menu_phone);
	});

	$('.hover-zoom a').on('click',function(){
		if($(window).width>768){
			$('body').css('overflow','hidden');
			$('#top').hide();
		}
	})
	$('.lb-close').on('click',function(){
		$('body').css('overflow','auto');
		$('#top').show();
	})

	/* ANIMATION OF DISCOVER */

	var header = $('#header-1').addClass('current');

	var textheadercontain = $('.text_header_contain');
	  // textheadercontain.addClass('fadeInUp');

	/* HEADER VIDEO */

	function playHeaderVideo(){
		var id = $(this).attr('id');
		var cut = id.split("_");
		var cutID = cut[3];

		var img = '#header_img_' + cutID;
		var video = '#header_video_' + cutID + ' iframe';
		$(img).css('opacity', 0);
		var src = $(video).attr('src');
		$(video).attr('src', src.replace("autoplay=0", "autoplay=1"));
		setTimeout(function(){$(img).css('display', 'none');},1000)
	}

	$('.header_play_button').click(playHeaderVideo);

	function buttonPos(){
		$('.header_play_button').each(function(){
			var id = $(this).attr('id');
			var cut = id.split("_");
			var cutID = cut[3];

			var widthDiscover = parseInt($('#discover-' + cutID).css('width')) / 2 + 15;
			$(this).css('margin-left', widthDiscover);
		})
	}
	buttonPos();

	/* MENU PHONE */

	function heightMenuPhone(){
		var maxHeight = parseInt(window.innerHeight) - 88;
		$('#menu_phone').css('max-height', maxHeight);
	}
	heightMenuPhone();
	$(window).resize(heightMenuPhone);

	/* THUMBNAILS */

	$('.members').css('display','none');
	$('.global_team').each(function(){
		$(this).find('.members').first().css('display','block');
	})

	$('.button_team').first().addClass('active_team');

	$('.button_team').click(function(){
		$(".button_team").removeClass("active_team");
		$(this).addClass("active_team");
		var current = $(this).attr('id');
		$('.members').fadeOut(400,function(){
			setTimeout(function(){
				$('#members-' + current).fadeIn(400);
			},400)
		});
		
	});

	/* TEXT PART */

	$('.text_part_content p iframe').parent().css({'position': 'relative', 'height': 0, 'padding-bottom': '56.25%', 'overflow': 'hidden'});

	/* ANIMATION SERVICES */

	var allservices = $('.all_services');
	allservices.mouseenter(function(){
		$(this).animate({top: '-20'}, 250, function(){

		});
	}),
	allservices.mouseleave(function(){
		$(this).animate({top: '0'}, 250, function(){

		});
	});

	/* SHOWCASE */

	/* SHOWCASE */
	var nbShowcase=$('.products_top').length;
	var showcase = '';
	$('.first_showcase').each(function(){
		showcase=$(this);
		if(showcase.hasClass('iphone5')){
			showcase.showcase({separation: 0});
		} else if(showcase.hasClass('ipad')){
			showcase.showcase({separation: 0});
		} else if(showcase.hasClass('imac')){
			showcase.showcase({separation: 0});
		} else if(showcase.hasClass('null')){
			showcase.showcase({separation: 0});
		}
	})
		
	$('.button_products').click(function(){
		var current = $(this).attr('id');
	    var n=current.split("_");
	    showcasen = '#showcase_' + n[2] + '_' + n[3];
		if($(showcasen).hasClass('iphone5')){
			$(showcasen).showcase({separation: 0});
		} else if($(showcasen).hasClass('ipad')){
			$(showcasen).showcase({separation: 0});
		} else if($(showcasen).hasClass('imac')){
			$(showcasen).showcase({separation: 0});
		} else if($(showcasen).hasClass('null')){
			$(showcasen).showcase({separation: 0});
		}
	});

	/* READ MORE */

	var showText='Read More';
	var hideText='Read Less';
	var is_visible = false;
	 
	var more = $('.more');
	more.next().find('h6').append(showText);
	 
	more.hide();
	 
	$('a.toggleLink').click(function() {
		if($(this).parent().prev('.more').hasClass('show')){$(this).find('h6').html(showText);}else{$(this).find('h6').html(hideText);}
		$(this).parent().prev('.more').slideToggle('slow').toggleClass('show');

		return false;
	});
		 
	/* NUMBER OF FACEBOOK FANS */
	var nbfbfan = php_init.facebookid;
	$.ajax({
	    url: 'https://graph.facebook.com/' + nbfbfan + '',
	    dataType: 'jsonp',
	    success: function(data) {
	        $('#fans').html(data.likes);
	   }
	});

	function zillaLikesActive(){
		$(this).parent().parent().addClass('red');
	}
	$('.zilla-likes.active').each(zillaLikesActive);
	$('.news_share').on('click', '.zilla-likes', zillaLikesActive);

	var introSection = $('.header_slides'),
		introSectionHeight = introSection.height(),
		//change scaleSpeed if you want to change the speed of the scale effect
		scaleSpeed = 0.5,
		//change opacitySpeed if you want to change the speed of opacity reduction effect
		opacitySpeed = 1; 
	
	//update this vale if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
	var MQ = 1170;

	triggerAnimation();
	$(window).on('resize', function(){
		triggerAnimation();
	});

	//bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
	function triggerAnimation(){
		if($(window).width()>= MQ) {
			$(window).on('scroll', function(){
				//The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
				window.requestAnimationFrame(animateIntro);
			});
		} else {
			$(window).off('scroll');
		}
	}
	//assign a scale transformation to the #cd-background element and reduce its opacity
	function animateIntro () {
		var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
			scaleValue = 1 - scrollPercentage*scaleSpeed;
		//check if the #cd-background is still visible
		if( $(window).scrollTop() < introSectionHeight) {
			introSection.css({
			    '-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
			    '-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'transform': 'scale(' + scaleValue + ') translateZ(0)',
				'opacity': 1 - scrollPercentage*opacitySpeed
			});
		}
	}
	
});

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/*jQuery(function() {
		
var Boxgrid = (function() {

	$=jQuery;

	var $items = $( '#rb-grid > li' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		// transition end event name
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// window and body elements
		$window = $( window ),
		$height = window.screen.height;
		$height = $height * 2;
		$body = $( 'BODY' ),
		// transitions support
		supportTransitions = Modernizr.csstransitions,
		// current item's index
		current = -1,
		// window width and height
		winsize = getWindowSize();

	function init( options ) {	
		initEvents();
	}

	function initEvents() {
		
		$items.each( function() {

			var $item = $( this ),
				$close = $item.find( 'span.rb-close' ),
				$overlay = $item.children( 'div.rb-overlay' );

			$item.on( 'click', function() {

				$(this).css('opacity',1);

				if( $item.data( 'isExpanded' ) ) {
					return false;
				}
				$item.data( 'isExpanded', true );
				// save current item's index
				current = $item.index();

				var layoutProp = getItemLayoutProp( $item ),
					clipPropFirst = 'rect(' + layoutProp.top + 'px ' + ( layoutProp.left + layoutProp.width ) + 'px ' + ( layoutProp.top + layoutProp.height ) + 'px ' + layoutProp.left + 'px)',
					clipPropLast = 'rect(0px ' + winsize.width + 'px ' + $height + 'px 0px)';

				$overlay.css( {
					clip : supportTransitions ? clipPropFirst : clipPropLast,
					opacity : 1,
					zIndex: 9999,
					pointerEvents : 'auto'
				} );

				if( supportTransitions ) {
					$overlay.on( transEndEventName, function() {

						$overlay.off( transEndEventName );

						setTimeout( function() {
							$overlay.css( 'clip', clipPropLast ).on( transEndEventName, function() {
								$overlay.off( transEndEventName );
								$body.css( 'overflow-y', 'hidden' );
							} );
						}, 25 );

					} );
				}
				else {
					$body.css( 'overflow-y', 'hidden' );
				}

			} );

			$close.on( 'click', function() {

				$body.css( 'overflow-y', 'auto' );

				var layoutProp = getItemLayoutProp( $item ),
					clipPropFirst = 'rect(' + layoutProp.top + 'px ' + ( layoutProp.left + layoutProp.width ) + 'px ' + ( layoutProp.top + layoutProp.height ) + 'px ' + layoutProp.left + 'px)',
					clipPropLast = 'auto';

				// reset current
				current = -1;

				$overlay.css( {
					clip : supportTransitions ? clipPropFirst : clipPropLast,
					opacity : supportTransitions ? 1 : 0,
					pointerEvents : 'none'
				} );

				if( supportTransitions ) {
					$overlay.on( transEndEventName, function() {

						$overlay.off( transEndEventName );
						setTimeout( function() {
							$overlay.css( 'opacity', 0 ).on( transEndEventName, function() {
								$overlay.off( transEndEventName ).css( { clip : clipPropLast, zIndex: -1 } );
								$item.data( 'isExpanded', false );
							} );
						}, 25 );

					} );
				}
				else {
					$overlay.css( 'z-index', -1 );
					$item.data( 'isExpanded', false );
				}

				return false;

			} );

		} );

		$( window ).on( 'debouncedresize', function() { 
			winsize = getWindowSize();
			// todo : cache the current item
			if( current !== -1 ) {
				$items.eq( current ).children( 'div.rb-overlay' ).css( 'clip', 'rect(0px ' + winsize.width + 'px ' +$height + 'px 0px)' );
			}
		} );

	}

	function getItemLayoutProp( $item ) {
		
		var scrollT = $window.scrollTop(),
			scrollL = $window.scrollLeft(),
			itemOffset = $item.offset();

		return {
			left : itemOffset.left - scrollL,
			top : itemOffset.top - scrollT,
			width : $item.outerWidth(),
			height : $height
		};

	}

	function getWindowSize() {
		$body.css( 'overflow-y', 'hidden' );
		var w = $window.width(), h =  $window.height();
		if( current === -1 ) {
			$body.css( 'overflow-y', 'auto' );
		}
		return { width : w, height : h };
	}

	return { init : init };

})();
	Boxgrid.init();
});*/