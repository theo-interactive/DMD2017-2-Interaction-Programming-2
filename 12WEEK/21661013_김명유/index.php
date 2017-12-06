<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Ajax</title>
<link rel="stylesheet" href="./css/style.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
</head>
<body>
  <div id="wrap">
      <div class="chart-section">
          <h1>iTunes Chart</h1>
          <ol id="itunes-movie" class="movie-chart"></ol>
      </div>
  </div>
  <script type="text/javascript">
  var naverURL = 'http://movie.phinf.naver.net';
  function shuffleItems(o) {
      var i, r, s;
      for(i = o.length - 1; i > 0; i--){
          r = Math.floor(Math.random() * (i + 1));
          s = o[i];
          o[i] = o[r];
          o[r] = s;
      }
      return o;
  }
  function shuffle(max) {
      var o = [], i, r, s;
      for(i = 0; i < max; i++){
          o.push(i);
      }
      for(i = o.length - 1; i > 0; i--){
          r = Math.floor(Math.random() * (i + 1));
          s = o[i];
          o[i] = o[r];
          o[r] = s;
      }
      return o;
  }
  $(document).ready(function(){
      $.ajax({
          url : 'data/music.json',
          dataType : 'json',
          success:function(data){
              // console.log(data);
              var items = data["items"][0]["thumbnails"], $list = $('#itunes-movie'), html = '';
              // console.log(items);
              $.each(items, function(i, d){
                  // console.log(d);
                  var title = d["title"], url = d["url"], imgPath = d["poster_2x"], date = d["date"], singer = d["singer"], album = d["album"];
                  // console.log(i, title, url, imgPath);
                  html += '<li class="movie-item">';
                  html +=     '<div class="poster">';
                  html +=             '<img src="' + imgPath + '" alt="' + title + '">';
                  html +=     '</div>';
                  html +=     '<div class="name">';
                  html +=         title + '<br>' + album + '<br>' + singer + '<br>' + date
                  html +=     '</div>';
                  html += '</li>';
                  if(i == items.length - 1){//24
                      console.log(i)
                      $list.empty().html(html);
                      //var $item = $list.children('.movie-item'), $poster = $item.find('.poster'), $name = $item.find('.name');
                      var $item = $list.children('.movie-item');
                      var orders = shuffle($item.length);
                      $.each($item, function(j, e){
                          //셀렉터 변수.
                          var $el = $(e), $poster = $el.find('.poster'), $name = $el.find('.name');
                          //초기 세팅.
                          TweenLite.set($poster, {css:{'autoAlpha':0, 'y':15}});
                          TweenLite.set($name, {css:{'autoAlpha':0, 'y':35}});
                          //애니메이션.
                          // TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5});
                          // TweenLite.to($name, 0.3, {css:{'autoAlpha':1, 'y':0}, delay:0.5});
                          //순차적인 애니메이션.
                          // TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * j});
                          // TweenLite.to($name, 0.3, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * j});
                          //램덤 순.
                          TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                          TweenLite.to($name, 0.3, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                      });
                      /////////애니메이션 시작.(리스트 아이템)
                      /////////아이템의 셀렉터가 DOM 에 붙어야만 찾을 수 있다.
                      //set - css. 시간이 없다. setting. 초기값 세팅.
                      //to - 애니메이션 할 때.
                      // TweenLite.set(셀렉터, {'width':100+'%', 'height':100+'px', 'x':0, 'y':0 ... });
                      //$.animate({'':''})
                      // TweenLite.to(셀렉터, 애니메이션 시간, {적용할 값});
                      //{적용할 값.}
                      // {css:{}, delay:0.2, ease:Power4.easeInOut, onComplete:function(){
                      // }};
                      //duration - 애니메이션이 되는 시간, css - 스타일, delay - 딜레이되는 시간,
                      //ease - 가속도(https://greensock.com/get-started-js), onComplete - 애니메이션이 완료된 시점(callback)

                      //TweenMax.set();
                      //TweenMax.to();
                  }
              });
              //var arr = [0,1,2,3,4,5,6,7,8];
              //var arr = [{'title':'title 1'},{'title':'title 1'},{'title':'title 1'},{'title':'title 1'}]
          },
          error:function(error){
              console.log(error);
          }
      });
      // jQuery.ajax({
      // });
  });
  </script>
</body>
</html>
