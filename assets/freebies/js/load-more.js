//all the methods and properties will be in this object
var Load_more_btn = {};

//shortener
var ø = Load_more_btn;
//dom
ø.$ = {};



//
ø.clickCounter = 0;
//how many products are already displayed when the page is loaded
ø.baseId = baseId;

//some dom
ø.$.container = $(".container-freebies");
ø.$.node = $('<div>', {
  class: "section-freebies_load_more f-mpm",
  html: '<span>LOAD MORE</span> <span>LOAD MORE</span><div>NO MORE PRODUCTS</div>',
});
ø.$.loader = '<div class="loader-inner ball-scale-ripple-multiple"><div></div><div></div><div></div></div>';
ø.$.loader = '';

//ajax call, append in $.container
ø.templating = function(data) {
  var hey = $.ajax({
    url: base_url + "assets/freebies/partials/product.php",
    type: "get", //send it through get method
    data: {
      product_data: data
    },
    success: function(response) {
      // var newProduct = $(".container-freebies").append(response);

      //ISSUE #1 : on ø.call_products, the ø.loading function fire when the ajax request are done and not when the dom is loaded, wich is why we never see the loader, ajax requests are made super fast.
      //$.when(ø.$.container.append(response)).then(function(){console.log('loaded ! ');});
      //ø.$.container.append(response);
      $(response).insertBefore(ø.$.node);

      //console.log(response);
    },
    error: function(xhr) {
      //Do Something to handle error
      console.log(xhr);
    }
  });
};

//end of feed, change class and stop calling ajax
ø.end = function(elem) {
  setTimeout(function(){
    ø.stop_loading(ø.$.node);
    elem.addClass('load');
    elem.off("click");
    //elem.html('No more products');
  }, 1000);

};

//ux, loader
ø.do_loading = function(elem) {
  elem.addClass('loading');
};
ø.stop_loading = function(elem) {
  elem.removeClass('loading');
};

//onclick callback
ø.call_products = function(e) {
  e.preventDefault();
  ø.clickCounter++;
  ø.do_loading(ø.$.node);
  for (var i = ø.baseId; i < ø.baseId * 2; i++) {
    if (i < products.length) {
      if (!products[i].not_verified) {
        ø.templating(products[i]);
        //console.log(i, ø.baseId * 2);
        //console.info('got it');

      }
    } else {
      //console.info('end');
      ø.end(ø.$.node);
    }




    //weird header behavior target blank behavior fix
    $('#header-action .nav-link a').attr('target', "_self");
  }
  ø.baseId = i;
  window.setTimeout(function() {
    ø.stop_loading(ø.$.node);
  }, 1000);

};
//mostly dom
ø.init = function() {
  ø.$.node.on('click', ø.call_products);
  ø.$.container.append(ø.$.node);
  ø.$.node.append(ø.$.loader);
};


ø.init();

// products.forEach(function(elem) {
//     console.log(elem.name);
// });
