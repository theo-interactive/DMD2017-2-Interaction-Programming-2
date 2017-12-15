<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Ajax_21661111_jeondain</title>
<link rel="stylesheet" href="./css/musicstyle.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>

</head>
<body>
<div id="wrap">
    <div class="chart-section">
        <h1>dains favorite</h1>
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
        url : 'data/bugs.json',
        dataType : 'json',
        success : function(data){
            console.log(data);
            //json배열 - response
            var items = data ["items"][0]["thumbnails"], html = '', $list = $('#itunes-movie')
            console.log(items);
            $.each(items, function(i, d){
                var title = d["title"], singer = d["singer"], album = d["album"], url = d["url"], imgPath = d["poster_2x"];
                console.log('items 0 - ' + i + ':',d);
                html += '<li class = "movie-item">';
                html +=     '<div class = "poster">';
                html +=         '<a href="'+ url + '" target="_blank" >';
                html +=             '<img src="' + imgPath + '" alt = "'+ title +'">';
                html +=         '</a>';
                html +=     '</div>';
                html +=     '<div class = "name">';
                html +=         '<a href="'+ +'" target="'+ title +'">'+title+'</a>';
                html +=     '</div>';
                html +=     '<div class = "singer">';
                html +=         '<a href="'+ +'" target="'+ singer +'">'+singer+'</a>';
                html +=     '</div>';
                html +=     '<div class = "album">';
                html +=         '<a href="'+ +'" target="'+ album +'">'+album+'</a>';
                html +=     '</div>';
                html += '</li>'

                    //애니메이션 시작.
                    //아이템의 셀렉터가 DOM에 붙어야만 찾을 수 있음:3
                    //TWeenLite.set(셀렉터, {'width':100+'%', 'height':100+'px', 'x':0, 'y':0;});
                    //TweenLite.to(셀렉터, 애니메이션시간, {적용할값});
                    //적용할 값
                    //{css:{}, delay:0.2, ease:Power4.easeInOut, onComplete:function(){}};
                    //durtation-애니메이션 시간, css-스타일 delay-딜레이되는 시간 ease-가속도 oncomplete-애니메이션이 완료된 시점(callback)
                    //set-css.시간이 없다. setting. 초기값 세팅.
                    //to-애니메이션 할 때.
                    //TweenMax.set();
                    //TweenMax.to();

                if( i == items.length - 1){
                    console.log(html);
                    $list.empty().html(html);

                   
                    var $item = $list.children('.movie-item');
                    var orders = shuffle($item.length);

                    $.each($item,function(j,e){
                        var $el = $(e), $poster = $el.find('.poster'),$title = $el.find('.name'),$id = $el.find('h2'); 
                      
                        TweenLite.set($poster,{css:{'autoAlpha':0,'y':50}});
                        TweenLite.set($title,{css:{'autoAlpha':0,'y':70}});
                        TweenLite.set($id,{css:{'autoAlpha':0,'rotation':0,'y':-100}});
                          
                        TweenLite.to($poster,0.2,{css:{'autoAlpha':1,'y':0},delay:0.5 + 0.03 *  orders[j]});
                        TweenLite.to($title,0.2,{css:{'autoAlpha':1,'y':0},delay:0.5 +  0.02 * orders[j]});
                        TweenLite.to($id,0.2,{css:{'autoAlpha':1,'rotation':360,'y':0},delay:0.5 +  0.05 * j});
                    })

                    $('li').on('mouseenter',function(){ 
                        $('.score').css('color','salmon');
                      
                    });
                    $('li:nth-of-type(2n)').on('mouseenter',function(){ 
                        $('.score').css('color','#a169ff');
                    });

                }
            });

        },
        error : function(error){
            console.log(error);
        }
    });
});
</script>
</body>
</html>