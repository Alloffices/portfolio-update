jQuery(document).ready(function($){

	$('.rb-grid li').on('click',function(){
		var pict=$(this).data('pict');
		var pos=pict.split('-')[0];
		var prev=pos-1;
		var next=pos+1;
		var page=pict.split('-')[1];
		$('#header_desktop').fadeOut(400);
		$('.rb-overlay-container-'+page).fadeIn(400).addClass('active');
		$('.rb-overlay-'+page).fadeIn(400).addClass('active');
		$('.rb-fullwork[data-pict="'+pict+'"]').show().addClass('active');
		if (pos==1) {
	        $('.rb-overlay-container-'+page+' .rb-fullwork.first').next().addClass('anim_3');
	        $('.rb-overlay-container-'+page+' .bottom_button').fadeOut(0);
			$('.rb-overlay-container-'+page+' .top_button').fadeIn(0);
	    } else if (pos==$('.rb-overlay-container-'+page+' .rb-fullwork').length) {
	        $('.rb-overlay-container-'+page+' .rb-fullwork.last').prev().addClass('anim_1');
	        $('.rb-overlay-container-'+page+' .bottom_button').fadeIn(0);
	        $('.rb-overlay-container-'+page+' .top_button').fadeOut(0);
	    } else {
	        $('.rb-overlay-container-'+page+' .rb-fullwork.active').prev().addClass('anim_1').next().next().addClass('anim_3');
	        $('.rb-overlay-container-'+page+' .bottom_button').fadeIn(0);
			$('.rb-overlay-container-'+page+' .top_button').fadeIn(0);
	    }
	})
	$('.close_button').on('click',function(){
		$('#header_desktop').fadeIn(400);
		$('.rb-overlay-container').fadeOut(400).removeClass('active');
		$('.rb-overlay').fadeOut(400).removeClass('active');
		$('.rb-fullwork').removeClass('active').removeClass('anim_1').removeClass('anim_3');
		setTimeout(function(){
			$('.rb-fullwork').hide().removeClass('active');
		},400);
	})
	$('.top_button').click(function() {
		$('.rb-overlay').addClass('anim');

		$('.rb-fullwork.active').removeClass('anim_3').removeClass('active').addClass('anim_1').fadeOut(400).next().fadeIn(0).removeClass('anim_3').removeClass('anim_1').addClass('active');

		if ($('.rb-fullwork.first').hasClass('active')) {
			$('.bottom_button').fadeOut(0);
		}else{
			$('.bottom_button').fadeIn(0);
		}	

		if ($('.rb-fullwork.last').hasClass('active')) {
			$('.top_button').fadeOut(0);
		}else{
			$('.top_button').fadeIn(0);
		} 

		setTimeout(function() {
				$('.rb-overlay')
					.removeClass('anim');
			}, 1000);
	})

	$('.bottom_button').click(function() {
		$('.rb-overlay').addClass('anim');

		$('.rb-fullwork.active').removeClass('anim_1').removeClass('active').addClass('anim_3').fadeOut(400).prev().fadeIn(0).removeClass('anim_1').removeClass('anim_3').addClass('active');

		if ($('.rb-fullwork.first').hasClass('active')) {
			$('.bottom_button').fadeOut(0);
		}else{
			$('.bottom_button').fadeIn(0);
		} 

		if ($('.rb-fullwork.last').hasClass('active')) {
			$('.top_button').fadeOut(0);
		}else{
			$('.top_button').fadeIn(0);
		}


		setTimeout(function() {
				$('.rb-overlay')
					.removeClass('anim');
			}, 1000);
	})


	$(function() {
		var superbox = $('.superbox');
		superbox.SuperBox();
	});
	
/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 50
};

});

/*
	SuperBox v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/superbox
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	SuperBox, the lightbox reimagined. Fully responsive HTML5 image galleries.
*/
;(function($) {
		
	$.fn.SuperBox = function(options) {
		
		var superbox      = $('<div class="superbox-show"></div>');
		var superboximg   = $('<img src="" class="superbox-current-img">');
		var superboxclose = $('<div class="superbox-close"></div>');
		var superboxtitle = $('<div class="superbox-title"></div>');

		$third_color = php_expand_color.third_color;
		superbox.css('background', $third_color);

		
		superbox.append(superboximg).append(superboxclose).append(superboxtitle);
		
		return this.each(function() {
			
			$('.superbox-list').click(function() {
		
				var currentimg = $(this).find('.superbox-img');
				var imgData = currentimg.data('img');
				superboximg.attr('src', imgData);

				var titleData = currentimg.data('title');
				superboxtitle.html(titleData);
				
				if($('.superbox-current-img').css('opacity') == 0) {
					$('.superbox-current-img').animate({opacity: 1});
				}
				
				if ($(this).next().hasClass('superbox-show')) {
					superbox.slideToggle('slow');
				} else {
					superbox.insertAfter(this).slideDown('slow');
				}			
			});
						
			$('.superbox').on('click', '.superbox-close', function() {
				$('.superbox-current-img').animate({opacity: 0}, 200, function() {
					$('.superbox-show').slideUp();
				});
			});
			
		});
	};
})(jQuery);