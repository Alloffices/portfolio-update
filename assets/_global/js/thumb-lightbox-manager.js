var thumbs = $('.product-thumb');
var stripeForm = $('#payment-lightbox');


function bindLigthbox() {
    var elem = $(this);


    //clear the actual cart
    var postObj = {};
    postObj[marketMe.csrf.name] = marketMe.csrf.hash;
    $.post(marketMe.baseUrl+ 'cart/clear',postObj,function (data) {
      data = JSON.parse(data);
      if(data.status == 200){
        //$('#payment-lightbox').fadeOut(400)
        //var $newLightbox = $(data.paymentLightbox);
        //$('#payment-lightbox').html($newLightbox.html());
        $('.bag').removeClass('has-product');
      }
    });



    //set new cart
    var product = {
        id: parseInt(elem.closest('.product-thumb').find(".like").attr('data-id')),
        name: elem.closest('.product-thumb').find(".info .title").text(),
        price: parseInt(elem.find(".price").html().replace('$', "")),
        thumbnail: elem.closest('.product-thumb').find(".cover img").attr('src'),
    };

    $.post(marketMe.baseUrl+'cart/add', {productId:product.id, license: $('[name="license"]').val() },function (data) {
        data = JSON.parse(data);
        if (data.status == 200) {
            var $newLightbox = $(data.paymentLightbox);
            $('.bag').addClass('has-product');
            $('#payment-lightbox').html($newLightbox.html());
            $('#payment-lightbox').fadeIn(400);
            bindLightboxPayement();
            bindCardConstraints();

        }
    });

    //dom manipulation
    if(!$("#header-action").hasClass("style-1")){
      $("#header-action").removeClass("style-2").addClass('style-1 temp');
    }

}

thumbs.find("a.buy.do-purchase").not('.direct-dl').on('click', bindLigthbox);
