
$(function () {

    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 50
    });

    $('#intro').backstretch(['assets/img/b1.jpg']);

    $('.rotate').textrotator({
        animation: "dissolve",
        separator: "|",
        speed: 3000
    });

    var $navbar = $('.navbar');
    var navHeight = $navbar.height();
    console.log(navHeight);
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navHeight) {
            $navbar.addClass('navbar-color');
        } else {
            $navbar.removeClass('navbar-color');
        }
    });

});