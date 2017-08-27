$('#container-all-product .head .filter .container-filter-1 > div').click(function() {
    if ($(this).hasClass('active')) {
        $('#container-all-product .head .filter .container-filter-1 > div').removeClass('active')
        $(this).removeClass('active');
    } else {
        $('#container-all-product .head .filter .container-filter-1 > div').removeClass('active')
        $(this).addClass('active');
    }
})

$('#container-all-product .head .filter .container-filter-2 > div:nth-child(1)').click(function(event) {
    event.stopPropagation();
    $('#container-all-product .head .filter .container-filter-2 > div:nth-child(2)').removeClass('show');

    setTimeout(function() {

        $('#container-all-product .head .filter .container-filter-2 > div:nth-child(2) .drop-down').hide();

    }, 250);

    if ($('#container-all-product .head .filter .container-filter-2 > div:nth-child(1)').hasClass('show')) {

        $('#container-all-product .head .filter .container-filter-2 > div:nth-child(1)').removeClass('show');

        setTimeout(function() {

            $('#container-all-product .head .filter .container-filter-2 > div:nth-child(1) .drop-down').hide();

        }, 250);

    } else {

        $('#container-all-product .head .filter .container-filter-2 > div:nth-child(1) .drop-down').show();

        setTimeout(function() {

            $('#container-all-product .head .filter .container-filter-2 > div:nth-child(1)').addClass('show');

        }, 50);

    }

})

$('#container-all-product .head .filter .container-filter-2 > div:nth-child(2)').click(function(event) {
    event.stopPropagation();
    $('#container-all-product .head .filter .container-filter-2 > div:nth-child(1)').removeClass('show');

    setTimeout(function() {

        $('#container-all-product .head .filter .container-filter-2 > div:nth-child(1) .drop-down').hide();

    }, 250);

    if ($('#container-all-product .head .filter .container-filter-2 > div:nth-child(2)').hasClass('show')) {

        $('#container-all-product .head .filter .container-filter-2 > div:nth-child(2)').removeClass('show');

        setTimeout(function() {

            $('#container-all-product .head .filter .container-filter-2 > div:nth-child(2) .drop-down').hide();

        }, 250);

    } else {

        $('#container-all-product .head .filter .container-filter-2 > div:nth-child(2) .drop-down').show();

        setTimeout(function() {

            $('#container-all-product .head .filter .container-filter-2 > div:nth-child(2)').addClass('show');

        }, 50);

    }

})

$('#container-all-product .head .filter .drop-down > div').click(function() {
    $(this).parent().find('div').removeClass('active');
    $(this).addClass('active');
})

$('body').click(function(){
    $('#container-all-product .head .filter .container-filter-2 > div').removeClass('show');

    setTimeout(function() {

        $('#container-all-product .head .filter .container-filter-2 > div .drop-down').hide();

    }, 250);
})

/* ANIM RESULT */

$('#container-all-product .head .filter .container-filter-1 > div').click(function(){
    $('.result-product').removeClass('result-anim');
    setTimeout(function() {
        $('.result-product').addClass('result-anim');
    }, 250);
    
})

$('#container-all-product .head .filter .drop-down div').click(function(){
    $('.result-product').removeClass('result-anim');
    setTimeout(function() {
        $('.result-product').addClass('result-anim');
    }, 250);
    
})

/* END ANIM RESULT */
