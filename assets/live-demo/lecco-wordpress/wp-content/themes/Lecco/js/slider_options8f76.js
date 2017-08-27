jQuery(document).ready(function() {

	$var_1 = php_data.transition_header;
	$var_2 = php_data.navigation_header;
	$var_3 = php_data.auto_header;
	$blog_title = php_data.blog_title;
	$arrow_prev = '<svg width="26px" height="12px" viewBox="0 0 26 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1368.000000, -4175.000000)" fill="#393939"><g transform="translate(0.000000, 3881.000000)"><g transform="translate(1321.000000, 240.000000)"><path d="M64.29,65.793 L60.999,69.086 L60.999,48.5 C60.999,47.948 60.552,47.5 60,47.5 C59.448,47.5 59.001,47.948 59.001,48.5 L59.001,69.086 L55.71,65.793 C55.32,65.402 54.687,65.402 54.297,65.793 C53.907,66.184 53.907,66.816 54.297,67.207 L59.293,72.207 C59.474,72.388 59.724,72.5 60,72.5 C60.276,72.5 60.526,72.388 60.707,72.207 L65.703,67.207 C66.093,66.816 66.093,66.184 65.703,65.793 C65.312,65.402 64.68,65.402 64.29,65.793 Z" id="Imported-Layers-Copy-3" transform="translate(60.000000, 60.000000) rotate(-90.000000) translate(-60.000000, -60.000000) "></path></g></g></g></g></svg>';
	$arrow_next = '<svg width="26px" height="12px" viewBox="0 0 26 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1368.000000, -4175.000000)" fill="#393939"><g transform="translate(0.000000, 3881.000000)"><g transform="translate(1321.000000, 240.000000)"><path d="M64.29,65.793 L60.999,69.086 L60.999,48.5 C60.999,47.948 60.552,47.5 60,47.5 C59.448,47.5 59.001,47.948 59.001,48.5 L59.001,69.086 L55.71,65.793 C55.32,65.402 54.687,65.402 54.297,65.793 C53.907,66.184 53.907,66.816 54.297,67.207 L59.293,72.207 C59.474,72.388 59.724,72.5 60,72.5 C60.276,72.5 60.526,72.388 60.707,72.207 L65.703,67.207 C66.093,66.816 66.093,66.184 65.703,65.793 C65.312,65.402 64.68,65.402 64.29,65.793 Z" id="Imported-Layers-Copy-3" transform="translate(60.000000, 60.000000) rotate(-90.000000) translate(-60.000000, -60.000000) "></path></g></g></g></g></svg>';
	$var_4 = php_data.auto_photos;
	$var_5 = php_data.random_photos;
	$var_8 = php_data.transition_photo;
	$var_6 = php_data.auto_sentences;
	$var_7 = php_data.transition_sentences;

	jQuery(function(){
		$('.flexslider').flexslider({
			animation: "fade",
			startAt: 0, 
			controlNav: true,               
			directionNav: true,       
			prevText: $arrow_prev,           
			nextText: $arrow_next,
			animationLoop: true,
			animationSpeed: 1500,
			slideshow: 0,
			slideshowSpeed: $(this).data('random'),
			randomize: $(this).data('transition'),
		});
	});

	jQuery(function(){
	  $("#slides").slidesjs({
	    width: 2000,
	    height: 2000,
	    play: {
			auto: $var_3,
			interval: $var_1,
			pauseOnHover: true
		},
		navigation: {
	      active: $var_2,
	      effect: "fade"
	    }
	  });
	});

	jQuery(function() {
	
		$('.da-slider').cslider({
			autoplay: $(this).data('auto'),
			interval    : $(this).data('interval')
		});
		
	});

});