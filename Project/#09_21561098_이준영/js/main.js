/* TITLE */

$('#title-box').delay(3000).fadeOut();

/* CLOCK */
var daysofweek = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];
var month =['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';
    var daytoday = today.getDay();
    var date = today.getDate();
    var mon = today.getMonth();
    var year = today.getFullYear();

    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('time').innerHTML = day;
    document.getElementById(''+daysofweek[daytoday]+'').style.color = '#ff3339';
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = month[mon];
    document.getElementById('year').innerHTML = year;

}
var inter = setInterval(clock,400);

/* BLUR */
$(document).ready(function() {
    animateDiv('.blur-circle1');
    animateDiv('.blur-circle2');
    animateDiv('.blur-circle3');
    animateDiv('.blur-circle4');
  });
  
  function makeNewPosition($container) {
      $container = ($container || $(window))
      var h = $container.height() - 50;
      var w = $container.width() - 50;
  
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
  
      return [nh, nw];
  
  }
  
  function animateDiv(itemToMove) {
      var $target = $(itemToMove);
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
  
      $(itemToMove).animate({
          top: newq[0],
          left: newq[1]
      }, speed, function() {
          animateDiv(itemToMove);
      });
  };
  
  function calcSpeed(prev, next) {
  
    var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);
      var greatest = x > y ? x : y;
      var speedModifier = 0.1;
      var speed = Math.ceil(greatest / speedModifier);
  
      return speed;
  }

/* HUD */

$('#pulsar').hide();
$('#flat').hide();
$('#pulsar').delay(15500).fadeIn();

$('.delete').click(function(){
    $('#pulsar').hide();
    $('#flat').fadeIn();
    $('.animation,.battery line,.temp p').fadeOut();
    $('#skilltab').html(data);
    $('.skill').removeClass('active');
})


setInterval(function(){ 
    var rowNumber = Math.floor((Math.random()*10)+96);
    var highNumber = Math.floor((Math.random()*10)+120);
    $('#high').html(highNumber);
    $('#row').html(rowNumber);
}, 1000);

$('.skill').click(function(){
    $('.skill').removeClass('active');
    $(this).addClass('active');
    var data = $(this).attr("rel");
    $('#skilltab').html(data);
    $('#skillper').css({
        'stroke-dashoffset': -(data * 5) 
    });
    $(this).parent().addClass('animate');
})
$('.quest').find('.rank').html('quest');
$('.complete').click(function(){
    $(this).parent().find('.rank').html('complete');
    $(this).parent().addClass('inactive');
});

var $windowWidth = $(window).width();
var $currentWidth = $windowWidth/1920;
var $media = "@media (max-width:" +$windowWidth+ "px){.transform{transform:scale("+$currentWidth+","+$currentWidth+")}}"
$('style').html($media);

$(window).on("resize", function(event){
    var $windowWidth = $(this).width();
    var $currentWidth = $windowWidth/1920;
    var $media = "@media (max-width:" +$windowWidth+ "px){.transform{transform:scale("+$currentWidth+","+$currentWidth+")}}"
    $('style').html($media);
});
