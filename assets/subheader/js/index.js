$(window).scroll(function () {
    if ($(window).scrollTop() > 52) {
       $('#sub-header').addClass('fixed');
    } else {
       $('#sub-header').removeClass('fixed');
    }
})