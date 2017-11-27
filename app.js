//toggle About button on Nav
$(".info").on("click", function(){
    $(".header-container").slideToggle();
});

//make bigger project image
$(".photo-grid-item").on("click", function(){
    $(".photo-grid-item img").toggleClass("bigger");
});