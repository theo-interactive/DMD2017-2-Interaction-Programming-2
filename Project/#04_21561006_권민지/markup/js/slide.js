$(function() {
    //configs
        // $('.banner-wrap').width($('.banner').width()).height($('.banner').height());
        // $('.banner-container').width($('.banner-wrap').width() * $('.banner-item').length).height('100%');
        // $('.banner-item').css({'width' : $('.banner-wrap').width(), 'height' : '100%'});
        // var _id = 0;
        // var _max = $('.banner-item').length;
        // var _isAni = false;
        // var timer;
  
    //dom
    var $slider = $('.banner-wrap');
    var $slideContainer = $('.banner-container');
    var $slides = $('.banner-item');
  
    var interval;
  
    console.log($('.banner').width());
    function startSlider() {
      interval = setInterval(function() {
        $slideContainer.animate({
          'margin-left': '-=' + $('.banner').width()
        }, animationSpeed, function() {
          if (++currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
          }
        });
      }, pause);
    }
  
    function pauseSlider() {
      clearInterval(interval);
    }
  
    $slideContainer
      .on('mouseenter', pauseSlider)
      .on('mouseleave', startSlider);
  
    startSlider();
  });