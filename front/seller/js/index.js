$(document).ready(function() {
    var thumbs = $('.product-thumb');
    var stripeForm = $('#payment-lightbox');
    thumbs.find("a.buy.do-purchase").on('click', bindLigthbox);
});
