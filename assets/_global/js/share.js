function bindShare() {
    var shares = $('.product-thumb .share');
    shares.click(function() {

        if ($(this).find('.drop-down').hasClass('show')) {

            $(this).find('.drop-down').fadeOut(250).removeClass('show');

        } else {

            $('.product-thumb .share .drop-down').fadeOut(250).removeClass('show');

            $(this).find('.drop-down').fadeIn(250).delay(0).queue(function() {
                $(this).addClass("show").dequeue();
            });
        }

    });





    ;
    (function($) {

        /**
         * jQuery function to prevent default anchor event and take the href * and the title to make a share pupup
         *
         * @param  {[object]} e           [Mouse event]
         * @param  {[integer]} intWidth   [Popup width defalut 500]
         * @param  {[integer]} intHeight  [Popup height defalut 400]
         * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
         */
        $.fn.customerPopup = function(e, intWidth, intHeight, blnResize) {

            // Prevent default anchor event
            e.preventDefault();

            // Set values for window
            intWidth = intWidth || '500';
            intHeight = intHeight || '400';
            strResize = (blnResize ? 'yes' : 'no');

            // Set title and open popup with focus on it
            var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
                strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
                objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
        }

        /* ================================================== */

        $(document).ready(function($) {
            shares.find('a').on("click", function(e) {
                $(this).customerPopup(e);
            });
        });

    }(jQuery));

}

bindShare();
