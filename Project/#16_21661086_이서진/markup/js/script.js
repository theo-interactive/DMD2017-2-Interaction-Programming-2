var init = function(){    
    var min = document.getElementById('min');
    var min_end = document.getElementById('min_end');
    var hour = document.getElementById('hour');
    var hour_end = document.getElementById('hour_end');
    var month = document.getElementById('month');
    var day = document.getElementById('day');
    var seatText =  document.getElementById('seat_T');
    var seatNum = document.getElementById('seat_N');

    var time;
    var clickNumber = 0;
    var sound = new Audio('EternalSunshine.mp3');
    var soundPause = document.getElementById('bgSound');
    var trailerControl = document.getElementsByClassName('ytPlay');
    var soundMenu = document.getElementById('sound');
    sound.loop = true;
    sound.play();
    randomAlpha();
   console.log(soundMenu);
   
    var numArr = Math.floor(Math.random()*15)+1;

    function randomAlpha(){
      var seatArr =  "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
      var seatArr2 =seatArr.charAt(Math.floor(Math.random() * seatArr.length));
      seatText.innerHTML = seatArr2;
    };

    function intervalHandler(){
    time = new Date();
    min.innerHTML = addZero(time.getMinutes());
    min_end.innerHTML = addZero(time.getMinutes());
    hour.innerHTML = addZero(time.getHours());
    hour_end.innerHTML = addZero(time.getHours()+2);
    month.innerHTML = addZero(time.getMonth()+1);
    day.innerHTML = addZero(time.getDate());
    seatNum.innerHTML = numArr;
    }
    setInterval(intervalHandler,1);
    
  
  function addZero (i) {
    if (i < 10) {
        return '0' + i;
    }else {
        return i;
    }
  }
  //var numArr = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15"];


  function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }
  // console.log("메롱"+randomItem(numArr));
  function soundControl(){
    clickNumber++;
    if(clickNumber%2==0){
    sound.play();
    soundPause.style.backgroundImage= "url(images/equalizer.gif)"
    }else{
    sound.pause();
    soundPause.style.backgroundImage= "url(images/equalizer_stop.png)"
    }
  }
    soundPause.addEventListener('click',soundControl);
  }; 
  
  function soundPauseControl(){
    sound.currentTime = 0;
    soundPause.style.backgroundImage= "url(images/equalizer_stop.png)"
  }
  // soundMenu.addEventListener('click',soundPauseControl);
  
//   $('a.ytPlay').on('mousedown',function(){
//     console.log("음악스탑")
//     sound.pause();
//     $('#bgSound').css({'background-image':'url(../images/equalizer_stop.png)'});
// });

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player,player2,player3,player4,player5,player6,player7,player8,player9;
    function onYouTubeIframeAPIReady(){
        player = new YT.Player('ytplayer');
        player2 = new YT.Player('ytplayer2');
        player3 = new YT.Player('ytplayer3');
        player4 = new YT.Player('ytplayer4');
        player5 = new YT.Player('ytplayer5');
        player6 = new YT.Player('ytplayer6');
        player7 = new YT.Player('ytplayer7');
        player8 = new YT.Player('ytplayer8');
        player9 = new YT.Player('ytplayer9');
        

        $(".video_close").on('click', function(){
          console.log("adsfds");
        player.stopVideo();
        player2.stopVideo();
        player3.stopVideo();
        player4.stopVideo();
        player5.stopVideo();
        player6.stopVideo();
        player7.stopVideo();
        player8.stopVideo();
        // player9.stopVideo();
        $(".YT_all").css({'display':'none'});
     
        sound.play();
        soundPause.style.backgroundImage= "url(images/equalizer.gif)"

    });
    }
document.addEventListener('DOMContentLoaded',init);