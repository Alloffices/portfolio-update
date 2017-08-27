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

$('.forgot-password-form').on('submit',function (e) {
	e.preventDefault()
	var $form = $(this);
	var $submitButton = $form.find('button[type="submit"]');
	$submitButton.removeClass('false').removeClass('true').addClass('loading');
	$submitButton.prop( "disabled", true );
	$.post($form.attr('action'), $form.serialize(),function (data) {
		data = JSON.parse(data);
		$submitButton.removeClass('loading');
		if(data.status == 200){
			$form.find('.error').html("");
			$submitButton.addClass('true');

			$form.find('.success').html(data.result).show()
		} else {

			$submitButton.addClass('false');
			$form.find('.success').html("");

			$form.find('.error').html(data.result).show()

		}
		$submitButton.prop( "disabled", false );
	})
})


/* END INPUT */
