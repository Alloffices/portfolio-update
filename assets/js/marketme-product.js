$(document).ready(function() {



    $('#buy').not('.direct-dl').on('click', function(e) {
        $.post(marketMe.baseUrl + 'cart/add', {
            productId: $('[name="productId"]').val(),
            license: $('[name="license"]').val()
        }, function(data) {
            data = JSON.parse(data);
            if (data.status == 200) {
                var $newLightbox = $(data.paymentLightbox);
                $('#payment-lightbox').html($newLightbox.html());
                $('.bag').addClass('has-product');
                $('#payment-lightbox').fadeIn(400);
                bindLightboxPayement();
                bindCardConstraints();

            }
        });

    });


    bindCardConstraints();
});
Stripe.setPublishableKey(marketMe.stripePublishable);
//je craque
var key = 8;
window.onkeydown = function(e) {
    key = e;
};


function bindCardConstraints() {
    var $submitButton = $('.content-payment .payment-submit');
    var $form = $submitButton.closest('form');


    $('[name="license"]').on('change', function(e) {
        var $elem = $(this);
        $.post(marketMe.baseUrl + 'cart/update', {
            productId: $('[name="productId"]').val(),
            license: $('[name="license"]').val()
        }, function(data) {
            data = JSON.parse(data);
            if (data.status == 200) {
                if ($elem.val() == 'regular') {
                    $form.find('.price').text('$' + $elem.data('price'));

                } else {
                    $form.find('.price').text('$' + parseFloat($elem.data('price')) * 10);
                }
            }
        });

    });




    $('form.content-payment.payment-method').on('submit', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        // Disable the submit button to prevent repeated clicks:
        $submitButton.prop('disabled', true);
        $form = $(this);
        $form.find('input').closest('.container-input').removeClass('error');
        $submitButton.addClass('loading').removeClass('false');

        // Request a token from Stripe:
        Stripe.card.createToken($form, stripeResponseHandler);
        // Prevent the form from being submitted:

        //var $form = $(this);

    });


    function stripeResponseHandler(status, response) {
        // Grab the form:

        console.log(response);
            if (response.error /*|| response.card.cvc_check == "unchecked"*/) { // Problem!

            // Show the errors on the form:
                /*if(response.card.cvc_check == "unchecked"){
                    $form.find('.payment-errors').text("CVV not verified");
                    $form.find('input#cvv').closest('.container-input').addClass('error');
                } else {*/
                    $form.find('.payment-errors').text(response.error.message);
                    if (
                        response.error.code === "incorrect_number" ||
                        response.error.code === "invalid_number" ||
                        response.error.code === "card_declined" ||
                        response.error.code === "missing" ||
                        response.error.code === "expired_card" ||
                        response.error.code === "processing_error")
                        $form.find('input[data-stripe=number]').closest('.container-input').addClass('error');
                    if (
                        response.error.code === "invalid_expiry_month" ||
                        response.error.code === "invalid_expiry_year" ||
                        response.error.code === "expired_card")
                        $form.find('input#card-validity').closest('.container-input').addClass('error');
                    if (
                        response.error.code === "incorrect_cvc" ||
                        response.error.code === "invalid_cvc" ||
                        response.error.code === "expired_card")
                        $form.find('input#card-validity').closest('.container-input').addClass('error');
                //}






            $submitButton.prop('disabled', false); // Re-enable submission
            $submitButton.removeClass('loading').addClass('false');

        } else { // Token was created!

            // Get the token ID:
            var token = response.id;
            // Insert the token ID into the form so it gets submitted to the server:
            $form.append($('<input type="hidden" name="stripeToken">').val(token));
            // Submit the form:
            $.post($form.attr('action'), $form.serialize(), function(data) {
                data = JSON.parse(data);
                if (data.status == 200) {
                    $submitButton.addClass('accept');
                    $submitButton.removeClass('loading').removeClass('accept').addClass('true');

                    // 1 sec to see payement button validated then show confirmation
                    //window.setInterval(function() {
                        var $newLightbox = $(data.data.paymentLightbox);
                        $('#payment-lightbox').html($newLightbox.html()).show();


                        var postObj = {};
                        postObj[marketMe.csrf.name] = marketMe.csrf.hash;
                        $.post(marketMe.baseUrl + 'cart/clear', postObj, function(data) {
                            data = JSON.parse(data);
                            if (data.status == 200) {
                                $('.bag').removeClass('has-product');
                            }
                        });
                 //   }, 1000);



                } else {
                    $submitButton.removeClass('loading').removeClass('accept').addClass('false');
                    $form.find('.payment-errors').text(data.data);
                    console.log(data.code);

                    $submitButton.prop('disabled', false); // Re-enable submission

                }
            });
        }
    }






    var cardNumber = $('form #card-number');
    var brand = false;
    cardNumber.on('keyup', function(e) {

        if (e.key !== "Backspace" || e.keyCode !== 8) {

            var str = cardNumber.val();
            cardNumber.val(str.replace(/[^0-9]/g, ""));
            str = cardNumber.val();

            str = cc_format(str);
            cardNumber.val(str);

            //credit card with spaces
            var format = cardNumber.val().match(/^\d{4}?\s{1}\d{4}?\s{1}\d{4}?\s{1}\d{4}$/g);

            if (format) {
                //focus next input
                $('form #card-validity').focus();
                //get cc brand

            }
            brand = cc_brand_id(str);
        }
    });

    //credits : http://stackoverflow.com/a/36833418/6099183 by prava
    function cc_format(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || '';
        var parts = [];

        for (i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    }




    // MM YY
    var cValidity = $('form #card-validity');
    var stripeMonth = $('form #month');
    var stripeYear = $('form #year');
    cValidity.on('input', function(e) {
        var str = cValidity.val();
        if (e.key !== "Backspace" || e.keyCode !== 8 || key.keyCode !== 8) {


            if (cValidity.val().length >= 5) {
                var fix = cValidity.val().substring(0, 5);
                str = fix;
            }
            cValidity.val(str.replace(/[^0-9\/]/g, ""));
            str = cValidity.val();
            var isMonth = str.match(/^\d{2}/g);
            if (isMonth && cValidity.val().length == 2 && cValidity.val().indexOf("/")) {
                cValidity.val(str + "/");
                if (key.keyCode == 8)
                    cValidity.val(str);
            }
            var valid = str.match(/^(\d{2})(\/{1})(\d{2})$/gi);
            if (valid) {

                if (isMonth) {
                    var month = parseInt(isMonth[0]);
                    stripeMonth.val(month);
                }

                var isYear = str.match(/\d{2}$/g);
                if (isYear) {
                    var year = parseInt(isYear[0]);
                    stripeYear.val(year);
                }

                $('#cvv').focus();

            } else {
                cValidity.get(0).validationMessage = "Please respect this pattern : MM YY";
                stripeMonth.val("");
                stripeYear.val("");
                return false;
            }


        }

    });


    //CVV
    $('#cvv').on('keyup', function(e) {
        var str = $('#cvv').val();
        $('#cvv').val(str.replace(/[e]/g, ""));
        var valid = str.match(/^\d{3}$/gi);;
        var maxCvvLength  = 3;
        if(brand == "amex"){
            maxCvvLength = 4;
            valid = str.match(/^\d{4}$/gi);
        }

        if ($('#cvv').val().length >= maxCvvLength ) {
            $('#cvv').val($('#cvv').val().substring(0, maxCvvLength));
        }
        if (valid) {} else {
            $('#cvv').get(0).validationMessage = "The CVV must be "+ maxCvvLength +" digits";
            return false;
        }
    });

    $('#cardholder-mail').on('keyup', function() {
        var valid = str.match(/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi);

        if (!valid) return false;
    });
}


//credits : http://stackoverflow.com/a/21617574/6099183 by Janos Szabo
function cc_brand_id(cur_val) {
    var sel_brand;

    // the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
    // regexp string length {0} provided for soonest detection of beginning of the card numbers this way it could be used for BIN CODE detection also

    //JCB
    jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); //2131, 1800, 35 (3528-3589)
    // American Express
    amex_regex = new RegExp('^3[47][0-9]{0,}$'); //34, 37
    // Diners Club
    diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); //300-305, 309, 36, 38-39
    // Visa
    visa_regex = new RegExp('^4[0-9]{0,}$'); //4
    // MasterCard
    mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); //2221-2720, 51-55
    maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
    //Discover
    discover_regex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
    ////6011, 622126-622925, 644-649, 65


    // get rid of anything but numbers
    cur_val = cur_val.replace(/\D/g, '');

    // checks per each, as their could be multiple hits
    //fix: ordering matter in detection, otherwise can give false results in rare cases
    if (cur_val.match(jcb_regex)) {
        sel_brand = "jcb";
    } else if (cur_val.match(amex_regex)) {
        sel_brand = "amex";
    } else if (cur_val.match(diners_regex)) {
        sel_brand = "diners_club";
    } else if (cur_val.match(visa_regex)) {
        sel_brand = "visa";
    } else if (cur_val.match(mastercard_regex)) {
        sel_brand = "mastercard";
    } else if (cur_val.match(discover_regex)) {
        sel_brand = "discover";
    } else if (cur_val.match(maestro_regex)) {
        if (cur_val[0] == '5') { //started 5 must be mastercard
            sel_brand = "mastercard";
        } else {
            sel_brand = "maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
        }
    } else {
        sel_brand = "unknown";
    }

    return sel_brand;
}
