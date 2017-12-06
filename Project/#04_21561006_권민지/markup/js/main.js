var Expand = (function() {
    var tile = $('.slide_container');
    var tileLink = $('.slide_container > .slide__content');
    var tileText = tileLink.find('.slide_inner-text');
    var stripClose = $('.slider__close');
    
    var expanded  = false;
  
    var open = function() {
        
      var tile = $(this).parent();
  
        if (!expanded) {
          tile.addClass('slide_container--expanded');
          tile.addClass('opennn');
          // add delay to inner text
          tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
          stripClose.addClass('slider__close--show');
          stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
          expanded = true;
          ani();
        } 
      };
    
    var close = function() {
      if (expanded) {
        tile.scrollTop('.slide_container');
        tile.removeClass('opennn');
        tile.removeClass('slide_container--expanded');
        // tile.removeClass('opennn');
        // remove delay from inner text
        tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.removeClass('slider__close--show');
        stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
        expanded = false;
      }
    }
  
      var bindActions = function() {
        tileLink.on('click', open);
        stripClose.on('click', close);
      };
  
      var init = function() {
        bindActions();
      };
  
      return {
        init: init
      };
  
    }());
  
  Expand.init();
  
  
  $(document).ready(function(){
    $('.banner-wrap').width($('.banner').width()).height($('.banner').height());
    $('.banner-container').width($('.banner-wrap').width() * $('.banner-item').length).height('100%');
    $('.banner-item').css({'width' : $('.banner-wrap').width(), 'height' : '100%'});
    var _id = 0;
    var _max = $('.banner-item').length;
    var _isAni = false;
    var timer;
    
    var slideLeft = function(){
        if(_isAni) return false;
        if(_id === 0){
            return false;
        }else{
            _id--;
            slide();
        }
    }
    var slideRight = function(){
        if(_isAni) return false;
        if(_id === _max - 1){
            return false;
        }else{
            _id++;
            slide();
        }
    }
    var slide = function(bool = false){
        if(!bool){
            _isAni = true;
            $('.banner-container').stop(true).animate({'margin-left' : $('.banner').width() * _id * -1}, 500, function(){
                dotSelect();
                paddleCheck();
                _isAni = false;
            });                
        }else{
            $('.banner-container').stop(true).css({'margin-left' : $('.banner').width() * _id * -1});
            dotSelect();
            paddleCheck();
            _isAni = false;
        }
    }
    var dotSelect = function(){
        var $span = $('.dot-nav').find('span');
        $span.removeClass('selected');
        $span.eq(_id).addClass('selected');
    }
    var paddleCheck = function(){
        var $arrow = $('.paddle-nav').find('.arrow');
        if(_id === 0){
            $('.arrow.prev').addClass('disabled');
            $('.arrow.next').removeClass('disabled');
        }else if(_id === _max - 1){
            $('.arrow.prev').removeClass('disabled');
            $('.arrow.next').addClass('disabled');
        }else{
            $arrow.removeClass('disabled');
        }
    }
    $(window).trigger('resize');
    $('.arrow.prev').on('click', slideLeft);
    $('.arrow.next').on('click', slideRight);
    paddleCheck();
    })
  $(window).trigger('resize');
  autoSlider();
  paddleCheck();
  // pauseSlider();
  // stopPause();
  $('.arrow.prev').on('click', slideLeft);
  $('.arrow.next').on('click', slideRight);
  // paddleCheck();
  $('.slide').on('click', function(){
      console.log('clllcc');
      $('.wrap.city').removeClass('hide');
      $('.wrap.city').addClass('opeen');
  })
  
  var time01 = new TimelineMax();
  var time02 = new TimelineMax();
  function ani(){
      time01.set('#col_wrap01', {top:0})
      .from('#photo01', 1.5, {autoAlpha:0, x:"-=500", ease:Power2.easeOut})
      .from('#name01', 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut}, "-=1.1")
      .from('#subtitle01', 0.7, {autoAlpha:0, x:"+=50"}, "-=0.8")
      .from('#desc01', 1.3, {autoAlpha:0, y:"+=50", ease:Power2.easeOut}, "-=0.5")
      time01.staggerTo(['#photo01', '#name01', '#subtitle01', '#desc01'], 0.5, {autoAlpha:1});
  
      time02.set('#col_wrap02', {top:0})
      .from('#photo02', 1.5, {autoAlpha:0, x:"-=0", ease:Power2.easeOut})
      .from('#name02', 0.5, {scale:0.5, autoAlpha:0, ease:Back.easeOut}, "-=1.1")
      .from('#subtitle02', 0.7, {autoAlpha:0, x:"+=50"}, "-=0")
      .from('#desc02', 1.3, {autoAlpha:0, y:"+=50", ease:Power2.easeOut}, "-=0.5")
      time02.staggerTo(['#photo02', '#name02', '#subtitle02', '#desc02'], 0.5, {autoAlpha:1});
  }
  