window.onload = function(){
  var elm = document.querySelector('#count');
  setInterval(function(){
    if(!elm.innerHTML.match(/100%/gi)){
      elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
    } else {
      clearInterval();
    }
  }, 18);
}

		$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage'],
				menu: '#menu',
				slidesNavigation: true,
				afterLoad: function(anchorLink, index){

					if(anchorLink !== 'firstPage'){
						//moving the image
						$('#clock,#circle300left,#circle300right,#circle710left,#circle710right').addClass('hidden');
					} else{
						$('#clock,#circle300left,#circle300right,#circle710left,#circle710right').removeClass('hidden');
					}
					//section 3
					if(anchorLink == '3rdPage'){
						//moving the image
						$('#section2').find('.intro').delay(500).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
					}
				}
			});
			$('#load').delay(2000).fadeOut();
  			draw();
  			place();
  			clock();
		});

function draw(){
  for(i=0;i<60;i++){
    D = (i<10) ? '0'+i : i;
    $('#s').append('<li data-item='+D+'>'+D+'</li>');
  }
  for(i=0;i<60;i++){
     D = (i<10) ? '0'+i : i;
    $('#m').append('<li data-item='+D+'>'+D+'</li>');
  }
  for(i=0;i<24;i++){
     D = (i<10) ? '0'+i : i;
    $('#h').append('<li data-item='+D+'>'+D+'</li>');
  }
}
function place(){
  hdeg = 15;
  msdeg = 6;
  $('#s li').each(function(index){
    $(this).css({transform: 'rotateZ('+msdeg * index +'deg) translateX('+ parseInt(520) +'px)'});
  });
  $('#m li').each(function(index){
    $(this).css({transform: 'rotateZ('+msdeg * index +'deg) translateX('+ parseInt(490) +'px)'});
  });
  $('#h li').each(function(index){
    $(this).css({transform: 'rotateZ('+hdeg * index +'deg) translateX('+ parseInt(460) +'px)'});
  });
}
function sec(ts,timer){
  TS = ts % 60;
  if(ts == 0 && timer) min(0,timer);
  deg = 360/60 * ts;
  $('#s li').removeClass('active');
  $('#s li').eq(TS).addClass('active');
  $('#s').css({transform: 'rotateZ(-'+deg+'deg)'});
  ts++;
  if(timer) setTimeout(function(){sec(ts,timer)},TIME * 1000);
}
function min(tm,timer){
  TM = tm % 60;
  if(tm == 0 && timer) hour(0,timer);
  deg = 360/60 * tm;
  $('#m li').removeClass('active');
  $('#m li').eq(TM).addClass('active');
  $('#m').css({transform: 'rotateZ(-'+deg+'deg)'});
  tm++;
  if(timer) setTimeout(function(){min(tm,timer)}, TIME * 60000);
}
function hour(th,timer){
  TH = th % 24;
  deg = 360/24 * th;
  $('#h li').removeClass('active');
  $('#h li').eq(TH).addClass('active');
  $('#h').css({transform: 'rotateZ(-'+deg+'deg)'});
  th++;
  if(timer) setTimeout(function(){hour(th,timer)}, TIME * 3600000);
}
function clock(){
  d = new Date();
  H = d.getHours();
  M = d.getMinutes();
  S = d.getSeconds();
  hour(H,0);
  min(M,0);
  sec(S,0);
  setTimeout(function(){clock();},1000);
}