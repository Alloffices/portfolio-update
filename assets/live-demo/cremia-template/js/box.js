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

$(document).ready(function(){
	$('#content').infinitescroll({
		navSelector: "#next:last",
		nextSelector: "#next:last",
		itemSelector: "#content",
		debug: false,
		dataType: 'html',
    maxPage: 6,
		path: function(index) {
			return "index" + index + ".html";
		}
		// appendCallback	: false, // USE FOR PREPENDING
    }, function(newElements, data, url){
      // used for prepending data
    	// $(newElements).css('background-color','#ffef00');
    	// $(this).prepend(newElements);
    });
});

$(document)
	.scroll(function() {
		var scroll = $(this)
			.scrollTop();
		if (scroll >= 400) {
			setTimeout(function() {
				$('.buy')
					.addClass('active');
			}, 400);
		}
	});



$(document)
	.scroll(function() {
		var scroll = $(this)
			.scrollTop();
		if (scroll >= 200) {
			setTimeout(function() {
				$('.anim_box_1')
					.addClass('anim');
			}, 200);
			setTimeout(function() {
				$('.anim_box_2')
					.addClass('anim');
			}, 300);
			setTimeout(function() {
				$('.anim_box_3')
					.addClass('anim');
			}, 400);
			setTimeout(function() {
				$('.anim_box_4')
					.addClass('anim');
			}, 500);
			activeImg();
		}
	});


$('.container_like').click(function(e){
	event.stopPropagation();
})

function activeImg(){

	$('.photo_min').on('click',function(){
      var photomin=$(this).data('photo');
      $('.lightbox').fadeIn(600);
      $('.photo_style').fadeOut(0);
      $('.'+photomin).fadeIn(0).addClass('active').prev().addClass('anim_1').next().next().addClass('anim_3');

      if ($('.photo_style.first').hasClass('active')) {
        $(this).next().addClass('anim_3');
        $('.bottom_button').fadeOut(0);
      } else if ($('.photo_style.last').hasClass('active')) {
        $(this).prev().addClass('anim_1');
        $('.top_button').fadeOut(0);
      } else {
        $(this).prev().addClass('anim_1').next().next().addClass('anim_3');
        $('.bottom_button').fadeIn(0);
		$('.top_button').fadeIn(0);
      };
    })
}

$('.top_button').click(function() {
	$('.container_photo_style').addClass('anim');

	$('.photo_style.active').removeClass('anim_3').removeClass('active').addClass('anim_1').fadeOut(400).next().fadeIn(0).removeClass('anim_3').removeClass('anim_1').addClass('active');

	if ($('.photo_style.first').hasClass('active')) {
		$('.bottom_button').fadeOut(0);
	}else{
		$('.bottom_button').fadeIn(0);
	}	

	if ($('.photo_style.last').hasClass('active')) {
		$('.top_button').fadeOut(0);
	}else{
		$('.top_button').fadeIn(0);
	} 

	setTimeout(function() {
			$('.container_photo_style')
				.removeClass('anim');
		}, 1000);
})

$('.bottom_button').click(function() {
	$('.container_photo_style').addClass('anim');

	$('.photo_style.active').removeClass('anim_1').removeClass('active').addClass('anim_3').fadeOut(400).prev().fadeIn(0).removeClass('anim_1').removeClass('anim_3').addClass('active');

	if ($('.photo_style.first').hasClass('active')) {
		$('.bottom_button').fadeOut(0);
	}else{
		$('.bottom_button').fadeIn(0);
	} 

	if ($('.photo_style.last').hasClass('active')) {
		$('.top_button').fadeOut(0);
	}else{
		$('.top_button').fadeIn(0);
	}


	setTimeout(function() {
			$('.container_photo_style')
				.removeClass('anim');
		}, 1000);
})

$('.close_button').click(function() {
	$('.lightbox').fadeOut(400);
	$('.photo_style').removeClass('active').removeClass('anim_1').removeClass('anim_3');
})

/* LIKE */
$('.container_like').click(function() {
	$(this).toggleClass('active');
})


$('.button_active_menu').click(function() {

	if ($('.button_active_menu').hasClass('active')) {

		$('.button_active_menu').removeClass('active');

		$('.container_menu').removeClass('show');
		setTimeout(function() {
			$('.content_menu').removeClass('active');
		}, 1000);

	} else {

		$('.button_active_menu').addClass('active');

		$('.container_menu').addClass('show');
		setTimeout(function() {
			$('.content_menu').addClass('active');
		}, 1000);

	}	
})

$('.content_on_menu').click(function() {

	$('.button_active_menu').removeClass('active');

	$('.container_menu').removeClass('show');
	setTimeout(function() {
		$('.content_menu').removeClass('active');
	}, 1000);
})

$('.content_on_menu_1').click(function() {
	$('.home').removeClass('hide');
	$('.container_box').fadeIn(400);

	$('.container_about_us').fadeOut(0);

	$('.container_story').fadeOut(0);
})

$('.content_on_menu_2').click(function() {
	$('.home').addClass('hide');
	$('.container_box').fadeOut(0);

	$('.container_about_us').fadeIn(400);

	$('.container_story').fadeOut(0);
})

$('.content_on_menu_3').click(function() {
	$('.home').addClass('hide');
	$('.container_box').fadeOut(0);

	$('.container_about_us').fadeOut(0);

	$('.container_story').fadeIn(400);
})


