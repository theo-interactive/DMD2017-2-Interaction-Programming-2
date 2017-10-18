(function($){
$(document).ready(function(){
//!! start code !!

//video button
var clickVideoButton = function(){
  var i = $(this).index();
  console.log(i);
  $('#iframebox').find('iframe').css({
    'z-index':9998
  });
  $('#iframebox').find('iframe').eq(i).css({
    'z-index':9999
  });
  $('#iframebox').fadeIn();
}
$('#view div > a').on('click', clickVideoButton);
$('#iframebox').on('click', function(){
  $(this).fadeOut();
});
//document

});//ready code
})(jQuery);
