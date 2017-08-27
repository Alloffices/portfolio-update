jQuery(document).ready(function(){

	$ = jQuery;
	var largeur = window.innerWidth ;

	$text_color = php_data_color.text_color;
	$text_size = php_data_color.text_size + 'px';
	$text_lh = parseInt(php_data_color.text_size, 10) + 6 + 'px';
	$text_stand_font = php_data_color.text_stand_font;
	$text_google_font = php_data_color.text_google_font;
	$text_font = $text_stand_font;
	$h1_color = php_data_color.h1_color;
	$h1_size = php_data_color.h1_size + 'px';
	$h1_stand_font = php_data_color.h1_stand_font;
	$h1_google_font = php_data_color.h1_google_font;
	$h1_font = $h1_stand_font;
	$h2_color = php_data_color.h2_color;
	$h2_size = php_data_color.h2_size + 'px';
	$h2_lh = parseInt(php_data_color.h2_size, 10) + 3 + 'px';
	$h2_stand_font = php_data_color.h2_stand_font;
	$h2_google_font = php_data_color.h2_google_font;
	$h2_font = $h2_stand_font;
	$h3_color = php_data_color.h3_color;
	$h3_size = php_data_color.h3_size + 'px';
	$h3_lh = parseInt(php_data_color.h3_size, 10) + 8 + 'px';
	$h3_stand_font = php_data_color.h3_stand_font;
	$h3_google_font = php_data_color.h3_google_font;
	$h3_font = $h3_stand_font;
	$h4_color = php_data_color.h4_color;
	$h4_size = php_data_color.h4_size + 'px';
	$h4_lh = parseInt(php_data_color.h4_size, 10) + 8 + 'px';
	$h4_stand_font = php_data_color.h4_stand_font;
	$h4_google_font = php_data_color.h4_google_font;
	$h4_font = $h4_stand_font;
	$h5_color = php_data_color.h5_color;
	$h5_size = php_data_color.h5_size + 'px';
	$h5_lh = parseInt(php_data_color.h5_size, 10) + 8 + 'px';
	$h5_stand_font = php_data_color.h5_stand_font;
	$h5_google_font = php_data_color.h5_google_font;
	$h5_font = $h5_stand_font;
	$h6_color = php_data_color.h6_color;
	$h6_size = php_data_color.h6_size + 'px';
	$h6_lh = parseInt(php_data_color.h6_size, 10) + 8 + 'px';
	$h6_stand_font = php_data_color.h6_stand_font;
	$h6_google_font = php_data_color.h6_google_font;
	$h6_font = $h6_stand_font;
	$h1_header_color = php_data_color.header_h1_color;
	$h1_header_size = php_data_color.header_h1_size + 'px';
	$h1_header_stand_font = php_data_color.header_h1_stand_font;
	$h1_header_google_font = php_data_color.header_h1_google_font;
	$h1_header_font = $h1_header_stand_font;
	$h1_header_lh = parseInt(php_data_color.header_h1_size, 10) + 5 + 'px';
	$text_header_color = php_data_color.header_text_color;
	$text_header_size = php_data_color.header_text_size + 'px';
	$text_header_stand_font = php_data_color.header_text_stand_font;
	$text_header_google_font = php_data_color.header_text_google_font;
	$text_header_font = $text_header_stand_font;
	$text_header_lh = parseInt(php_data_color.header_text_size, 10) + 4 + 'px';
	$text_photo_slide_color = php_data_color.photo_slide_text_color;
	$text_sentence_slide_color = php_data_color.sentence_slide_text_color;
	$carousel_title_color = php_data_color.carousel_title_color;
	$carousel_text_color = php_data_color.carousel_text_color;
	$showcase_title_color = php_data_color.showcase_title_color;
	$first_color = php_data_color.first_color;
	/*$second_color = php_data_color.second_color;
	$third_color = php_data_color.third_color;*/
	$timeline_color = php_data_color.timeline_color;
	$thumbnail_color = php_data_color.thumbnail_color;
	$carousel_color = php_data_color.carousel_color;
	$gallery_color = php_data_color.gallery_color;
	// $showcase_color = php_data_color.showcase_color;
	$news_color = php_data_color.news_color;
	$top_bar_height = php_data_color.top_bar_height;
	$logo_height = parseInt($top_bar_height) - 10;
	$gallery_height_pict = php_data_color.gallery_height_pict;

	function increaseFz(initFont, choiceFz) {
		var fontSize = initFont.split('px')[0];
		var fontInt = parseInt(fontSize) + parseInt(choiceFz);
		fontSize = fontInt + 'px';
		return fontSize;
	}

	function responsiveFz(){
		if(largeur<768) {
			$text_size = increaseFz($text_size, 8);
			$text_lh = increaseFz($text_lh, 6);
			$h3_size = increaseFz($h3_size, 12);
			$h3_lh = increaseFz($h3_lh, 10);
			$h2_size = increaseFz($h2_size, 18);
			$h2_lh = increaseFz($h2_lh, 19);
			$h1_size = increaseFz($h1_size, 15);
		}
	}
	responsiveFz();

	var all_first_bgc_color = jQuery('.cat-button').add(jQuery('#sidebar ul li input[type="submit"], .left_contact_content input[type="submit"]')).add(jQuery('#view_all_posts p')).add(jQuery('.discover')).add(jQuery('.comments input[type=submit]'));
	var all_first_text_color = jQuery('.sub_title').add(jQuery('.thumb span')).add(jQuery('.title')).add(jQuery('.news_by h6')).add(jQuery('.read_more a h6'));
	var all_first_bgch_color = jQuery('.close_button').add(jQuery('.top_button')).add(jQuery('.bottom_button'));
	var catp = jQuery('.cat p').add($('#sidebar a')).add($('.showcase_desc')).add($('a.zilla-likes')).add($('.nb_comments a')).add($('body'));
	var h1 = jQuery('.cat h1');
	var h2 = jQuery('.cat h2').add($('#container_description_showcase h2'));
	var h3 = jQuery('.cat h3');
	var h4 = jQuery('.cat h4');
	var h5 = jQuery('.cat h5');
	var h6 = jQuery('.cat h6');
	var header_h1 = $('.text_header h1');
	var header_text = $('.text_header_contain');
	var photo_slide_h1 = $('.flexslides h1, .da-slide h1, .da-slide p');
	var carousel_title = $('.title_showcase');
	var carousel_text = $('.showcase_desc');
	var showcase_title = $('.description h2');
	var showcase_text = $('.description p');
	var timeline = $('.story').parent().add($('.event label, .event input[type="radio"]'));
	var thumbnail = $('.global_team');
	var carousel = $('.products').parent();
	var gallery = $('.services').parent();
	var showcase = $('.global_work');
	var news = $('.thenews').parent();
	var lb_album = $('.lb-album li');
	var hover_thumb = $('hover-zoom img').add($('hover-mail img'));
	var rbgridli = $('.rb-grid li');
	var topBar = $('#header_desktop');
	var logo = $('#logo img');
	var gallery_height = $('.all_services');
	var gallery_img_mh = $('.all_services img');

	/*news.css('background-color', $news_color);
	//showcase.css('background-color', $showcase_color);
	gallery.css('background-color', $gallery_color);
	timeline.css('background-color', $timeline_color);
	thumbnail.css('background-color', $thumbnail_color);
	carousel.css('background-color', $carousel_color);*/

	if($h1_google_font != "0"){ $h1_font = $h1_google_font; }
	if($h2_google_font != "0"){ $h2_font = $h2_google_font; }
	if($h3_google_font != "0"){ $h3_font = $h3_google_font; }
	if($h4_google_font != "0"){ $h4_font = $h4_google_font; }
	if($h5_google_font != "0"){ $h5_font = $h5_google_font; }
	if($h6_google_font != "0"){ $h6_font = $h6_google_font; }
	if($h1_header_google_font != "0"){ $h1_header_font = $h1_header_google_font; }
	if($text_header_google_font != "0"){ $text_header_font = $text_header_google_font; }
	if($text_google_font != "0"){ $text_font = $text_google_font; }

	catp.css({'color': $text_color, 'font-size': $text_size, 'line-height': $text_lh, 'font-family': $text_font});
	jQuery('.menu_links').attr('data-color1',$text_color).attr('data-color2',$first_color);
	h1.css({'color': $h1_color, 'font-size': $h1_size, 'line-height': $h1_size, 'font-family': $h1_font});
	jQuery('.header-desktop_container li a').css('font-family',$h1_font);
	photo_slide_h1.css({'font-size': $h1_size, 'line-height': $h1_size, 'font-family': $h1_font});
	h2.css({'color': $h2_color, 'font-size': $h2_size, 'line-height': $h2_lh, 'font-family': $h2_font});
	h3.css({'color': $h3_color, 'font-size': $h3_size, 'line-height': $h3_lh, 'font-family': $h3_font});
	h4.css({'color': $h4_color, 'font-size': $h4_size, 'line-height': $h4_lh, 'font-family': $h4_font});
	h5.css({'color': $h5_color, 'font-size': $h5_size, 'line-height': $h5_lh, 'font-family': $h5_font});
	h6.css({'color': $h6_color, 'font-size': $h6_size, 'line-height': $h6_lh, 'font-family': $h6_font});
	// header_h1.css({'color': $h1_header_color, 'font-size': $h1_header_size, 'line-height': $h1_header_lh, 'font-family': $h1_header_font});
	// header_text.css({'color': $text_header_color, 'font-size': $text_header_size, 'line-height': $text_header_lh, 'font-family': $text_header_font});
	// carousel_title.css('color', $carousel_title_color);
	carousel_text.css('color', $carousel_text_color);
	showcase_title.css('color', $showcase_title_color);

	topBar.css({'height': $top_bar_height, 'line-height': $top_bar_height+'px'});
	logo.css('height', $logo_height);

	gallery_height.css('height', $gallery_height_pict);
	gallery_img_mh.css('max-height', $gallery_height_pict);

	all_first_bgc_color.css('background-color', $first_color);
	all_first_text_color.css('color', $first_color);
	all_first_bgch_color.hover(function(){
		$(this).css('background-color',$first_color);
	},function(){
		$(this).css('background-color','#fff');
	})
	jQuery('.button_products.active_product').css('border-color',$first_color);
	jQuery('.button_products').on('click',function(){
		$(this).parent().parent().find('.button_products').css('border-color','#999');
		$(this).css('border-color',$first_color);
	})
	jQuery('.button_team.active_team').css('border-color',$first_color);
	jQuery('.button_team').on('click',function(){
		$(this).parent().parent().find('.button_team').css('border-color','#999');
		$(this).css('border-color',$first_color);
	})
	jQuery('.timeline .event:nth-child(1) label svg circle').css('stroke',$first_color);
	if(jQuery(window).width() <= 769){
		jQuery('#top').css('background-color', $first_color);
		jQuery('#top_content').css('background-color', $first_color);
	} else {
		jQuery('#top').css('background-color', 'rgba(0,0,0,0)');
		jQuery('#top_cotent').css('background-color', 'rgba(0,0,0,0)');
	}
	jQuery(window).resize(function() {
		if(jQuery(window).width() <= 769){
			jQuery('#top').css('background-color', $first_color);
			jQuery('#top_content').css('background-color', $first_color);
		} else {
			jQuery('#top').css('background-color', 'rgba(0,0,0,0)');
			jQuery('#top_content').css('background-color', 'rgba(0,0,0,0)');
		}
		if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) {
		jQuery('#top').css('background-color', $first_color);
		jQuery('#top_content').css('background-color', $first_color);
	}
	});
	if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) {
		jQuery('#top').css('background-color', $first_color);
		jQuery('#top_content').css('background-color', $first_color);
	}

	/*function nbcolsthumb(){
		if(largeur>768){
			if($cols_thumbnail == "cols2") {
				$(lb_album).css('width','45%');
			}else if($cols_thumbnail == "cols3"){
				$(lb_album).css('width','28%');
			}
		} else if(largeur<768) {
			if($cols_thumbnail == "cols2") {
				$(lb_album).css('width','95%');
			}else if($cols_thumbnail == "cols3"){
				$(lb_album).css('width','45%');
			}
		}
	}
	nbcolsthumb();*/
		
});