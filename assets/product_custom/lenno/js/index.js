var $lightbox = $('#lightbox');
var $loader = $('#loader');
var $body = $('body');

$(window).on('load', function () {
	$(document).ready(function(){
	    $(this).scrollTop(0);
	});
      setTimeout(function() {
		$loader.addClass('ready-1');

		setTimeout(function() {
			$loader.removeClass('ready-1').addClass('ready-2');
			setTimeout(function() {
				$loader.addClass('hide');
				setTimeout(function() {
					$loader.hide();
					$('#section-home').addClass('anim');
					setTimeout(function() {
						$body.removeClass('block');
						$('#section-home h1').removeClass('transition');
						$('#section-home .img-1').removeClass('transition');
						$('#section-home .img-2').removeClass('transition');
						$('#section-home .img-3').removeClass('transition');
					}, 1500);
				}, 750);
			}, 1000);
		}, 1500);

	}, 0);
 }); 


$(window).scroll(function() {

	var $window = $(window);

	if ($window.scrollTop() >= $('#section-home').height() + $('#section-contempary-design').height() + $('#section-slide').height() + $('#section-desc').height() + $('#section-view').height() + $('#section-buy').height()/2 ) {

         if (!$('#section-buy').hasClass('anim')) {

         	countAnim();
         	$('#section-buy').addClass('anim');

         };

    } else if ($window.scrollTop() <= $('#section-home').height() + $('#section-contempary-design').height() + $('#section-slide').height() + $('#section-desc').height() + $('#section-view').height() + $('#section-buy').height()/2 ) {

         if ($('#section-buy').hasClass('anim')) {

         	$('#section-buy').removeClass('anim');

         };

    }

})

function countAnim() {
	$('.number').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: 70
	    }, {
	        duration: 2000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
}


$('.see-all-screen').click(function(){
	$body.addClass('block');
	$lightbox.show();
	setTimeout(function() {
		$lightbox.addClass('show');
		setTimeout(function() {
			$lightbox.addClass('anim');
		}, 350);
	}, 50);
	
})

$('#lightbox .close-lightbox').click(function(){
	$lightbox.removeClass('anim');
	setTimeout(function() {
		$lightbox.removeClass('show');
		$body.removeClass('block');
		setTimeout(function() {
			$lightbox.hide();
		}, 300);
	}, 350);
})

$(function() {
    if (window.matchMedia("(min-width: 800px)").matches) {
      ParallaxScroll.init();
    };
});

$('#section-home .img-2').mouseenter(function(){
	$('#section-home .img-1').addClass('blur-1');
})
$('#section-home .img-2').mouseleave(function(){
	$('#section-home .img-1').removeClass('blur-1');
})

$('#section-home .img-3').mouseenter(function(){
	$('#section-home .img-1').addClass('blur-2');
})
$('#section-home .img-3').mouseleave(function(){
	$('#section-home .img-1').removeClass('blur-2');
})
