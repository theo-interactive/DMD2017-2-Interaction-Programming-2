(function($){
$(document).ready(function(){
//!! start code !!
var $win = $(window);
var $doc = $(document);
var docH = $doc.height();

var audio = new Audio('time.mp3');
audio.play();

$('.audiobox').on('click', function(){
  if($(this).hasClass('stop')){
    audio.play();
    $(this).removeClass('stop');
  }else{
    audio.pause();
    $(this).addClass('stop');
  };
});
//video button
var clickVideoButton = function(){
  var i = $(this).index();
  // console.log(i);
  $('#iframebox').find('iframe').css({
    'z-index':9998
  });
  $('#iframebox').find('iframe').eq(i).css({
    'z-index':9999
  });
  $('#iframebox').fadeIn();
};

$('#view div > a').on('click', clickVideoButton);
$('#iframebox').on('click', function(){
  $(this).fadeOut();
});

var commonResize = function(){
  var $pansTbox = $('#pans .tboxc');
  $pansTbox.css({
    'left': $win.width()/2 - $pansTbox.outerWidth()/2
  })
}

var commonScroll = function(){
  $('#img_1 img').css({
    'opacity':1 - $win.scrollTop()*0.003
  });

  var comm1Top = $('.comm1').offset().top - $win.height()/1.3;
      comm2Top = $('.comm2').offset().top - $win.height()/1.3;
      comm3Top = $('.comm3').offset().top - $win.height()/1.3;
      comm4Top = $('.comm4').offset().top - $win.height()/1.3;

  if($win.scrollTop() > comm1Top){
    $('.comm1 > div').css({
      'opacity':1
    });
  };
  if($win.scrollTop() > comm2Top){
    $('.comm2 > div').css({
      'opacity':1
    });
  };
  if($win.scrollTop() > comm3Top){
    $('.comm3 > div').css({
      'opacity':1
    });
  };
  if($win.scrollTop() > comm4Top){
    $('.comm4 > div').css({
      'opacity':1
    });
  };
  var zeroInt = function(selecter){
    var offInt = function(selecter){
      var i = selecter.offset().top - $win.height();
      return i;
    };
    var i = $win.scrollTop() - offInt(selecter);
    return i;
  };
  var sensorHeight = function(selecter,gap){
    if(zeroInt(selecter) > 0){
      selecter.css({
        'top': gap + (zeroInt(selecter) * -0.02)  +'%'
      });
    }
  }
  sensorHeight($('#who .tbox'),37);
  sensorHeight($('#steel .tbox'),37);
  sensorHeight($('#hosuing .tbox'),37);
  sensorHeight($('#place .tbox'),32);
  sensorHeight($('#sea .tbox'),37);
  sensorHeight($('#pans .tboxc'),54);

  var $panImg = $('#pans .imgs'),
      $panImg1 = $('#pans .imgs img').eq(0),
      $panImg2 = $('#pans .imgs img').eq(1);
  if($win.scrollTop() > $('#pans').offset().top){
    $panImg.css({
      'filter':'grayscale('+ (160 - (zeroInt($panImg))*0.12) +'%)'
    })
    // console.log(160- zeroInt($panImg)*0.12);
  };
};

//document ready..;
var justReady = function(){
  readyAndResize();
}
var readyAndResize = function(){
  commonResize();
}
var windowScroll = function(){
  // textScroll();
  commonScroll();
}
$win.resize(readyAndResize);
$win.scroll(windowScroll);
justReady();
$win.trigger('resize');
$win.trigger('scroll');
});//document ready..;
})(jQuery);
