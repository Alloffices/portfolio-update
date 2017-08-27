function bindLightboxPayement() {



    $('body').unbind('click').click(function() {
        $('.container-input').removeClass('focus');
    }).on('click', '.bag', function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        /*$.get(marketMe.baseUrl+'payment/lightbox',function (data) {
        	data = JSON.parse(data);


        });*/

        $('#payment-lightbox').fadeIn(400);
        if (!$("#header-action").hasClass("style-1")) {
            $("#header-action").removeClass("style-2").addClass('style-1 temp');
        }
    });





    /* INPUT */

    $('.container-input input').click(function(event) {
        event.stopPropagation();
        $('.container-input').removeClass('focus');
        $(this).closest('.container-input').addClass('focus');

    }).keyup(function() {
        var $elem = $(this);

        if ($elem.val().length > 0) {
            $elem.closest('.container-input').addClass('value');
        } else {
            $elem.closest('.container-input').removeClass('value').removeClass('focus');
        }
    });

    /* END INPUT */

    /* GUEST */

    $('.container-payment .head-payment .guest').click(function() {
        $(this).toggleClass('active');

        $('.container-payment').removeClass('mode-payment-method').addClass('mode-login');

        $('.content-payment.login .content .guest').removeClass('active');
        $('.content-payment.signup .content .guest').removeClass('active');
        $('.container-payment').removeClass('mode-guest');
    });

    $('.content-payment.login .content .guest').click(function() {

        $(this).toggleClass('active');

        $('.container-payment').removeClass('mode-login').addClass('mode-payment-method');

        $('.container-payment .head-payment .guest').addClass('active');
        $('.container-payment').addClass('mode-guest');
    });

    $('.content-payment.signup .content .guest').click(function() {
        $(this).toggleClass('active');

        $('.container-payment').removeClass('mode-signup').addClass('mode-payment-method');

        $('.container-payment .head-payment .guest').addClass('active');
        $('.container-payment').addClass('mode-guest');
    });


    /* END GUEST */
/*
Debug

 */

    $('.content-payment.login .footer .login').click(function() {
        $('.content-payment.login .footer .login').addClass('loading');
        $.post(marketMe.baseUrl +'login', $('.content-payment.login').serialize(), function (data) {

            data = JSON.parse(data);
            if(data.success) {
                setTimeout(function () {



                    /*setTimeout(function () {
                        $('.content-payment.login .footer .login').removeClass('true');
                        window.location.reload();
                    }, 500);*/
                    setTimeout(function() {
                        $('.container-payment').removeClass('mode-login').addClass('mode-payment-method');
                        $('.content-payment.login .footer .login').removeClass('loading').addClass('true');
                        $('.container-payment').addClass('log');
                    }, 500);

                }, 1500);
            } else {
                $('.content-payment.login .footer .login').removeClass('loading').addClass('false');
                $('.content-payment.login').find('.error-field').html(data.result)
            }

        });


        /*setTimeout(function() {
            $('.content-payment.login .footer .login').removeClass('loading').addClass('true');
            $('.container-payment').addClass('log');



        }, 1500);*/
    });


    $('.content-payment.login .footer .create-account').click(function() {
        $('.container-payment').removeClass('mode-login').addClass('mode-signup');
    });

    $('.content-payment.signup .footer .login').click(function() {
        $('.container-payment').removeClass('mode-signup').addClass('mode-login');
    });

    $('.content-payment.signup .footer .create-account').click(function() {
        $('.content-payment.signup .footer .create-account').addClass('loading');

        var $elem = $(this);
        console.log($('.content-payment.signup').serialize());
        $.post(marketMe.baseUrl +'register', $('.content-payment.signup').serialize(), function (data) {

            data = JSON.parse(data);
            $('.container-login .footer .login').removeClass('loading');
            if(data.success) {

                $('.content-payment.signup .footer .create-account').removeClass('loading').addClass('true');
                setTimeout(function() {
                    $('.container-payment').removeClass('mode-signup').addClass('mode-payment-method').addClass('log');
                }, 500);

            } else {
                $('.content-payment.signup .footer .create-account').removeClass('loading');
                $('.content-payment.signup').find('.error-field').html(data.result)
            }
        });

        /*setTimeout(function() {

            setTimeout(function() {
                $('.container-payment').removeClass('mode-signup').addClass('mode-payment-method');
            }, 500);
        }, 1500);*/
    });


    /*$('.content-payment.signup .footer .create-account').click(function() {
        $('.content-payment.signup .footer .create-account').addClass('loading');
        setTimeout(function() {
            $('.content-payment.signup .footer .create-account').removeClass('loading').addClass('true');
            $('.container-payment').addClass('log');
            setTimeout(function() {
                $('.container-payment').removeClass('mode-signup').addClass('mode-payment-method');
            }, 500);
        }, 1500);
    });*/

    /*$('.content-payment.payment-method .payment-submit').click(function(){
    	$('.content-payment.payment-method .payment-submit').addClass('loading');
    	setTimeout(function() {
    		$('.content-payment.payment-method .payment-submit').removeClass('loading').addClass('true')
    		setTimeout(function() {
    			$('.container-payment').removeClass('mode-payment-method').addClass('mode-download');
    		}, 500);
    	}, 1500);
    });*/


    /* CLOSE LIGHTBOX */

    $('#payment-lightbox').click(function() {
        if ($("#header-action").hasClass("temp"))
            $("#header-action").removeClass("style-1").addClass('style-2');
        $(this).fadeOut(400);
    });

    $('#payment-lightbox .clearCart').on('click', function(e) {

        var postObj = {};
        postObj[marketMe.csrf.name] = marketMe.csrf.hash;
        $.post(marketMe.baseUrl + 'cart/clear', postObj, function(data) {
            data = JSON.parse(data);
            if (data.status == 200) {
                //$('#payment-lightbox').fadeOut(400)
                var $newLightbox = $(data.paymentLightbox);
                $('#payment-lightbox').html($newLightbox.html());
                $('.bag').removeClass('has-product');
            }
        });
    });
    $('#payment-lightbox .container-payment').click(function(event) {
        event.stopPropagation();
    });

}

$(document).ready(function() {
    bindLightboxPayement();
});
