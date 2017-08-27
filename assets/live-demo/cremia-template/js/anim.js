$(window).load(function(){

	$('.loader').fadeOut(0);

	setTimeout(function() {
		$('.title_home')
			.addClass('anim_1');
	}, 1000);
	setTimeout(function() {
		$('.bar_title_home_slice')
			.addClass('anim');
	}, 2500);
	setTimeout(function() {
		$('.text_title_home_slice')
			.addClass('anim');
	}, 2700);
	setTimeout(function() {
		$('.rectangle_blanc_background_anim')
			.addClass('anim');
	}, 3400);
	setTimeout(function() {
		$('.container_svg_round_img')
			.addClass('anim');
	}, 3400);
	setTimeout(function() {
		$('.container_background_img_home')
			.addClass('anim');
	}, 3500);
	setTimeout(function() {
		$('.title_home_slice_2')
			.addClass('white');
	}, 3900);
	setTimeout(function() {
		$('.title_home_slice_1')
			.addClass('white');
	}, 3900);
	setTimeout(function() {
		$('.subtitle_home')
			.addClass('anim');
	}, 4100);
	setTimeout(function() {
		$('.slide_home')
			.addClass('anim');
	}, 4600);
	setTimeout(function() {
		$('body')
			.addClass('active');
	}, 4600);

})