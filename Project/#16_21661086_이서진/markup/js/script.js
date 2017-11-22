
var init = function(){
    // var sec = document.getElementById('sec');
    // var min = document.getElementById('min');
    // var hour = document.getElementById('hour');
    // var time;
    var clickNumber = 0;
    var sound = new Audio('equals.mp3');
    var soundPause = document.getElementById('sound_Control');
    sound.play();

    // function intervalHandler(){
    // time = new Date();
    // sec.innerHTML = addZero(time.getSeconds());
    // min.innerHTML = addZero(time.getMinutes());
    // hour.innerHTML = addZero(time.getHours());
    // }
    // setInterval(intervalHandler,1000);

    // function addZero(num){
    //   if (num < 10){
    //     return '0'+ num;
    //   }
    //   return num;
    // }

    function soundControl(){
        clickNumber++;
        if(clickNumber%2==0){
        sound.play();
        soundPause.style.backgroundImage= "url(image/equalizer.gif)"
        }else{
        sound.pause();
        soundPause.style.backgroundImage= "url(image/equalizer_stop.png)"
    
        }

    }
    soundPause.addEventListener('click',soundControl);
  };  
  document.addEventListener('DOMContentLoaded',init);