
$(function () {

    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 50
    });

    $('a[href^="#"]').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        });
        e.preventDefault();
    });

    $('#intro').backstretch(['assets/img/b1.jpg']);

    $('.rotate').textrotator({
        animation: "dissolve",
        separator: "|",
        speed: 3000
    });

    var $navbar = $('.navbar');
    var navHeight = $navbar.height();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navHeight) {
            $navbar.addClass('navbar-color');
        } else {
            $navbar.removeClass('navbar-color');
        }
    });

});