var likes = new Likes('.product-thumb .like');
$('#section-home-search .content .search-bar .rechercher').focus(function() {
    $('body').addClass('block');
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    $('#section-home-search').addClass('search-mode');
    setTimeout(function() {

        $('#section-home-search .container-result').fadeIn(400);

    }, 500);
});
var input_search = $('#section-home-search .content .search-bar .rechercher');
$('#section-home-search form').on('submit', function(e) {
    e.preventDefault();
});
input_search.on("keypress", activeSearch);


$('#section-home-search').css("background-image", "url(" + marketMe.baseUrl + "assets/img/cover-" + Math.round(Math.random()*3+1) + ".jpg)");


$('#section-home-search .content .search-bar .close').click(function(event) {
    event.stopPropagation();
    $('#section-home-search .container-result').fadeOut(250);
    $('#section-home-search .content .search-bar .rechercher').hide();
    $("#section-home-search .content .search-bar .typing-animation").fadeIn(300);

    setTimeout(function() {

        $('body').removeClass('block');
        $('#section-home-search').removeClass('search-mode');

    }, 250);
});

$('#section-home-search .container-highlight-product').click(function(event){
  event.stopPropagation();
})

$('#sell-design-home .badge').click(function(){
    $('#sell-design-home').addClass('anim-1');
    setTimeout(function() {

        $('#sell-design-home').addClass('anim-2');

    }, 1000);
});


$(function(){
    $("#section-home-search .content .search-bar .typing-animation").typed({
      strings: ["Ui Kits", "Presentations", "Icons", "Wordpress", "Themes", "Fonts"],
      typeSpeed: 100,

      showCursor: false,

      loop: true,

      backDelay: 1500, 

      startDelay: 1000,

      shuffle: true
    });

    $("#section-home-search").click(function(){

      $('#section-home-search .content .search-bar .rechercher').fadeIn(300);

      setTimeout(function() {
        $('#section-home-search .content .search-bar .rechercher').focus();
        }, 250);

      $("#section-home-search .content .search-bar .typing-animation").hide();

    })
});
