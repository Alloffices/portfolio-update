if (window.matchMedia("(max-width: 1000px)").matches) {
  
  $('#section-1').addClass('anim-afterload');
  $('.hide-bottom').removeClass('hide-bottom').addClass('show');

} else {

    /* LOADER */

        var animationToLoading = document.getElementById("animation-to-landing");

        animationToLoading.beginElement();

        loading();

        function loading(){

            setTimeout(function() {

                $('#loader .background-4').removeClass('show');
                $('#loader .background-1').addClass('show');

                setTimeout(function() {

                    $('#loader .background-1').removeClass('show');
                    $('#loader .background-2').addClass('show');

                    setTimeout(function() {

                        $('#loader .background-2').removeClass('show');
                        $('#loader .background-3').addClass('show');

                        setTimeout(function() {

                            $('#loader .background-3').removeClass('show');
                            $('#loader .background-4').addClass('show');

                            loading();

                        }, 1500);

                    }, 1500);

                }, 1500);

            }, 1500);

        }
        
        $(document).ready(function() {

            var loaded = 0;
            var number_of_media = $("body img").length;

            doProgress();


            // FUNCTION FOR THE PROGRESS BAR
            function doProgress() {
                
                $("img").load(function() {
                    
                    loaded++;
                    
                    var newWidthPercentage = (loaded / number_of_media) * 100;

                    animateLoader(newWidthPercentage);

                    $('.percentage').text(newWidthPercentage.toFixed(0) + '%');

                })

            }   

            //ANIMATE THE LOADER
            function animateLoader(newWidth) {

                if(loaded===(number_of_media)){

                    setTimeout(function() {
               
                    $('#loader .loading').addClass('hide');

                    setTimeout(function() {

                        $('#loader .unlock').fadeIn(500);
                        
                    }, 250);

                }, 1500);
                    
                    
                }
            };

            // IF LOADER CRASH --> FORCE TO HIDE LOADER 
            window.onload = function () { 

                $('.percentage').text('100%');

                setTimeout(function() {
               
                    $('#loader .loading').addClass('hide');

                    setTimeout(function() {

                        $('#loader .unlock').fadeIn(500);
                        
                    }, 250);

                }, 1500);

                

            }

        })

    /* END LOADER */
  
    window.addEventListener('wheel', function(e) {

        if (e.deltaY < 0) {
            /* SCROLLING UP */
            if ($('#container-general').hasClass('ready')) {

                lockAction();

                setTimeout(function() {

                    unLockAction();

                }, 1500);

                if ($('#container-general').hasClass('section-4')) {

                    $('#container-general').removeClass('section-4').addClass('section-3');

                    animationToSection4Tr3.beginElement();

                     setTimeout(function() {

                        animationToSection3.beginElement();

                    }, 500);

                    $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
                    $('#section-4').removeClass('show').addClass('hide-bottom');

                } else if ($('#container-general').hasClass('section-3')) {

                    $('#container-general').removeClass('section-3').addClass('section-2');

                    animationToSection3Tr2.beginElement();

                     setTimeout(function() {

                        animationToSection2.beginElement();
                        

                    }, 500);

                    $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
                    $('#section-3').removeClass('show').addClass('hide-bottom');

                } else if ($('#container-general').hasClass('section-2')) {

                    $('#container-general').removeClass('section-2').addClass('section-1');

                    animationToSection2Tr1.beginElement();

                     setTimeout(function() {

                        animationToSection1.beginElement();

                    }, 500);

                    $('#section-1').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
                    $('#section-2').removeClass('show').addClass('hide-bottom');
                    

                }

            };
        }

        if (e.deltaY > 0) {

            /* SCROLLING DOWN */
            if ($('#container-general').hasClass('ready')) {

                lockAction();

                setTimeout(function() {

                    unLockAction();

                }, 1500);

                if ($('#container-general').hasClass('section-1')) {

                    $('#container-general').removeClass('section-1').addClass('section-2');
                    $('#section-1').removeClass('show').addClass('hide-top');
                    $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                    animationToSection1Tr2.beginElement();
                    
                    

                    setTimeout(function() {

                        animationToSection2.beginElement();
                        

                    }, 500);


                } else if ($('#container-general').hasClass('section-2')) {

                    $('#container-general').removeClass('section-2').addClass('section-3');
                    $('#section-2').removeClass('show').addClass('hide-top');
                    $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                    animationToSection2Tr3.beginElement();

                    setTimeout(function() {

                        animationToSection3.beginElement();

                    }, 500);


                } else if ($('#container-general').hasClass('section-3')) {

                    $('#container-general').removeClass('section-3').addClass('section-4');
                    $('#section-3').removeClass('show').addClass('hide-top');
                    $('#section-4').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                    animationToSection3Tr4.beginElement();

                    setTimeout(function() {

                        animationToSection4.beginElement();

                    }, 500);


                }

            };
        }

        if (e.deltaX > 0) {

            if ($('#container-general').hasClass('ready')) {

                if (!$('#container-general').hasClass('show-navigation')) {
                    $('#container-general').addClass('show-lightbox');
                } else {
                    overlayHide();
                    $('#container-general').removeClass('show-navigation');
                }

            };

        }
        
        if (e.deltaX < 0) {

            if ($('#container-general').hasClass('ready')) {

                if ($('#container-general').hasClass('show-lightbox')) {

                    $('#container-general').removeClass('show-lightbox');

                } else {

                    overlayShow();
                    $('#container-general').addClass('show-navigation');

                }

            };

        }
    });

    var animationToSection1 = document.getElementById("animation-to-section-1");
    var animationToSection1Tr2 = document.getElementById("animation-to-section-1-tr-2");
    var animationToSection1Tr3 = document.getElementById("animation-to-section-1-tr-3");
    var animationToSection1Tr4 = document.getElementById("animation-to-section-1-tr-4");

    var animationToSection2Tr1 = document.getElementById("animation-to-section-2-tr-1");
    var animationToSection2 = document.getElementById("animation-to-section-2");
    var animationToSection2Tr3 = document.getElementById("animation-to-section-2-tr-3");
    var animationToSection2Tr4 = document.getElementById("animation-to-section-2-tr-4");

    var animationToSection3Tr1 = document.getElementById("animation-to-section-3-tr-1");
    var animationToSection3Tr2 = document.getElementById("animation-to-section-3-tr-2");
    var animationToSection3 = document.getElementById("animation-to-section-3");
    var animationToSection3Tr4 = document.getElementById("animation-to-section-3-tr-4");

    var animationToSection4Tr1 = document.getElementById("animation-to-section-4-tr-1");
    var animationToSection4Tr2 = document.getElementById("animation-to-section-4-tr-2");
    var animationToSection4Tr3 = document.getElementById("animation-to-section-4-tr-3");
    var animationToSection4 = document.getElementById("animation-to-section-4");

    animationToSection1.beginElement();


    var animationUnlockToSection1 = document.getElementById("unlock-animation-to-section-1");

    var animationUnlockToSection1Tr2 = document.getElementById("unlock-animation-to-section-1-tr-2");

    var animationUnlockToSection2 = document.getElementById("unlock-animation-to-section-2");


    animationUnlockToSection1.beginElement();

    document.onkeydown = checkKey;

    function lockAction(){
        $('#container-general').removeClass('ready');
    }
    function unLockAction(){
        $('#container-general').addClass('ready');
    }

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            // UP ARROW

            if ($('#container-general').hasClass('ready')) {

                lockAction();

                setTimeout(function() {

                    unLockAction();

                }, 500);

                if ($('#container-general').hasClass('section-4')) {

                    $('#container-general').removeClass('section-4').addClass('section-3');

                    animationToSection4Tr3.beginElement();

                     setTimeout(function() {

                        animationToSection3.beginElement();

                    }, 500);

                    $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
                    $('#section-4').removeClass('show').addClass('hide-bottom');

                } else if ($('#container-general').hasClass('section-3')) {

                    $('#container-general').removeClass('section-3').addClass('section-2');

                    animationToSection3Tr2.beginElement();

                     setTimeout(function() {

                        animationToSection2.beginElement();
                        

                    }, 500);

                    $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
                    $('#section-3').removeClass('show').addClass('hide-bottom');

                } else if ($('#container-general').hasClass('section-2')) {

                    $('#container-general').removeClass('section-2').addClass('section-1');

                    animationToSection2Tr1.beginElement();

                     setTimeout(function() {

                        animationToSection1.beginElement();
                        animationUnlockToSection1.beginElement();

                    }, 500);

                    $('#section-1').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
                    $('#section-2').removeClass('show').addClass('hide-bottom');
                    

                }

            };
            
        }
        else if (e.keyCode == '40') {
            // DOWN ARROW

            if ($('#container-general').hasClass('ready')) {

                lockAction();

                setTimeout(function() {

                    unLockAction();

                }, 500);

                if ($('#container-general').hasClass('section-1')) {

                    $('#container-general').removeClass('section-1').addClass('section-2');
                    $('#section-1').removeClass('show').addClass('hide-top');
                    $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                    animationToSection1Tr2.beginElement();
                    


                     setTimeout(function() {

                        animationToSection2.beginElement();
                        

                    }, 500);

                } else if ($('#container-general').hasClass('section-2')) {

                    $('#container-general').removeClass('section-2').addClass('section-3');
                    $('#section-2').removeClass('show').addClass('hide-top');
                    $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                    animationToSection2Tr3.beginElement();

                     setTimeout(function() {

                        animationToSection3.beginElement();

                    }, 500);


                } else if ($('#container-general').hasClass('section-3')) {

                    $('#container-general').removeClass('section-3').addClass('section-4');
                    $('#section-3').removeClass('show').addClass('hide-top');
                    $('#section-4').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                    animationToSection3Tr4.beginElement();

                     setTimeout(function() {

                        animationToSection4.beginElement();

                    }, 500);


                }

            };

            
        }
        else if (e.keyCode == '37') {
            // RIGHT ARROW

            if ($('#container-general').hasClass('ready')) {

                if (!$('#container-general').hasClass('show-navigation')) {
                    $('#container-general').addClass('show-lightbox');
                } else {
                    overlayHide();
                    $('#container-general').removeClass('show-navigation');
                }

            };

            
        }
        else if (e.keyCode == '39') {
            // LEFT ARROW

            if ($('#container-general').hasClass('ready')) {

                if ($('#container-general').hasClass('show-lightbox')) {

                    $('#container-general').removeClass('show-lightbox');

                } else {

                    overlayShow();
                    $('#container-general').addClass('show-navigation');

                }

            };

        }
        else if (e.keyCode == '13'){
            // ENTER
            $('.buy').click();
        } 
        else if (e.keyCode == '27'){
            // ESC
            $('#container-general').removeClass('show-lightbox');
        } 


    }

    /* NAVIGATION */

    function overlayShow(){
        $('#overlay').show();
        setTimeout(function() {
            $('#overlay').addClass('show');
        }, 50);
    };
    function overlayHide(){
        $('#overlay').removeClass('show');
        setTimeout(function() {
            $('#overlay').hide();
        }, 500);
    };

    $('#navigation .number').click(function(event){
        event.stopPropagation();
        overlayShow();
        $('#container-general').addClass('show-navigation');
    });

    function reset(){

        $('#container-general').removeClass('section-1').removeClass('section-2').removeClass('section-3').removeClass('section-4');

    };


    $('#navigation-action .container-number:nth-child(1)').click(function(){

        if ($('#container-general').hasClass('section-1')) {
            
            

        } else if ($('#container-general').hasClass('section-2')) {

            animationToSection2Tr1.beginElement();
            $('#section-1').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-2').removeClass('show').removeClass('hide-top').addClass('hide-bottom');

        } else if ($('#container-general').hasClass('section-3')) {

            animationToSection3Tr1.beginElement();

            $('#section-1').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-3').removeClass('show').removeClass('hide-top').addClass('hide-bottom');

        } else if ($('#container-general').hasClass('section-4')) {

            animationToSection4Tr1.beginElement();

            $('#section-1').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-4').removeClass('show').removeClass('hide-top').addClass('hide-bottom');

        }

        setTimeout(function() {
            animationToSection1.beginElement();
        }, 500);

        reset();
        $('#container-general').addClass('section-1');
        
    });

    $('#navigation-action .container-number:nth-child(2)').click(function(){

        if ($('#container-general').hasClass('section-1')) {
            
            animationToSection1Tr2.beginElement();
            
            

            $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-1').removeClass('show').removeClass('hide-bottom').addClass('hide-top');

        } else if ($('#container-general').hasClass('section-2')) {

            

        } else if ($('#container-general').hasClass('section-3')) {

            animationToSection3Tr2.beginElement();

            $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-3').removeClass('show').removeClass('hide-top').addClass('hide-bottom');

        } else if ($('#container-general').hasClass('section-4')) {

            animationToSection4Tr2.beginElement();

            $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-4').removeClass('show').removeClass('hide-top').addClass('hide-bottom');

        }

        setTimeout(function() {
            animationToSection2.beginElement();
            
        }, 500);

        reset();
        $('#container-general').addClass('section-2');
        
    });

    $('#navigation-action .container-number:nth-child(3)').click(function(){

        if ($('#container-general').hasClass('section-1')) {
            
            animationToSection1Tr3.beginElement();

            $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-1').removeClass('show').removeClass('hide-bottom').addClass('hide-top');

        } else if ($('#container-general').hasClass('section-2')) {

            animationToSection2Tr3.beginElement();

            $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-2').removeClass('show').removeClass('hide-bottom').addClass('hide-top');

        } else if ($('#container-general').hasClass('section-3')) {

            

        } else if ($('#container-general').hasClass('section-4')) {

            animationToSection4Tr3.beginElement();

            $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-4').removeClass('show').removeClass('hide-top').addClass('hide-bottom');

        }

        setTimeout(function() {
            animationToSection3.beginElement();
        }, 500);

        reset();
        $('#container-general').addClass('section-3');
        
    });

    $('#navigation-action .container-number:nth-child(4)').click(function(){

        if ($('#container-general').hasClass('section-1')) {
            
            animationToSection1Tr4.beginElement();

            $('#section-4').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-1').removeClass('show').removeClass('hide-bottom').addClass('hide-top');

        } else if ($('#container-general').hasClass('section-2')) {

            animationToSection2Tr4.beginElement();

            $('#section-4').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-2').removeClass('show').removeClass('hide-bottom').addClass('hide-top');

        } else if ($('#container-general').hasClass('section-3')) {

            animationToSection3Tr4.beginElement();

            $('#section-4').removeClass('hide-top').removeClass('hide-bottom').addClass('show');
            $('#section-3').removeClass('show').removeClass('hide-bottom').addClass('hide-top');

        } else if ($('#container-general').hasClass('section-4')) {

            

        }

        setTimeout(function() {
            animationToSection4.beginElement();
        }, 500);

        reset();
        $('#container-general').addClass('section-4');
        
    });

    $('body').click(function(){
        overlayHide();
        $('#container-general').removeClass('show-navigation');

    });

    $('.next-section').click(function(){
        if ($('#container-general').hasClass('ready')) {

            lockAction();

            setTimeout(function() {

                unLockAction();

            }, 500);

            if ($('#container-general').hasClass('section-1')) {

                $('#container-general').removeClass('section-1').addClass('section-2');
                $('#section-1').removeClass('show').addClass('hide-top');
                $('#section-2').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                animationToSection1Tr2.beginElement();
                


                 setTimeout(function() {

                    animationToSection2.beginElement();
                    

                }, 500);

            } else if ($('#container-general').hasClass('section-2')) {

                $('#container-general').removeClass('section-2').addClass('section-3');
                $('#section-2').removeClass('show').addClass('hide-top');
                $('#section-3').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                animationToSection2Tr3.beginElement();

                 setTimeout(function() {

                    animationToSection3.beginElement();

                }, 500);


            } else if ($('#container-general').hasClass('section-3')) {

                $('#container-general').removeClass('section-3').addClass('section-4');
                $('#section-3').removeClass('show').addClass('hide-top');
                $('#section-4').removeClass('hide-top').removeClass('hide-bottom').addClass('show');

                animationToSection3Tr4.beginElement();

                 setTimeout(function() {

                    animationToSection4.beginElement();

                }, 500);


            }

        };
    })

    /* END NAVIGATION */


    /* SLIDE TO UNLOCK */

    $(function() {

        $("#loader .drag").draggable({
            axis: 'x',
            containment: 'parent',
            drag: function(event, ui) {

                $('#loader .unlock .content .drop').addClass('active');

                if (ui.position.left > 105) {
                    
                    $('#loader .unlock .content .drop').addClass('hover');
                    
                }

            },
            stop: function(event, ui) {
                if (ui.position.left < 105) {
                    $(this).animate({
                        left: 0
                    })
                    $('#loader .unlock .content .drop').removeClass('hover');
                    $('#loader .unlock .content .drop').removeClass('active');
                } else {
                    $(this).animate({
                        left: 0 
                    })
                    $('#loader .unlock .content .drop').removeClass('hover');
                    $('#loader .unlock .content .drop').removeClass('active');

                    $('#loader').fadeOut(400);

                    setTimeout(function() {
                        $('#section-1').addClass('anim-afterload');
                    }, 500);
                    
                    
                }
            }
        });

        $("#navigation-action .drag").draggable({
            axis: 'x',
            containment: 'parent',
            drag: function(event, ui) {

                $('#navigation-action .unlock .content .drop').addClass('active');

                if (ui.position.left > 105) {
                    
                    $('#navigation-action .unlock .content .drop').addClass('hover');
                    
                }

            },
            stop: function(event, ui) {
                if (ui.position.left < 105) {
                    $(this).animate({
                        left: 0
                    })
                    $('#navigation-action .unlock .content .drop').removeClass('hover');
                    $('#navigation-action .unlock .content .drop').removeClass('active');
                } else {
                    $(this).animate({
                        left: 0 
                    })
                    $('#navigation-action .unlock .content .drop').removeClass('hover');
                    $('#navigation-action .unlock .content .drop').removeClass('active');
                    $('#container-general').removeClass('show-navigation');
                    overlayHide();
                    
                    setTimeout(function() {
                        $('#container-general').addClass('show-lightbox');
                    }, 500);
                    
                }
            }
        });

        $("#unlock .drag").draggable({
            axis: 'x',
            containment: 'parent',
            drag: function(event, ui) {

                $('#unlock .content .drop').addClass('active');

                if (ui.position.left > 105) {
                    
                    $('#unlock .content .drop').addClass('hover');
                    
                }

            },
            stop: function(event, ui) {
                if (ui.position.left < 105) {
                    $(this).animate({
                        left: 0
                    })
                    $('#unlock .content .drop').removeClass('hover');
                    $('#unlock .content .drop').removeClass('active');
                    
                } else {
                    $(this).animate({
                        left: 0 
                    })
                    $('#unlock .content .drop').removeClass('hover');
                    $('#unlock .content .drop').removeClass('active');
                    
                    $('#container-general').addClass('show-lightbox');

                }
            }
        });
    });

    /* END SLIDE TO UNLOCK */

}

$('#lightbox .close').click(function(){
        $('#container-general').removeClass('show-lightbox');
    })

 /* CLICK ICONS */

$('#section-2 .thumb').click(function(){

    $('#container-general').addClass('show-lightbox');

})

$('.thumb:nth-child(1)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-animals').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(2)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-bio').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(3)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-camping').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(4)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-food').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(5)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-interface').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(6)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-meteo').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(7)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-music').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(8)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-pages').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(9)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-users').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(10)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-vehicles').offset().top }, 'slow');
    return false;
})
$('.thumb:nth-child(11)').click(function(){
    $('#lightbox').animate({ scrollTop: $('#href-shop').offset().top }, 'slow');
    return false;
})



/* END CLICK ICONS */

/* BUY ANIM */

$('.buy').click(function(){
    $(this).addClass('anim');
})

/* END BUY ANIM */

