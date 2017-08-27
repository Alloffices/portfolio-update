$(window).load(function(){

  function loadPage(href)
  {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", href, false);
      xmlhttp.send();
      return xmlhttp.responseText;
  }

  //document.getElementById('lightbox').innerHTML = loadPage('all-screens.html');

  $('#loader').addClass('load');
  setTimeout(function() {
    $('.loader-content').addClass('hide');
  }, 1000);
  
  setTimeout(function() {
    $('#loader').fadeOut(500);
  }, 1500);

  setTimeout(function() {
    $('#section-home video').get(0).play();
    $('#section-home').addClass('anim');
    $('body').removeClass('block');
  }, 2000);


  /* LIGHBTOX */
  $('.see-all-slide').click(function(){
      $('body').addClass('block');
      $('#lightbox').show();
    setTimeout(function() {
      $('#lightbox').addClass('show');
    }, 10);
    setTimeout(function() {
      $('#lightbox').addClass('anim-img');
    }, 500);
  })

  $('.lightbox-close').click(function(){
    $('#lightbox').removeClass('show');
    setTimeout(function() {
      $('body').removeClass('block');
      $('#lightbox').hide();
      $('#lightbox').removeClass('anim-img');
    }, 500);
  })
  /* END LIGHTBOX */

	var $head = $( '#container-general' );
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


    $(window).scroll(function(){
        if ($('#container-general').hasClass('active_5')) {
          $('#section-ex_video').get(0).play();
      } else {
          $('#section-ex_video').get(0).paused();
      }
    });

})

