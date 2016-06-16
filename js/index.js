var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    simulateTouch : false,
    loop: true
});

function showColgate() {
    var images = [
        "./pro/colgate/1.png",
        "./pro/colgate/2.png",
        "./pro/colgate/3.png",
        "./pro/colgate/4.png",
        "./pro/colgate/5.png",
        "./pro/colgate/6.png",
        "./pro/colgate/7.png",
        "./pro/colgate/8.png",
        "./pro/colgate/9.png"
    ];
    zoomImage(images, 0);
}
function showMLD() {
    var images = [
        "./pro/mld/1.png",
        "./pro/mld/2.png",
        "./pro/mld/3.png",
        "./pro/mld/4.png",
        "./pro/mld/5.png",
        "./pro/mld/6.png",
        "./pro/mld/7.png",
        "./pro/mld/8.png",
        "./pro/mld/9.png",
        "./pro/mld/10.png",
        "./pro/mld/11.png"
    ];
    zoomImage(images, 0);
}
function showNJGZ() {
    var images = [
        "./pro/njgz/1.png",
        "./pro/njgz/2.png",
        "./pro/njgz/3.png",
        "./pro/njgz/4.png",
        "./pro/njgz/5.png",
        "./pro/njgz/6.png",
        "./pro/njgz/7.png",
        "./pro/njgz/8.png"
    ];
    zoomImage(images, 0);
}

function mScroll(id){
    $("html,body").stop(true);
    $("html,body").animate({
        scrollTop: $("#"+id).offset().top
    }, 1000);
}