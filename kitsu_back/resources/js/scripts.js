// Header

// var y = $(window).scrollTop()

// $(window).on('scroll', function () {
//     if ($(window).scrollTop() > 73) {
//         $('header').addClass('small-bar');
//     } else {
//         $('header').removeClass('small-bar');
//     }
// })

var prevScrollpos = $(window).scrollTop();
$(window).scroll(function () {
    var currentScrollPos = $(window).scrollTop();
    if (prevScrollpos > currentScrollPos) {
        $('header').css('top', '0');
    } else {
        $('header').css('top', '-80px');
    }
    prevScrollpos = currentScrollPos;
});
//============================================================================


// Tabs

$(function () {
    $('.tab-item').click(function () {
        $('.tab-item').removeClass('active');
        $(this).addClass('active');

        $('.panel-item').removeClass('active');
        $('.panel-item').eq($(this).index()).addClass('active');

    });
});

//============================================================================

// Slider

$(function () {
    $('.screenshots-slider').slick({
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        arrows: false,
        dots: true
    })
})
//============================================================================

// Auth

$(function () {
    $('.auth').click(function () {
        $('body').addClass('modal-open');
        var div = $('.box');
        $('.box').fadeIn();
        $('.auth-container').fadeIn();


        $(document).mouseup(function (e) {
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.box').fadeOut();
                $('.auth-container').fadeOut();
                $('body').removeClass('modal-open');
            }
        });
        $(document).on('keyup', function (e) {
            if (e.key == "Escape") {
                $('.box').fadeOut();
                $('.auth-container').fadeOut();
                $('body').removeClass('modal-open');
            }
        });
    });
});

$(function () {
    $('.signupBtn').click(function () {
        $('.box').addClass('signup')
        $('.form.signup').fadeIn();
    });
    $('.signinBtn').click(function () {
        $('.box').removeClass('signup')
        $('.form.signup').fadeOut();
    });

    var div = $('.box');

    $(document).mouseup(function (e) {
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.box').fadeOut();
            $('.auth-container').fadeOut();
            $('.box').removeClass('signup')
            $('.form.signup').fadeOut();
        }
    });
    $(document).on('keyup', function (e) {
        if (e.key == "Escape") {
            $('.box').fadeOut();
            $('.auth-container').fadeOut();
            $('.box').removeClass('signup')
            $('.form.signup').fadeOut();
        }
    });
});
//============================================================================


// Action Dropdown

var dropdown = document.getElementsByClassName("action-box")[0];

dropdown.addEventListener("mouseleave", function () {
    var dropdownContent = this.querySelector(".dropdown-content");
    dropdownContent.classList.add("hide");

    setTimeout(function () {
        dropdownContent.classList.remove("hide");
    }, 500);
});
