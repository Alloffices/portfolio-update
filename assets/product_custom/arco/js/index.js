if (window.matchMedia("(max-width: 1000px)").matches) {
  $('.thumb-4').addClass('active');
  $('.thumb-4 .content-thumb').fadeIn(250);
  $('.title-all-screen').attr('src', base_url + "assets/product_custom/arco/" + 'img/All-Screens.gif');
  $('.thumb-4').addClass('show-anim');
  $('.container-thumb.active .overlay-thumb').hide();
  $('.thumb-4').addClass('shadow');
};
/* ************************************************* */
/* ***************** LOADING ACTION **************** */
/* ************************************************* */

$(document).ready(function() {

	$('#percantage-load').addClass('show');

	var loaded = 0;
	var number_of_media = $("body img").length-4;

	doProgress();


	// FUNCTION FOR THE PROGRESS BAR
	function doProgress() {

		$("img").load(function() {

			loaded++;

			var newWidthPercentage = (loaded / number_of_media) * 100;

			animateLoader(newWidthPercentage + '%');

			$('#percantage-load').text(newWidthPercentage.toFixed(0));

		})

	}

	//ANIMATE THE LOADER
	function animateLoader(newWidth) {

		$("#progressBar").width(newWidth);


		if(loaded===(number_of_media)){


			setTimeout(function() {
				$('#loader').addClass('hide');

				setTimeout(function() {

					$('.overlay-thumb').removeClass('hide');

					$('#loader').hide();

				}, 1700);

			}, 250);

		}
	}

	// IF LOADER CRASH --> FORCE TO HIDE LOADER
	window.onload = function () {

		$('#percantage-load').text('100');

		setTimeout(function() {

			$('#loader').addClass('hide');

			setTimeout(function() {

				$('.overlay-thumb').removeClass('hide');

				$('#loader').hide();

			}, 1700);

		}, 250);

		function loadPage(href)
		  {
		      var xmlhttp = new XMLHttpRequest();
		      xmlhttp.open("GET", href, false);
		      xmlhttp.send();
		      return xmlhttp.responseText;
		  }


			 }




/* ************************************************* */
/* *************** END LOADING ACTION ************** */
/* ************************************************* */


/* ************************************************* */
/* ******************** NAV MENU ******************* */
/* ************************************************* */

$('.nav-menu .menu').click(function(){

	$('.nav-container-thumb').removeClass('thumb-open');

	$('.container-thumb.show-anim .overlay-thumb').addClass('delay');

	$('.overlay-thumb').show();

	$('.content-thumb').fadeOut(500);

	$('.nav-thumb-open_button').addClass('hide');

	setTimeout(function() {

		$('.nav-thumb-open_button').hide();

	}, 250);

	setTimeout(function() {

		$('.overlay-thum_text').addClass('delay');

	}, 50);

	setTimeout(function() {

		$( ".container-thumb .content-thumb" ).scrollTop(0);

	}, 300);

	$('.container-thumb').removeClass('show-anim');

	$('.container-thumb').removeClass('shadow');

	setTimeout(function() {

		$('.nav-menu').removeClass('show');

		setTimeout(function() {

			$('.nav-menu').hide();

		}, 300);

		$('.container-thumb')

			.removeClass('active')

			.removeClass('disable-thumb-1')

			.removeClass('disable-thumb-2')

			.removeClass('disable-thumb-3')

			.removeClass('disable-thumb-4');

			setTimeout(function() {

				$('.overlay-thumb').removeClass('hide');

				$('.container-thumb .overlay-thumb').removeClass('delay');

				setTimeout(function() {

					$('.overlay-thum_text').removeClass('delay');

				}, 800);

			}, 1250);

	}, 500);

})

function activeScreen(){

	if ($('.thumb-1').hasClass('active')) {

		$('.select-thumb').removeClass('active');

		$('.select-thumb-1').addClass('active');

		$('.nav-thumb-open_button.left').addClass('hide');

		$('.nav-thumb-open_button.right').show();

		setTimeout(function() {

			$('.nav-thumb-open_button.right').removeClass('hide');

			$('.nav-thumb-open_button.left').hide();

		}, 250);

	} else if ($('.thumb-2').hasClass('active')) {

		$('.select-thumb').removeClass('active');

		$('.select-thumb-2').addClass('active');

		$('.nav-thumb-open_button').show();

		setTimeout(function() {

			$('.nav-thumb-open_button').removeClass('hide');

		}, 250);

	} else if ($('.thumb-3').hasClass('active')) {

		$('.select-thumb').removeClass('active');

		$('.select-thumb-3').addClass('active');

		$('.nav-thumb-open_button').show();

		setTimeout(function() {

			$('.nav-thumb-open_button').removeClass('hide');

		}, 250);

	} else if ($('.thumb-4').hasClass('active')) {

		$('.select-thumb').removeClass('active');

		$('.select-thumb-4').addClass('active');

		$('.nav-thumb-open_button.right').addClass('hide');

		$('.nav-thumb-open_button.left').show();

		setTimeout(function() {

			$('.nav-thumb-open_button.left').removeClass('hide');

			$('.nav-thumb-open_button.right').hide();

		}, 250);

	}

}

/* ************************************************* */
/* ****************** END NAV MENU ***************** */
/* ************************************************* */


/* ************************************************* */
/* **************** NAV THUMB ACTION *************** */
/* ************************************************* */

$('.container-thumb').click(function() {

	if (!$(this).hasClass('active')) {

		$('.container-thumb')

		.removeClass('active')

		.removeClass('show-anim')

		.removeClass('shadow')

		.removeClass('disable-thumb-1')

		.removeClass('disable-thumb-2')

		.removeClass('disable-thumb-3')

		.removeClass('disable-thumb-4');

		if ($('.nav-container-thumb').hasClass('thumb-open')) {

			$('.overlay-thumb').fadeIn(250);

			setTimeout(function() {

				$('.title-gif').attr('src', '');

				$('.overlay-thumb').addClass('hide');

				$( ".container-thumb .content-thumb" ).scrollTop(0);

			}, 300);

			if ($(this).hasClass('thumb-1')) {

				$('.thumb-1').addClass('active');

				activeScreen();

				$('.thumb-2, .thumb-3, .thumb-4').addClass('disable-thumb-1');

				$('.content-thumb').fadeOut(500);

				setTimeout(function() {

			    	$('.thumb-1 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-arco').attr('src', base_url + "assets/product_custom/arco/" + 'img/Arco.gif');

			    		setTimeout(function() {

			    			$('.thumb-1').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');

									setTimeout(function() {

										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-1').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 1300);

					}, 50);

			  	}, 2000);

			}else if ($(this).hasClass('thumb-2')) {

				$('.thumb-2').addClass('active');

				activeScreen();

				$('.thumb-1, .thumb-3, .thumb-4').addClass('disable-thumb-2');

				$('.content-thumb').fadeOut(500);

				setTimeout(function() {

			    	$('.thumb-2 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-beautifull').attr('src', base_url + "assets/product_custom/arco/" + 'img/Beautifull.gif');

			    		setTimeout(function() {

			    			$('.thumb-2').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');

									setTimeout(function() {

										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-2').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 1300);

					}, 50);

			  	}, 2000);

			}else if ($(this).hasClass('thumb-3')) {

				$('.thumb-3').addClass('active');

				activeScreen();

				$('.thumb-1, .thumb-2, .thumb-4').addClass('disable-thumb-3');

				$('.content-thumb').fadeOut(500);

				setTimeout(function() {

			    	$('.thumb-3 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-features').attr('src', base_url + "assets/product_custom/arco/" + 'img/Features.gif');

			    		setTimeout(function() {

			    			$('.thumb-3').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');

									setTimeout(function() {

										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-3').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 0);

					}, 50);

			  	}, 2000);

			}else if ($(this).hasClass('thumb-4')) {

				$('.thumb-4').addClass('active');

				activeScreen();

				$('.thumb-1, .thumb-2, .thumb-3').addClass('disable-thumb-4');

				$('.content-thumb').fadeOut(500);

				setTimeout(function() {

			    	$('.thumb-4 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-all-screen').attr('src', base_url + "assets/product_custom/arco/" + 'img/All-Screens.gif');

			    		setTimeout(function() {

			    			$('.thumb-4').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');

									setTimeout(function() {

										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-4').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 1300);

					}, 50);

			  	}, 2000);

			};

		}else{

			$('.overlay-thumb').addClass('hide');

			$('.title-gif').attr('src', '');

			setTimeout(function() {

				$('.nav-container-thumb').addClass('thumb-open');

			}, 1500);

			if ($(this).hasClass('thumb-1')) {

				setTimeout(function() {

					$('.thumb-1').addClass('active');

					activeScreen();

					$('.thumb-2, .thumb-3, .thumb-4').addClass('disable-thumb-1');

					$('.content-thumb').fadeOut(500);

				}, 600);

				setTimeout(function() {

			    	$('.thumb-1 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-arco').attr('src', base_url + "assets/product_custom/arco/" + 'img/Arco.gif');

			    		setTimeout(function() {

			    			$('.thumb-1').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');



									setTimeout(function() {



										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-1').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 1300);

					}, 50);

			  	}, 1500);

			}else if ($(this).hasClass('thumb-2')) {

				setTimeout(function() {

					$('.thumb-2').addClass('active');

					activeScreen();

					$('.thumb-1, .thumb-3, .thumb-4').addClass('disable-thumb-2');

					$('.content-thumb').fadeOut(500);

				}, 600);

				setTimeout(function() {

			    	$('.thumb-2 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-beautifull').attr('src', base_url + "assets/product_custom/arco/" + 'img/Beautifull.gif');

			    		setTimeout(function() {

			    			$('.thumb-2').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');

									setTimeout(function() {

										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-2').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 1300);

					}, 50);

			  	}, 1500);

			}else if ($(this).hasClass('thumb-3')) {

				setTimeout(function() {

					$('.thumb-3').addClass('active');

					activeScreen();

					$('.thumb-1, .thumb-2, .thumb-4').addClass('disable-thumb-3');

					$('.content-thumb').fadeOut(500);

				}, 600);

			  	setTimeout(function() {

			    	$('.thumb-3 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-features').attr('src', base_url + "assets/product_custom/arco/" + 'img/Features.gif');

			    		setTimeout(function() {

			    			$('.thumb-3').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');

									setTimeout(function() {

										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-3').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 1300);

					}, 50);

			  	}, 1500);

			}else if ($(this).hasClass('thumb-4')) {

				setTimeout(function() {

					$('.thumb-4').addClass('active');

					activeScreen();

					$('.thumb-1, .thumb-2, .thumb-3').addClass('disable-thumb-4');

					$('.content-thumb').fadeOut(500);

				}, 600);

				setTimeout(function() {

			    	$('.thumb-4 .content-thumb').fadeIn(250);

			    	$('.nav-menu').show();

			    	setTimeout(function() {

			    		$('.title-all-screen').attr('src', base_url + "assets/product_custom/arco/" + 'img/All-Screens.gif');

			    		setTimeout(function() {

			    			$('.thumb-4').addClass('show-anim');

				    			setTimeout(function() {

									$('.nav-menu').addClass('show');

									setTimeout(function() {

										$('.container-thumb.active .overlay-thumb').hide();

										setTimeout(function() {

											$('.thumb-4').addClass('shadow');

										}, 500);

									}, 500);

								}, 2000);

						}, 1300);

					}, 50);

			  	}, 1500);

			};
		}

	};

})

$('.nav-thumb-open_button').click(function(){

	$('.overlay-thumb').fadeIn(250);

	$('.title-gif').attr('src', '');

	setTimeout(function() {

		$('.overlay-thumb').addClass('hide');

		$( ".container-thumb .content-thumb" ).scrollTop(0);

	}, 300);

	$('.content-thumb').fadeOut(500);

	$('.container-thumb')

		.removeClass('show-anim')

		.removeClass('shadow')

		.removeClass('disable-thumb-1')

		.removeClass('disable-thumb-2')

		.removeClass('disable-thumb-3')

		.removeClass('disable-thumb-4');

	if ($(this).hasClass('left')) {

		$('.container-thumb.active')

			.removeClass('active')

			.prev().addClass('active');

			activeScreen();

	}else if ($(this).hasClass('right')){

		$('.container-thumb.active')

			.removeClass('active')

			.next().addClass('active');

			activeScreen();
	}

	if ($('.thumb-1').hasClass('active')) {

			$('.thumb-1 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.container-thumb.active .title-gif').attr('src', base_url + "assets/product_custom/arco/" + 'img/Arco.gif');

			}, 2050);

			$('.thumb-2').addClass('disable-thumb-1');

			$('.thumb-3').addClass('disable-thumb-1');

			$('.thumb-4').addClass('disable-thumb-1');

		} else if ($('.thumb-2').hasClass('active')) {

			$('.thumb-2 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.container-thumb.active .title-gif').attr('src', base_url + "assets/product_custom/arco/" + 'img/Beautifull.gif');

			}, 2050);

			$('.thumb-1').addClass('disable-thumb-2');

			$('.thumb-3').addClass('disable-thumb-2');

			$('.thumb-4').addClass('disable-thumb-2');

		} else if ($('.thumb-3').hasClass('active')) {

			$('.thumb-3 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.title-features').attr('src', base_url + "assets/product_custom/arco/" + 'img/Features.gif');

			}, 2050);

			$('.thumb-1').addClass('disable-thumb-3');

			$('.thumb-2').addClass('disable-thumb-3');

			$('.thumb-4').addClass('disable-thumb-3');

		} else if ($('.thumb-4').hasClass('active')) {

			$('.thumb-4 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.title-all-screen').attr('src', base_url + "assets/product_custom/arco/" + 'img/All-Screens.gif');

			}, 2050);

			$('.thumb-1').addClass('disable-thumb-4');

			$('.thumb-2').addClass('disable-thumb-4');

			$('.thumb-3').addClass('disable-thumb-4');
		};

		setTimeout(function() {

			$('.container-thumb.active .content-thumb').fadeIn(250);

			setTimeout(function() {

				$('.container-thumb.active').addClass('show-anim');

				$('.container-thumb.active .overlay-thumb').hide();

				setTimeout(function() {

					$('.container-thumb.active').addClass('shadow');

				}, 3000);

			}, 50);

		}, 2000);

})

$('.section-next-tumb .cadre-text').click(function(event){

	event.stopPropagation();

	$('.overlay-thumb').fadeIn(250);

	$('.title-gif').attr('src', '');

	setTimeout(function() {

		$('.overlay-thumb').addClass('hide');

		$( ".container-thumb .content-thumb" ).scrollTop(0);

	}, 300);

	$('.content-thumb').fadeOut(500);

	$('.container-thumb')

		.removeClass('shadow')

		.removeClass('show-anim')

		.removeClass('disable-thumb-1')

		.removeClass('disable-thumb-2')

		.removeClass('disable-thumb-3')

		.removeClass('disable-thumb-4');


	$('.container-thumb.active')

		.removeClass('active')

		.next().addClass('active');

		activeScreen();

	if ($('.thumb-1').hasClass('active')) {

			$('.thumb-1 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.container-thumb.active .title-gif').attr('src', base_url + "assets/product_custom/arco/" + 'img/Arco.gif');

			}, 2050);

			$('.thumb-2').addClass('disable-thumb-1');

			$('.thumb-3').addClass('disable-thumb-1');

			$('.thumb-4').addClass('disable-thumb-1');

		} else if ($('.thumb-2').hasClass('active')) {

			$('.thumb-2 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.container-thumb.active .title-gif').attr('src', base_url + "assets/product_custom/arco/" + 'img/Beautifull.gif');

			}, 2050);

			$('.thumb-1').addClass('disable-thumb-2');

			$('.thumb-3').addClass('disable-thumb-2');

			$('.thumb-4').addClass('disable-thumb-2');

		} else if ($('.thumb-3').hasClass('active')) {

			$('.thumb-3 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.title-features').attr('src', base_url + "assets/product_custom/arco/" + 'img/Features.gif');

			}, 2050);

			$('.thumb-1').addClass('disable-thumb-3');

			$('.thumb-2').addClass('disable-thumb-3');

			$('.thumb-4').addClass('disable-thumb-3');

		} else if ($('.thumb-4').hasClass('active')) {

			$('.thumb-4 .content-thumb').fadeIn(500);

			setTimeout(function() {

				$('.title-all-screen').attr('src', base_url + "assets/product_custom/arco/" + 'img/All-Screens.gif');

			}, 2050);

			$('.thumb-1').addClass('disable-thumb-4');

			$('.thumb-2').addClass('disable-thumb-4');

			$('.thumb-3').addClass('disable-thumb-4');
		};

		setTimeout(function() {

			$('.container-thumb.active .content-thumb').fadeIn(250);

			setTimeout(function() {

				$('.container-thumb.active').addClass('show-anim');

				$('.container-thumb.active .overlay-thumb').hide();

				setTimeout(function() {

					$('.container-thumb.active').addClass('shadow');

				}, 3000);

			}, 50);

		}, 2000);

})

$('.see-all-screens').click(function(event) {

	event.stopPropagation();

	$('.container-thumb')

		.removeClass('active')

		.removeClass('show-anim')

		.removeClass('shadow')

		.removeClass('disable-thumb-1')

		.removeClass('disable-thumb-2')

		.removeClass('disable-thumb-3')

		.removeClass('disable-thumb-4');

		$('.thumb-4').addClass('active');

		activeScreen();

		$('.thumb-1, .thumb-2, .thumb-3').addClass('disable-thumb-4');

		$('.content-thumb').fadeOut(500);

		setTimeout(function() {

	    	$('.thumb-4 .content-thumb').fadeIn(250);

	    	$('.nav-menu').show();

	    	setTimeout(function() {

	    		$('.title-all-screen').attr('src', base_url + "assets/product_custom/arco/" + 'img/All-Screens.gif');

	    		setTimeout(function() {

	    			$('.thumb-4').addClass('show-anim');

		    			setTimeout(function() {

							$('.nav-menu').addClass('show');

							setTimeout(function() {

								$('.container-thumb.active .overlay-thumb').hide();

								setTimeout(function() {

									$('.thumb-4').addClass('shadow');

								}, 500);

							}, 500);

						}, 2000);

				}, 1300);

			}, 50);

	  	}, 2000);

})

/* ************************************************* */
/* ************** END NAV THUMB ACTION ************* */
/* ************************************************* */


/* ************************************************* */
/* **************** SCROLL ANIMATION *************** */
/* ************************************************* */


// THUMB 1

$('.thumb-1 .content-thumb').scroll(function() {

	var containerWindow = '.thumb-1';

	var $window = $(containerWindow + ' .content-thumb');

	if ($window.scrollTop() == 0) {

		if ($(containerWindow + ' .content-thumb').hasClass('pres-screen-1')) {

         	$(containerWindow + ' .content-thumb').removeClass('pres-screen-1');

         };

	};

	if ($window.scrollTop() >= $(containerWindow + ' .content-thumb .section-home').height()/2) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-1')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-1');

         };

    };

})


// THUMB 2

$('.thumb-2 .content-thumb').scroll(function() {

	var containerWindow = '.thumb-2';

	var $window = $(containerWindow + ' .content-thumb');

	if ($window.scrollTop() == 0) {

        $(containerWindow + ' .content-thumb').removeClass('pres-screen-1').removeClass('pres-screen-2').removeClass('pres-screen-3').removeClass('pres-screen-4').removeClass('pres-screen-5').removeClass('pres-screen-6').removeClass('pres-screen-7').removeClass('pres-screen-8');

	};

	// ACTIVE ANIM PRES SCREEN 1
    if ($window.scrollTop() >= $(containerWindow + ' .content-thumb .section-home').height()/2) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-1')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-1');

         };

    };

    // ACTIVE ANIM PRES SCREEN 2
    if ($window.scrollTop() >= $(containerWindow + ' .section-home').height()/2 + $(containerWindow + ' .section-pres-screen').height()/8*1 ) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-2')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-2');

         };

    };

    // ACTIVE ANIM PRES SCREEN 3
    if ($window.scrollTop() >= $(containerWindow + ' .section-home').height()/2 + $(containerWindow + ' .section-pres-screen').height()/8*2 ) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-3')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-3');

         };

    };

    // ACTIVE ANIM PRES SCREEN 4
    if ($window.scrollTop() >= $(containerWindow + ' .section-home').height()/2 + $(containerWindow + ' .section-pres-screen').height()/8*3 ) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-4')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-4');

         };

    };

    // ACTIVE ANIM PRES SCREEN 5
    if ($window.scrollTop() >= $(containerWindow + ' .section-home').height()/2 + $(containerWindow + ' .section-pres-screen').height()/8*4 ) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-5')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-5');

         };

    };

    // ACTIVE ANIM PRES SCREEN 6
    if ($window.scrollTop() >= $(containerWindow + ' .section-home').height()/2 + $(containerWindow + ' .section-pres-screen').height()/8*5 ) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-6')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-6');

         };

    };

    // ACTIVE ANIM PRES SCREEN 7
    if ($window.scrollTop() >= $(containerWindow + ' .section-home').height()/2 + $(containerWindow + ' .section-pres-screen').height()/8*6 ) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-7')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-7');

         };

    };

    // ACTIVE ANIM PRES SCREEN 8
    if ($window.scrollTop() >= $(containerWindow + ' .section-home').height()/2 + $(containerWindow + ' .section-pres-screen').height()/8*7 ) {

         if (!$(containerWindow + ' .content-thumb').hasClass('pres-screen-8')) {

         	$(containerWindow + ' .content-thumb').addClass('pres-screen-8');

         };

    };

})


// THUMB 3

$('.thumb-3 .content-thumb').scroll(function() {

	var containerWindow = '.thumb-3';

	var $window = $(containerWindow + ' .content-thumb');

	if ($window.scrollTop() == 0) {

		if ($(containerWindow + ' .content-thumb').hasClass('anim-features-1')) {

         	$(containerWindow + ' .content-thumb').removeClass('anim-features-1');

         };

	};

	if ($window.scrollTop() >= $(containerWindow + ' .content-thumb .section-home').height()/2) {

         if (!$(containerWindow + ' .content-thumb').hasClass('anim-features-1')) {

         	$(containerWindow + ' .content-thumb').addClass('anim-features-1');

         };

         if ($(containerWindow + ' .content-thumb').hasClass('anim-features-2')) {

         	$(containerWindow + ' .content-thumb').removeClass('anim-features-2');

         };

    };

    if ($window.scrollTop() >= $(containerWindow + ' .content-thumb .section-home').height() + $(containerWindow + '.container-features').height()) {

         if (!$(containerWindow + ' .content-thumb').hasClass('anim-features-2')) {

         	$(containerWindow + ' .content-thumb').addClass('anim-features-2');

         };

    }

})
})

/* ************************************************* */
/* **************** SCROLL ANIMATION *************** */
/* ************************************************* */
