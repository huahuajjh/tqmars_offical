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
        "./pro/colgate/1.jpg",
        "./pro/colgate/2.jpg",
        "./pro/colgate/3.jpg",
        "./pro/colgate/4.jpg",
        "./pro/colgate/5.jpg",
        "./pro/colgate/6.jpg",
        "./pro/colgate/7.jpg",
        "./pro/colgate/8.jpg",
        "./pro/colgate/9.jpg"
    ];
    img(images, 0);
}
function showMLD() {
    var images = [
        "./pro/mld/1.jpg",
        "./pro/mld/2.jpg",
        "./pro/mld/3.jpg",
        "./pro/mld/4.jpg",
        "./pro/mld/5.jpg",
        "./pro/mld/6.jpg",
        "./pro/mld/7.jpg",
        "./pro/mld/8.jpg",
        "./pro/mld/9.jpg",
        "./pro/mld/10.jpg",
        "./pro/mld/11.jpg"
    ];
    img(images, 0);
}
function showNJGZ() {
    var images = [
        "./pro/njgz/1.jpg",
        "./pro/njgz/2.jpg",
        "./pro/njgz/3.jpg",
        "./pro/njgz/4.jpg",
        "./pro/njgz/5.jpg",
        "./pro/njgz/6.jpg",
        "./pro/njgz/7.jpg",
        "./pro/njgz/8.jpg"
    ];
    img(images, 0);
}

function mScroll(id){
    $("html,body").stop(true);
    $("html,body").animate({
        scrollTop: $("#"+id).offset().top
    }, 1000);
}