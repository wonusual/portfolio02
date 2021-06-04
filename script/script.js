$(document).ready(function () {

    //    function topbar_change() {
    //        $(window).scroll(function () {
    //            var topbar_change = $(this).scrollTop();
    //            if (topbar_change > 0) {
    //                $("header").addClass("active");
    //                $(".top-bar").addClass("active");
    //                $(".logo-box").addClass("active");
    //            } else {
    //                $("header").removeClass("active");
    //                $(".top-bar").removeClass("active");
    //                $(".logo-box").removeClass("active");
    //            }
    //        });
    //
    //    }
    //    topbar_change();

    function toggle() {
        $(".hamburger-box").click(function () {
            $(".nav-tabile-bg").addClass("active");
            $(".nav-tabile").addClass("active");
            $(".nav-off-btn").addClass("active");
            $(".off-icon01").addClass("active");
            $(".off-icon02").addClass("active");
        });
    }
    toggle();

    function toggle_detail() {

        $(".toggle-menu > ul > .li > a").on("click", function () {
            $(this).next(".submenu").slideToggle();
            $(this).parent().siblings().removeClass("active").find(".submenu").slideUp();
            $(this).parent().toggleClass("active");
        });
    }
    toggle_detail();


    function toggle_off() {
        $(".nav-off-btn").click(function () {
            $(".nav-tabile").removeClass("active");
            $(".nav-tabile-bg").removeClass("active");
        });

    }
    toggle_off();

    function toggle_off_02() {
        $(".nav-tabile-bg").click(function () {
            $(".nav-tabile").removeClass("active");
            $(".nav-tabile-bg").removeClass("active");
        });

    }
    toggle_off_02();

    function func01() {

        $(".menu02 > .search-icon").click(function () {
            $(".menu02").addClass("active");
            $(".hamburger-box").addClass("active");
            $(".menu02 > .logo a").addClass("active");
            $(".cancel-wrap").addClass("active");
            $(".flexible-search-wrap").addClass("active");
        });

        $(".cancel-wrap").click(function () {
            $(".menu02").removeClass("active");
            $(".hamburger-box").removeClass("active");
            $(".menu02 > .logo a").removeClass("active");
            $(".cancel-wrap").removeClass("active");
            $(".flexible-search-wrap").removeClass("active");
        });
    }
    func01();

    function func02() {
        $(".for-active").click(function () {
            $(".for-active").addClass("active");
            $(".for-active a p").addClass("active");
            $(".for-active span").addClass("active");
            $(".for-active span > i").addClass("active");
            $(".search-box input").addClass("active");
        });
    }
    func02();

    function slide() {
        $(".mainSlide-wrap").slick({

            autoplay: true,
            fade: true,
            dots: true,
            dotsClass: 'slick-dots',
            autoPlaySpeed: 7000,
            pauseOnHover: false,
            arrows: true,
            prevArrow: "<div class='left-btn'></div>",
            nextArrow: "<div class='right-btn'></div>",
            draggable: true,

            //              responsive: [
            //
            //                {
            //                    breakpoint: 0,
            //                    settings: {
            //                        arrows: false,
            //
            //                    },
            //                    breakpoint: 320,
            //                    settings: {
            //                        arrows: false,
            //
            //                    },
            //
            //                    breakpoint: 768,
            //                    settings: {
            //                         arrows: true,
            //                    },
            //
            //
            //                    }
            //
            //            ]

        });

        $(".play-btn").click(function () {
            $(".play-btn").removeClass("active");
            $(".pause-btn").addClass("active");
            $(".mainSlide-wrap").slick("slickPlay");
        });

        $(".pause-btn").click(function () {
            $(".pause-btn").removeClass("active");
            $(".play-btn").addClass("active");
            $(".mainSlide-wrap").slick("slickPause");
        });

    }
    slide();

    //    function alert() {
    //        $(".for-active").click(function () {
    //            $(".hidden").addClass("active");
    //            $(".for-active").addClass("active");
    //        });
    //
    //        $(".hidden").click(function () {
    //            if ($.trim($("#sch1").val()) == "") {
    //                alert("입력해주세요.");
    //                return false;
    //            }
    //            $("#next_form").submit();
    //        });
    //    }
    //    alert();

    function slide02() {
        $(".list-wrap").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            dotsClass: 'slick-dots',
            centerMode: true,
            variableWidth: false,
            //            focusOnSelect: true,
            //            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            centerPadding: '100px',
            nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"></div>',
            prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"></div>',
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '100px',
                    }
          },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '80px',

                    }
         },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '50px',

                    }
         }
      ]
        });


        $(".play-btn-2").click(function () {
            $(".play-btn-2").removeClass("active");
            $(".pause-btn-2").addClass("active");
            $(".list-wrap").slick("slickPlay");
        });

        $(".pause-btn-2").click(function () {
            $(".pause-btn-2").removeClass("active");
            $(".play-btn-2").addClass("active");
            $(".list-wrap").slick("slickPause");
        });
    }
    slide02();


    function slick() {
        $(".slick").slick({
            autoplay: true,
            fade: true,
            autoplaySpeed: 6000,
            dots: true,
            arrows: true,
            nextArrow: '<div class="slick-custom-arrow-2 slick-custom-arrow-right-2"></div>',
            prevArrow: '<div class="slick-custom-arrow-2 slick-custom-arrow-left-2"></div>',
        });
        $(".play-btn-3").click(function () {
            $(".play-btn-3").removeClass("active");
            $(".pause-btn-3").addClass("active");
            $(".slick").slick("slickPlay");
        });

        $(".pause-btn-3").click(function () {
            $(".pause-btn-3").removeClass("active");
            $(".play-btn-3").addClass("active");
            $(".slick").slick("slickPause");
        });
    }
    slick();


    function slick02() {
        $(".slick02").slick({
            autoplay: true,
            fade: true,
            autoplaySpeed: 8000,
            dots: true,
            arrows: true,
            nextArrow: '<div class="slick-custom-arrow-3 slick-custom-arrow-right-3"></div>',
            prevArrow: '<div class="slick-custom-arrow-3 slick-custom-arrow-left-3"></div>',
        });
        $(".play-btn-4").click(function () {
            $(".play-btn-4").removeClass("active");
            $(".pause-btn-4").addClass("active");
            $(".slick02").slick("slickPlay");
        });

        $(".pause-btn-4").click(function () {
            $(".pause-btn-4").removeClass("active");
            $(".play-btn-4").addClass("active");
            $(".slick02").slick("slickPause");
        });
    }
    slick02();

    function slick03() {
        $(".slick03").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 2,
            dots: true,
            arrows: true,
            nextArrow: '<div class="slick-custom-arrow-4 slick-custom-arrow-right-4"></div>',
            prevArrow: '<div class="slick-custom-arrow-4 slick-custom-arrow-left-4"></div>',
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
          },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,

                    }
         },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,

                    }
         }
      ]
        });
    }
    slick03();

    function video_play() {

        $(".v-play-btn span").click(function () {
            $(".v-play-btn").addClass("active");
            $(".video-img").addClass("active");
        });
    }
    video_play();

    function footer_menu() {

        $(".footer-box02 .floatmenu > span").on("click", function (e) {
            e.preventDefault();
            $(this).next(".sub").slideToggle();
            $(this).parent().siblings().removeClass("active").find(".sub").slideUp();
            $(this).parent().toggleClass("active");
        });


    }
    footer_menu();


    $(".top-btn").click(function () {
        $("html , body").animate({
            scrollTop: 0
        }, 0);
    });
});
$(document).scroll(function () {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    if (scrollTop > 0) {
        $(".top-btn").addClass("active");
        $(".kakao-icon").addClass("active");
    } else {
        $(".top-btn").removeClass("active");
        $(".kakao-icon").removeClass("active");
    }
})
