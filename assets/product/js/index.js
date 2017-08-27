
if(typeof Likes != "undefined"){
  var likes = new Likes('.product-thumb .like');
} else {
  var likes = null;
}

$( document ).ready(function() {


$('.nav-info div').click(function(){
    $('.nav-info div').removeClass('active')
    $(this).addClass('active');
  })

  $('.nav-info div:nth-child(1)').click(function(){
    $('.container-2').addClass('hide');

    setTimeout(function() {
      $('.container-2').hide();
      $('.container-1').show();
      setTimeout(function() {
        $('.container-1').removeClass('hide');
      }, 50);
    }, 250);
  })

  $('.nav-info div:nth-child(2)').click(function(){
    $('.container-1').addClass('hide');

    setTimeout(function() {
      $('.container-1').hide();
      $('.container-2').show();
      setTimeout(function() {
        $('.container-2').removeClass('hide');
      }, 50);
    }, 250);
  })


/*
  $('#container-product-detail > .container-info').css('min-height', $('.container-info > .action').height()+45); */

  /* CLOSE LIGHTBOX CART */

  $('#cart-review').click(function(){
    $(this).fadeOut(400);
  })

  $('#cart-review .container-payment').click(function(event){
    event.stopPropagation();
  })


  /* LIGHBTOX PREVIEW */

  $('.container-info .action .preview:not(.preview_link)').click(function(){
    $('.lightbox-preview').fadeIn(400);
    $('body').addClass('block');
  })

  $('.lightbox-preview').click(function(){
    $('.lightbox-preview').fadeOut(400);
    $('body').removeClass('block');
  })

  $('.lightbox-preview .preview').click(function(event){
    event.stopPropagation();
  })



});
