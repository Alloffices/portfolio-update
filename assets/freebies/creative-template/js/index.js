/* DOWNLOAD */

$('.container-cover_action_share .container-cover_action_round').click(function() {
	$('.container-cover_action_share').toggleClass('show');
})

/* END DOWNLOAD */

$('.container-cover_action_like').click(function(){
	$('.container-cover_action_like').toggleClass('')
})


/* TAB */

$('.container-info_li_tab .tab').click(function(){
	$('.container-info_li_tab .tab').removeClass('active');
	$(this).addClass('active');
})

$('.tab-screenshot').click(function(){

	$('.container-info_moredetails').addClass('hide');

	setTimeout(function() {
		$('.container-info_moredetails').hide();
		$('.container-info_screenshot').show();
	}, 500);
	setTimeout(function() {
    	$('.container-info_screenshot').removeClass('hide');
		$('.container-info_screenshot').addClass('anim');
  	}, 550);

})

$('.tab-moredetails').click(function(){
	
	$('.container-info_screenshot').addClass('hide');
	$('.container-info_screenshot').removeClass('anim');

	setTimeout(function() {
		$('.container-info_screenshot').hide();
		$('.container-info_moredetails').show();
	}, 500);
	setTimeout(function() {
    	$('.container-info_moredetails').removeClass('hide');
  	}, 550);

})

/* END TAB */

$('.product').mouseenter(function () {

	$(this).find('video').get(0).play();
})

function addToBag(dom){
	//if(!$(dom).parent().parent().parent().find('.check').hasClass("valid")){
		$(dom).parent().parent().parent().find('.check').addClass("valid");
		var container = $(dom);
		var title = $(container).find('.title').text();
		var desc =  $(container).find('.description').text();
		var price =  parseInt($(container).find('.option').eq(0).attr('data-option-price'));
		var id = $(container).find('.id').text();
		var image = window.location.href+$(container).find('.poster').text();
		var option = "";
		$(container).find('.option').each(function(e){
			option += '&option['+e+'][id]='+$(this).attr('data-option-id');
			option += '&option['+e+'][price]='+$(this).attr('data-option-price');
			option += '&option['+e+'][title]='+$(this).attr('data-option-title');
			option += '&option['+e+'][desc]='+$(this).text();
		});
		
		$.ajax({
		  method: "GET",
		  url: '/cart/shoppingData.php',
		  data: 'action=addToCart&title='+title+'&desc='+desc+'&price='+price+'&id='+id+'&image='+image+option
		}).done(function( msg ) {
			$('.header-desktop_shop_number').show();
			$('.header-mobile_bag_number').show();
			$('.header-desktop_shop_number').text(parseInt($('.header-desktop_shop_number').text())+1);
			$('.header-mobile_bag_number').text(parseInt($('.header-mobile_bag_number').text())+1);
			setTimeout(function(){$(dom).parent().parent().parent().find('.check').removeClass("valid")},2000);
			window.location.href= '/cart/';
		});
	//}
	
}