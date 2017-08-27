var Likes = function(parentSelector, isPageProduct) {
    var self = this;
    this.$ = $(parentSelector);
    this.base_url = base_url || window.location.origin;
    this.$.on('click', function() {

        var user_ip = $(this).attr('data-ip');
        var product_id = $(this).attr('data-id');
        var value = parseInt($(this).find('.number').html());

        var parent = null;
        isPageProduct ? parent = "#container-product-detail" : parent = '.product-thumb';
        //console.log($(this).closest(parent));

        if ($(this).closest(parent).hasClass('like')) {
            //unlike
            $.ajax({
                url: self.base_url + 'unlike-product/' + product_id + "/" + user_ip,
                method: 'POST',
                data: params,

                success: function(data, textStatus, jqXHR) {
                    //console.log(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //console.log(errorThrown);
                },
                complete: function(jqXHR, textStatus) {
                    console.log(jqXHR);
                    // console.log(jqXHR.responseText);
                }
            });

            value--;
            $(this).find('.number').html(value);
            $(this).closest(parent).removeClass('like');
            if (parent === ".product-thumb" && !isPageProduct && window.products)
                products = products.map(function(target) {
                    if(target.id === product_id){
                      target.likes.count--;
                      target.likes.already_liked = false;
                    }
                    return target;
                });
        } else {
            //like
            $.ajax({
                url: self.base_url + 'like-product/' + product_id + "/" + user_ip,
                method: 'POST',
                data: params,

                success: function(data, textStatus, jqXHR) {
                    //console.log(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //console.log(errorThrown);
                },
                complete: function(jqXHR, textStatus) {
                    console.log(jqXHR);
                    // console.log(jqXHR.responseText);
                }
            });
            value++;
            $(this).find('.number').html(value);
            $(this).closest(parent).addClass('like');
            if (parent === ".product-thumb" && !isPageProduct && window.products)
                products = products.map(function(target) {
                    if(target.id === product_id){
                      target.likes.count++;
                      target.likes.already_liked = true;
                    }
                    return target;
                });
        }
    });
};
