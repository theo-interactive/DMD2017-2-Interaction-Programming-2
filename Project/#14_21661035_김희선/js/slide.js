$(window).resize(function(){
    legthCTL();
})

$(document).ready(function() {
  var listnum = 0;
  var listlength = $(".list li").length;
  $('.list').css('width',(300*listlength)+'px');
  /*
  $('.list').css('width':(399*listlength)+'px','뭐시기'여러개 가능);
  */
  listlength--;
  /*
  listlength = listlength - 1;
  listlength -= 1;
  같은말
  */

  legthCTL();
  btnCTL(listnum,listlength);

        if (listnum == 0) {
    $('.prev').css('display', 'none')
  }else  {
    $('.prev').css('display', 'block')
  }


  $('#Drawing > a').click(function(){
    if ($(this).hasClass('prev')) {
      listnum--;
    }else {
      listnum++;
    }
    btnCTL(listnum,listlength);
  })
})
/*
위의 테그가 아래를 간추린것
  $('.prev').click(function () {
    //$('.listwrap')css({'left':)
      listnum--;
      btnCTL(listnum,listlength);
  })
  $('.next').click(function () {
    listnum++;
    btnCTL(listnum,listlength);
  })
})
*/
//도큐먼트 레디 끝 펑션은 따로 밖에 쓰는 버릇

// $전역번수 만들기
$lastnum = 0;
$currentNum = 0 ;

//창의 크기가 바뀔때 값을 다시받아서 버튼과 사진ㄴ을 재배치ㅣㅣㅣ
function legthCTL(l1,l2) {
  var windowWidth = $(window).width();
  var cardnum = Math.floor(windowWidth/300);
  $lastnum = cardnum - 1;

  if($lastnum !== $currentNum){
    btnCTL(l1,l2);
  }
  $currentNum = $lastnum;
}

//btnCTL(listnum,listlength); 다른이름으로 받기 햇깔리니까...
function btnCTL(l1,l2) {
  if (l1 == 0) {
    $('.prev').css('display', 'none')
    $('.next').css('display', 'block')
  }else if (l1 == (l2 - $lastnum )) {
    $('.prev').css('display', 'block')
    $('.next').css('display', 'none')
  }else {
    $('.prev').css('display', 'block')
    $('.next').css('display', 'block')
  }
  $('.list').stop().animate({'left':(-300*l1)+'px'})
}

