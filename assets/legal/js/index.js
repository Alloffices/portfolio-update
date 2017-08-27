/* -------------------- NAV PROFIL -------------------- */
$(document).ready(function() {

    $('#nav-profil li').click(function() {
        $('#nav-profil li').removeClass('active');
        $(this).addClass('active');
    })

    $('#nav-profil li:nth-child(1)').click(function() {
        $('#container-legal > div').addClass('hide');

        setTimeout(function() {
            $('#container-legal > div').hide();
            $('#container-legal > div:nth-child(1)').show();
        }, 500);

        setTimeout(function() {
            $('#container-legal > div:nth-child(1)').removeClass('hide');
        }, 550);

    })

    $('#nav-profil li:nth-child(2)').click(function() {
        $('#container-legal > div').addClass('hide');

        setTimeout(function() {
            $('#container-legal > div').hide();
            $('#container-legal > div:nth-child(2)').show();
        }, 500);

        setTimeout(function() {
            $('#container-legal > div:nth-child(2)').removeClass('hide');
        }, 550);
    })

    $('#nav-profil li:nth-child(3)').click(function() {
        $('#container-legal > div').addClass('hide');

        setTimeout(function() {
            $('#container-legal > div').hide();
            $('#container-legal > div:nth-child(3)').show();
        }, 500);

        setTimeout(function() {
            $('#container-legal > div:nth-child(3)').removeClass('hide');
        }, 550);
    })

    $('#nav-profil li:nth-child(4)').click(function() {
        $('#container-legal > div').addClass('hide');

        setTimeout(function() {
            $('#container-legal > div').hide();
            $('#container-legal > div:nth-child(4)').show();
        }, 500);

        setTimeout(function() {
            $('#container-legal > div:nth-child(4)').removeClass('hide');
        }, 550);
    })

    /* -------------------- END NAV PROFIL -------------------- */


    /* -------------------- SETTINGS ACCOUNT -------------------- */

    $('.settings-account_container_input input').click(function() {
        $(this).parent().find('.place-holder').addClass('active');
    })

    /* -------------------- END SETTINGS ACCOUNT -------------------- */


    /* -------------------- SETTINGS PASSWORD -------------------- */

    $('.settings-password_container_input input').click(function() {
        $(this).parent().find('.place-holder').addClass('active');
    })

    /* -------------------- END SETTINGS PASSWORD -------------------- */


    /* -------------------- SETTINGS PAYMENT -------------------- */

    $('.settings-paymentEdit-content_card_remove').click(function() {
        $(this).parent().addClass('hide');
        setTimeout(function() {
            $('.settings-paymentEdit-content_card.hide').addClass('min');
        }, 250);
        setTimeout(function() {
            $('.settings-paymentEdit-content_card.hide').hide();
        }, 500);
    })

    $('.settings-paymentEdit-content_add_card').click(function() {
        $('.settings-paymentEdit-content').addClass('hide');

        $('#settings-payment .container-legal_title span:nth-child(2)').hide();

        setTimeout(function() {
            $('#settings-payment .container-legal_title span:nth-child(3)').fadeIn(400);
            $('.settings-paymentEdit-content').hide();
            $('.settings-paymentCreate-content').show();
        }, 500);
        setTimeout(function() {
            $('.settings-paymentCreate-content').removeClass('hide');
        }, 550);
    })

    $('.settings-paymentCreate-cancel').click(function() {
        $('.settings-paymentCreate-content').addClass('hide');

        $('#settings-payment .container-legal_title span:nth-child(3)').hide();

        setTimeout(function() {
            $('#settings-payment .container-legal_title span:nth-child(2)').fadeIn(400);
            $('.settings-paymentCreate-content').hide();
            $('.settings-paymentEdit-content').show();

        }, 500);
        setTimeout(function() {
            $('.settings-paymentEdit-content').removeClass('hide');
        }, 550);
    })



    $('.settings-paymentCreate_container_input input').click(function() {
        $(this).parent().find('.place-holder').addClass('active');
    })

    /* -------------------- END SETTINGS PAYMENT -------------------- */

});
