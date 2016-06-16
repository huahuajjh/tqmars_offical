function mScroll(id){
    $("html,body").stop(true);
    $("html,body").animate({
        scrollTop: $("#"+id).offset().top
    }, 1000);
}