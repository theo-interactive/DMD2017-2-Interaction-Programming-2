$(function(){
  console.log('홈페이지 준비 중 :D');
  $(window).on("load resize",function(){
    $moveBtn.removeClass("go_top");
    toTop_or_toBottom();
  });
  var $body=$("html,body");
  var $moveBtn=$(".to_top_bottom");
  var $homeBtn=$(".to_home");
  var moveToSwitch=true;
  var bodyHeight=$(document).height();
  function moveTop(timeVal){
    var time=800;if(timeVal!=null){
      time=timeVal;
    }$body.stop().animate({scrollTop:0},time);}
function moveBottom(timeVal){
  var time=800;
  if(timeVal!=null){time=timeVal;}
  $body.stop().animate({scrollTop:bodyHeight},time);
}
$moveBtn.on("click",function(evt){
  evt.preventDefault();
  if(moveToSwitch==false){
    moveTop();}else{moveBottom();}
  });
var scrollBottom=0;
var scrollOverBodyHeight=(bodyHeight/3)*2
function toTop_or_toBottom(){
  scrollBottom=$(window).scrollTop()+$(window).height();
  if(scrollBottom>=scrollOverBodyHeight){
    moveToSwitch=false;
    $moveBtn.addClass("go_top");
  }else{
    moveToSwitch=true;
    $moveBtn.removeClass("go_top");
  }
}
$(window).on("scroll",function(){
  toTop_or_toBottom()
});
$(".ko").on({"mouseover":function(){$(this).text("Korean").css("letter-spacing","-0.03em");},"mouseleave":function(){
  $(this).text("한국어").removeAttr("style");
}
});
$(".ja").on({"mouseover":function(){$(this).text("Japanese").css("letter-spacing","-0.03em");},"mouseleave":function(){
  $(this).text("日本語").removeAttr("style");
}});
;}
);



$('#scroll_bar').click(function(event){
                event.preventDefault();
            $('html,body').animate({scrollTop: $('#about').offset().top},'slow');
});
$('.text_indent:first').click(function(event){
                event.preventDefault();
            $('html,body').animate({scrollTop: $('#web').offset().top},'slow');
});
