/* INPUT */

$('body').click(function(){

	$('.container-input').removeClass('focus');

});

$('.container-input input').click(function(event){

	event.stopPropagation();

	$('.container-input').removeClass('focus');

	$(this).closest('.container-input').addClass('focus');

}).keyup(function(){


	var $elem = $(this);

	if($elem.val().length > 0){

		$elem.closest('.container-input').addClass('value');

	} else {

		$elem.closest('.container-input').removeClass('value').removeClass('focus');

	}

});

/* END INPUT */


$('#open-shop .container-choice-exclu .exclu-choice').click(function(){

	$('#open-shop .container-choice-exclu .exclu-choice').removeClass('active');

	$(this).addClass('active');

});




	$('#become-seller').on('submit',function (e) {
		e.preventDefault();
		var $elem = $(this);

		$.post($elem.attr('action'),$elem.serialize(),function (data) {
			//var id = parseInt(data.match(/\d+$/gi)[0]);

			data = JSON.parse(data);

			if(data.status == 200){

				$("html, body").animate({
			        scrollTop: 0
			    }, 600);

				setTimeout(function() {

					$('#section-home .confirm-banner').show();

					setTimeout(function() {

						$('#section-home .confirm-banner').addClass('active');
						/*
						setTimeout(function() {

							$('#section-home .confirm-banner').removeClass('active');

							setTimeout(function() {

								window.location = marketMe.baseUrl;

							}, 250);

						}, 7000);
						*/

					}, 50);
				
				}, 600);
				


			} else {
				$('.connect').trigger('click');
			}
			/*console.log(id);
			console.log(data);
			if(data.indexOf("connect yourself : ") > -1 && id ){
				window.location = "http://www.market-me.fr/uploadproduct/login";
			}
			else if( data.indexOf("register yourself : ") > -1 && id  ){
				window.location = "http://www.market-me.fr/uploadproduct/account/" + id;
			}
			else {
				console.log("no");
			}


*/



		});
	});




/*
$('#section-home .confirm-banner .btn').click(function(){

	$('#section-home .confirm-banner').removeClass('active');

	setTimeout(function() {

		$('#section-home .confirm-banner').hide();

	}, 250);

}); */


$('.open-shop').click(function(){

    $('body').animate({ scrollTop: $('#open-shop').offset().top }, 'slow');

    return false;

});


$(function() {
    if (window.matchMedia("(min-width: 850px)").matches) {
      ParallaxScroll.init();
    }
});
