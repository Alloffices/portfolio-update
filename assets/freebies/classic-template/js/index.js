$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 90) {
            $('#header-template-other').addClass('fixed');
        } else {
            $('#header-template-other').removeClass('fixed');
        }
    })

    $('#header-template-other .action .share .btn').click(function() {
        $(this).toggleClass('active');
        $('.share').toggleClass('show');
        $('#header-template-other .action').toggleClass('up');
    })

    $('.product').mouseenter(function() {

        $(this).find('video').get(0).play();
    })

    function addToBag(dom) {
        //if(!$(dom).parent().parent().parent().find('.check').hasClass("valid")){
        $(dom).parent().parent().parent().find('.check').addClass("valid");
        var container = $(dom);
        var title = $(container).find('.title').text();
        var desc = $(container).find('.description').text();
        var price = parseInt($(container).find('.option').eq(0).attr('data-option-price'));
        var id = $(container).find('.id').text();
        var image = window.location.href + $(container).find('.poster').text();
        var option = "";
        $(container).find('.option').each(function(e) {
            option += '&option[' + e + '][id]=' + $(this).attr('data-option-id');
            option += '&option[' + e + '][price]=' + $(this).attr('data-option-price');
            option += '&option[' + e + '][title]=' + $(this).attr('data-option-title');
            option += '&option[' + e + '][desc]=' + $(this).text();
        });

        $.ajax({
            method: "GET",
            url: '/cart/shoppingData.php',
            data: 'action=addToCart&title=' + title + '&desc=' + desc + '&price=' + price + '&id=' + id + '&image=' + image + option
        }).done(function(msg) {
            $('.header-desktop_shop_number').show();
            $('.header-mobile_bag_number').show();
            $('.header-desktop_shop_number').text(parseInt($('.header-desktop_shop_number').text()) + 1);
            $('.header-mobile_bag_number').text(parseInt($('.header-mobile_bag_number').text()) + 1);
            setTimeout(function() {
                $(dom).parent().parent().parent().find('.check').removeClass("valid")
            }, 2000);
            window.location.href = '/cart/';
        });
        //}

    }
});
