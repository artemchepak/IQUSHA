$(function() {
    $('.games__item-slider').slick({
        arrows: true,
        prevArrow: "<img class='slick-prev slick-btn' src='../images/icons/previous.svg'>",
        nextArrow: "<img class='slick-next slick-btn' src='images/icons/next.svg'>"
    });

    $('.reviews__items').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });

    $('.faq__list-title').on('click', function(e) {
        jQuery(this).toggleClass('faq__list-title--active');
        jQuery(this).next().slideToggle('200');
    });
})