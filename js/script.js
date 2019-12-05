$(function () {

    //banner js 
    $('#banner').slick({
        dots: true,
        dotsClass: "banner_dots",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        prevArrow: '<i class="fas btn-left fa-angle-left"></i>',
        nextArrow: '<i class="fas btn-right fa-angle-right"></i>',
    });

    $(window).on('scroll', function () {

        var scrol = $(window).scrollTop();

        if (scrol > 200) {

            $(".backtop").fadeIn(1000);
        } else {
            $(".backtop").fadeOut(1000);
        }


    });

    $(".backtop").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });



    $(".customNav ul li a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //lightbok js 
    $('.venobox').venobox({
        spinner: 'three-bounce',
        spinColor: 'red',
    });

    //loder
    $(window).on('load', function () {

        $('.preloader').delay(500).fadeOut(1000);

    });

    //menu active
    $(".nav-item a").on('click', function () {

        $(".nav-item a").removeClass('active');
        $(this).addClass('active');

    });

});
