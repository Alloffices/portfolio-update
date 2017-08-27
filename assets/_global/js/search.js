var previous;

function activeSearch() {
    var displayZone;

    switch ($(this).attr('class')) {
        case "rechercher":
            displayZone = $('#section-home-search  .container-result');
            $('#section-home-search .close').on('click', function (){
              displayZone.html("");
            })
            break;
        case "q":
            displayZone = $('#lb-search  .container-product');
            break;
    }
    var query = $(this).val().trim();
    if (query !== previous && query.length >= 2) {

        displayZone.html("<h1>Loading...</h1>");
        $.ajax({
            url: base_url + 'search/' + query,
            method: 'GET',
            data: params,

            success: function(data, textStatus, jqXHR) {
              if (jqXHR.responseText.length < 100)
                  return displayZone.html("<h1>No result found !</h1>");

              displayZone.html(jqXHR.responseText);


              var thumbs = $('.product-thumb');
              thumbs.find("a.buy.do-purchase").on('click', bindLigthbox);
              bindShare();

              likes = new Likes('.product-thumb .like');
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log(arguments);
               var message  = "The following error occured: "+ textStatus + " " + errorThrown ;
               displayZone.html("<h1>" + message + "</h1>");

            },
            complete: function(jqXHR, textStatus) {
            }
        });
    }
    previous = query;

}



$('.input-search input#q').on("keypress", activeSearch);
$('#lb-search for').on("keypress", activeSearch);
