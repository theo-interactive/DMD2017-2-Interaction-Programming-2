window.onload = function(){
  var elm = document.querySelector('#count');
  setInterval(function(){
    if(!elm.innerHTML.match(/100/gi)){
      elm.innerHTML = (parseInt(elm.innerHTML) + 1);
	  $('.hud').addClass('load');	
    } else {		
      clearInterval();	
    }
  }, 40);
;	
}
