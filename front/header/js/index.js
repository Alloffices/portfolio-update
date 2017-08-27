$(document).ready(function() {

    var header = $('#header-action');


    header.find('.nav-link > div').click(function() {

        if (window.matchMedia("(min-width: 800px)").matches) {
            if (header.find('.nav-link > div .drop-down').hasClass('show')) {

                header.find('.nav-link > div .drop-down').removeClass('show');

                setTimeout(function() {

                    header.find('.nav-link > div .drop-down').hide();

                }, 250);

            } else {

                header.find('.nav-link > div .drop-down').show();

                setTimeout(function() {

                    header.find('.nav-link > div .drop-down').addClass('show');

                }, 50);

            }
        } else {
            if (header.find('.nav-link > div .drop-down').hasClass('show')) {

                header.find('.nav-link > div .drop-down').removeClass('show');

            } else {

                header.find(' .nav-link > div .drop-down').addClass('show');

            }
        }

    });

    var header_base_class = header.attr("class");
    header.find(".action .search").on('click', function() {
        if ($(this).hasClass('open')) {
            $('#lb-search').fadeOut(400);
            $('body').removeClass('block');
            header.attr("class", header_base_class);
        } else {
            header_base_class = header.attr("class");
            if (header.hasClass('style-1'))
                header.removeClass('style-1').addClass('style-2');
            $('#lb-search').fadeIn(400);
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            $('body').addClass('block');
        }
        $(this).toggleClass('open');

    });

    $('#header-mobile .action').click(function() {
        $(this).toggleClass('open');
        $('#link-header-mobile').toggleClass('open');
    });

    var header_dropdown_account = header.find('.action .drop-down');
    header.find(' .action .account').mouseenter(function() {
        if (header.hasClass('log')) {
            header_dropdown_account.show();
            setTimeout(function() {
                header_dropdown_account.addClass('show');
            }, 50);
        }
    });

    $('#header-action .action .drop-down').mouseleave(function() {
        if (header.hasClass('log')) {
            header_dropdown_account.removeClass('show');

            setTimeout(function() {
                header_dropdown_account.hide();
            }, 250);
        }
    });

    $('body').on('click', '.trigger-login', function() {
        $('#lightbox-log').fadeIn(500);
    });



    header.on('click', '.bag', function(e) {

        $('#payment-lightbox').fadeIn(400);
        if (!$("#header-action").hasClass("style-1")) {
            $("#header-action").removeClass("style-2").addClass('style-1 temp');
        }
    });

});
