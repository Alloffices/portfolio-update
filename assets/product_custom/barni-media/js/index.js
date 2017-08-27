$(window).load(function(){

  $('#loader').addClass('transition');

  $('.loader-bar-1').addClass('hide');

  setTimeout(function() {
    $('.loader-title-1').addClass('top');
    $('.loader-bar-2').addClass('show');
  }, 250);

  setTimeout(function() {
    $('.loader-title-2').addClass('show');
  }, 500);

  setTimeout(function() {
    $('#loader').addClass('hide');
  }, 2000);

  setTimeout(function() {
    $('.section-home_title').addClass('anim');

    $('#header-desktop').addClass('show');
  }, 2300);

  setTimeout(function() {
    $('#header-desktop').addClass('show');
  }, 3000);

  setTimeout(function() {

    $('body').removeClass('block');
  }, 3300);

});

/* -------------------- HEADER C -------------------- */

$(window).scroll(function () {
    if ($(window).scrollTop() > 120) {
       $('#header-desktop-c').addClass('show');
    } else {
       $('#header-desktop-c').removeClass('show');
    }
})
/* -------------------- END HEADER C -------------------- */


/* -------------------- LIGHTBOX -------------------- */

$('.see-all-og-them').click(function(){

  $('#nav-general').toggleClass('hide');

  $('#header-desktop').toggleClass('hide');


  setTimeout(function() {

      $('#container_general').toggleClass('hide');

      $('body').toggleClass('block');

  }, 500);


  setTimeout(function() {

      $('#lightbox').addClass('show');

      $('#header-lightbox').addClass('show');

  }, 1250);

});


$('.header-lightbox_close').click(function(){

      $('#lightbox').removeClass('show');

      $('#header-lightbox').removeClass('show');


  setTimeout(function() {

    $('#container_general').removeClass('hide');

    $('body').removeClass('block');

  }, 500);

  setTimeout(function() {

      $('#nav-general').removeClass('hide');

      $('#header-desktop').removeClass('hide');

  }, 1250);

});

$('.header-lightbox_buy').click(function(){

  $('.header-lightbox_buy').addClass('check');

  setTimeout(function() {

    $('.header-lightbox_buy').removeClass('check');

  }, 2000);

})

$('.header-lightbox_content li:nth-child(1)').click(function(){

      $('#lightbox').removeClass('show');

      $('#header-lightbox').removeClass('show');


  setTimeout(function() {

    $('#container_general').removeClass('hide');

    $('body').removeClass('block');

  }, 500);

  setTimeout(function() {

      $('#nav-general').removeClass('hide');

      $('#header-desktop').removeClass('hide');

  }, 1250);

});


function loadPage(href)
  {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", href, false);
      xmlhttp.send();
      return xmlhttp.responseText;
  }


$('.see-all-og-them').click(function(){

  if ($(this).hasClass('components')) {

    $('.header-lightbox_content li').removeClass('active');

    $('.header-lightbox_content li:nth-child(2)').addClass('active');

    $('#content-lightbox_1').show().removeClass('left').addClass('active').nextAll().addClass('right').hide();

    document.getElementById('content-lightbox_1').innerHTML = loadPage(base_url + "assets/product_custom/barni-media/"+ 'screen-load-content-1.html');

  } else if ($(this).hasClass('media')) {

    $('.header-lightbox_content li').removeClass('active');

    $('.header-lightbox_content li:nth-child(3)').addClass('active');

    $('#content-lightbox_1').addClass('left').hide();

    $('#content-lightbox_2').show().removeClass('right').removeClass('left').addClass('active').nextAll().addClass('right').hide();

    document.getElementById('content-lightbox_2').innerHTML =loadPage(base_url + "assets/product_custom/barni-media/"+ 'screen-load-content-2.html');

  }


})


$('.header-lightbox_content li').click(function(){

  if ($(this).hasClass('able')) {

    $('.header-lightbox_content li').removeClass('active');

    $(this).addClass('active');

  };

});



$('.header-lightbox_content ul li').click(function(){

  var contentLightbox=$(this).data('content-lightbox');


  if ($(this).hasClass('able')) {

    $('.header-lightbox_content ul li').removeClass('able');


    $('.'+contentLightbox)

    .show();

    setTimeout(function() {

      $('.'+contentLightbox)

        .removeClass('right')

        .removeClass('left')

        .addClass('active')

        .prevAll()

        .removeClass('active')

        .removeClass('right')

        .addClass('left');

      $('.'+contentLightbox)

        .nextAll()

        .removeClass('left')

        .removeClass('active')

        .addClass('right');

    }, 1);


    setTimeout(function() {

      $('.'+contentLightbox)

        .prevAll()

        .hide();

      $('.'+contentLightbox)

        .nextAll()

        .hide();

        $('.header-lightbox_content ul li:nth-child(2)').addClass('able');
        $('.header-lightbox_content ul li:nth-child(3)').addClass('able');
        $('.header-lightbox_content ul li:nth-child(4)').addClass('able');
        $('.header-lightbox_content ul li:nth-child(5)').addClass('able');

    }, 450);

  }


  if ($('content-lightbox_1:visible')){

      document.getElementById('content-lightbox_1').innerHTML = loadPage(base_url + "assets/product_custom/barni-media/"+ 'screen-load-content-1.html');


  }

  if ($('content-lightbox_2:visible')){

      document.getElementById('content-lightbox_2').innerHTML = loadPage(base_url + "assets/product_custom/barni-media/"+ 'screen-load-content-2.html');


  }

  if ($('content-lightbox_3:visible')){

      document.getElementById('content-lightbox_3').innerHTML = loadPage(base_url + "assets/product_custom/barni-media/"+ 'screen-load-content-3.html');


  }

   if ($('content-lightbox_4:visible')){

      document.getElementById('content-lightbox_4').innerHTML = loadPage(base_url + "assets/product_custom/barni-media/"+ 'screen-load-content-4.html');


  };

});



/* -------------------- END LIGHTBOX -------------------- */


/* -------------------- HEADER MOBILE -------------------- */

$('.header-mobile_open').click(function(){
  $(this).toggleClass('active');
  $('.header_responsive_content').toggleClass('active');
})

/* -------------------- END HEADER MOBILE -------------------- */


/* -------------------- CONTAINER GENERAL -------------------- */

$('a[href^="#"]')
  .click(function() {
    var id = $(this)
      .attr("href");
    var offset = $(id)
      .offset()
      .top
    $('html, body')
      .animate({
        scrollTop: offset
      }, 'slow');
    return false;
  })

var $head = $( '#container_general' );
    $( '.ha-waypoint' ).each( function(i) {
      var $el = $( this ),
        animClassDown = $el.data( 'animateDown' ),
        animClassUp = $el.data( 'animateUp' );

      $el.waypoint( function( direction ) {
        if( direction === 'down' && animClassDown ) {
          $head.attr('class', ' ' + animClassDown);
        }
        else if( direction === 'up' && animClassUp ){
          $head.attr('class', ' ' + animClassUp);
        }
      }, { offset: '100%' } );
    } );




$('.section-sliders_img.active').click(function(){

  $('.section-slider_content:nth-child(1)')

    .removeClass('first')

    .addClass('past')

    .next()

    .removeClass('second')

    .addClass('first')

    .next()

    .removeClass('third')

    .addClass('second')

    .next()

    .removeClass('last')

    .addClass('third');


    setTimeout(function() {

      $('.section-slider_content:nth-child(1)')

        .insertAfter('.section-slider_content:nth-last-child(1)')

        .removeClass('past')

        .addClass('last');

    }, 400);

})



/* -------------------- END CONTAINER GENERAL -------------------- */


/* TEST */
