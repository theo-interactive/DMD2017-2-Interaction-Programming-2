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
// $(".ko").on({"mouseover":function(){$(this).text("Korean").css("letter-spacing","-0.03em");},"mouseleave":function(){
//   $(this).text("한국어").removeAttr("style");
// }
// });
;}
);


// 버튼 클릭시 이동버튼
// $('#scroll_bar').click(function(event){
//                 event.preventDefault();
//             $('html,body').animate({scrollTop: $('#about').offset().top},'slow');
// });
// $('.text_indent:first').click(function(event){
//                 event.preventDefault();
//             $('html,body').animate({scrollTop: $('#web').offset().top},'slow');
// });



// 음악 재생 멈춤
function init() {
  width = window.innerWidth,
  height = window.innerHeight;
}

function onMouseDown(event) {
  mouseDown = true;
}
function onTouchStart(event) {
  const targetClass = event.target.classList[0];
  if (targetClass === 'toggle' || targetClass === 'toggle-music') return;
  event.preventDefault();
  mouseDown = true;
}

function onMouseUp() {
  mouseDown = false;
}
function onTouchEnd(event) {
  const targetClass = event.target.classList[0];
  if (targetClass === 'toggle' || targetClass === 'toggle-music') return;
  event.preventDefault();
  mouseDown = false;
}

const worldMusic = document.querySelector('.world-music');
const btnMusic = document.querySelector('.toggle-music');
let playMusic = false;
btnMusic.addEventListener('click', toggleMusic);
worldMusic.volume = 0.8;
worldMusic.loop = true;

function toggleMusic() {
  playMusic = !playMusic;
  btnMusic.classList.toggle('music-off');
  playMusic ? worldMusic.play() : worldMusic.pause();
}



// var worldMusic = document.querySelector('.world-music');
// var btnMusic = document.querySelector('.toggle-music');
// let playMusic = false;
// var audio = new Audio('./music.mp3');
// btnMusic.addEventListener('click', function(){
//   if(playMusic =! playMusic){
//       audio.play();
//   }else{
//     audio.pause();
//   }
// });
// worldMusic.volume = 0.8;
// worldMusic.loop = true;
