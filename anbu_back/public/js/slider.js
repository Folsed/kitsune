$(function () {
    var slideWidth = $('.slide_block').width(), colSlide = $('.slide_cont').length - 1, numSlide = 0, intervalS = 5000, transitionS = 2, autoSlide = true, swipeC = 0, intervalSLide = setInterval(function () { rightSlide(); }, intervalS); $('.slide_cont').width(slideWidth); $('.slide_body').css('transition', 'all ease ' + transitionS + 's'); $('.slide_bg').css('transition', 'all ease ' + transitionS + 's'); $('.slide_bg_1').css('transition', 'all ease ' + transitionS + 's'); $(window).resize(function () { slideWidth = $('.slide_block').width(); $('.slide_cont').width(slideWidth); slideAnim(); });

    function leftSlide() {
        clearInterval(intervalSLide); $('.slide_arrow.left_arrow').off(); $('.slide_arrow.right_arrow').off(); $('.slide_body').off('mousedown touchstart'); if (numSlide > 0) { numSlide--; } else { numSlide = colSlide; }
        slideAnim(); setTimeout(function () { $('.slide_arrow.left_arrow').on('click', leftSlide); $('.slide_arrow.right_arrow').on('click', rightSlide); $('.slide_body').on('mousedown touchstart', mouseEventStart); if (autoSlide) intervalSLide = setInterval(function () { rightSlide(); }, intervalS); }, transitionS + '050');
    }
    function rightSlide() {
        if (!Visibility.hidden()) {
            clearInterval(intervalSLide); $('.slide_arrow.left_arrow').off(); $('.slide_arrow.right_arrow').off(); $('.slide_body').off('mousedown touchstart'); if (numSlide < colSlide) { numSlide++; } else { numSlide = 0; }
            slideAnim(); setTimeout(function () { $('.slide_arrow.left_arrow').on('click', leftSlide); $('.slide_arrow.right_arrow').on('click', rightSlide); $('.slide_body').on('mousedown touchstart', mouseEventStart); if (autoSlide) intervalSLide = setInterval(function () { rightSlide(); }, intervalS); }, transitionS + '050');
        }
    }
    function slideAnim() { $('.slide_body').css('left', '-' + (slideWidth * numSlide) + 'px'); $('.slide_bg').css('left', '-' + (slideWidth / 3 * numSlide) + 'px'); $('.slide_bg_1').css('left', '-' + (slideWidth / 4 * numSlide) + 'px'); }
    function mouseEventStart(e) { var e = e || event; swipeC = e.clientX; $('.slide_body').on('mouseup', mouseEventEnd); }
    function mouseEventEnd(e) {
        var e = e || event; if (swipeC - e.clientX > 20 || swipeC - e.clientX < -20) { $('.slide_cont a').on('click', function () { return false; }); if (swipeC > e.clientX) { rightSlide(); } else { leftSlide(); } }
        $('.slide_body').off('mouseup touchend'); $('.slide_cont a').off('click');
    }
    $('.slide_arrow.left_arrow').on('click', leftSlide);
    $('.slide_arrow.right_arrow').on('click', rightSlide);

    $('.slide_body').on('mousedown touchstart', mouseEventStart);
    $('.slide_body img').on('mousedown', function () { return false; });
});
