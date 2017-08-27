$('body').click(function(){
	$('.container-input').removeClass('focus');
});

/* INPUT */

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

$('#lightbox-log .close').click(function(){
	$('#lightbox-log').fadeOut(500);
});

$('.container-login .footer .login').click(function(){
	$('.container-login .footer .login').addClass('loading');
	var $elem = $(this);
	$.post(marketMe.baseUrl +'login', $('.container-login').serialize(), function (data) {

		data = JSON.parse(data);
		if(data.success) {
			setTimeout(function () {
				$('.container-login .footer .login').removeClass('loading').addClass('true');


				setTimeout(function () {
					$('.container-login .footer .login').removeClass('true');
					$('#lightbox-log').fadeOut(500);
					window.location.reload();
				}, 500);

			}, 1500);
		} else {
			$('.container-login .footer .login').removeClass('loading');
			$('.container-login').find('.error-field').html(data.result)
		}

	});

});


$('.container-login .footer .create-account').click(function(){
	$('.container-login').addClass('hide');
	setTimeout(function() {
		$('.container-login').hide();
		$('.container-signup').show();
		setTimeout(function() {
			$('.container-signup').removeClass('hide');
		}, 50);
	}, 500);
});


$('.container-signup .footer .create-account').click(function(){
	$('.container-signup .footer .create-account').addClass('loading');
	var $elem = $(this);
	$.post(marketMe.baseUrl +'register', $('.container-signup').serialize(), function (data) {

		data = JSON.parse(data);
		$('.container-login .footer .login').removeClass('loading');
		if(data.success) {

				$('.container-signup .footer .create-account').removeClass('loading').addClass('true');
				setTimeout(function () {
					$('.container-signup .footer .create-account').removeClass('true');
					$('#lightbox-log').fadeOut(500);
					window.location.reload();
				}, 500);

		} else {
			$('.container-signup .footer .create-account').removeClass('loading');
			$('.container-signup').find('.error-field').html(data.result)
		}
	});


});

$('.container-signup .footer .login').click(function(){
	$('.container-signup').addClass('hide');
	setTimeout(function() {
		$('.container-signup').hide();
		$('.container-login').show();
		setTimeout(function() {
			$('.container-login').removeClass('hide');
		}, 50);
	}, 500);
});
