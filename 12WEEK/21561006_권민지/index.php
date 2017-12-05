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
<div id="gridwrap">
    <h1>Christmas carol</h1>
    <div class="wrap"></div>
</div>
<script type="text/javascript">

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
// shuffle : 배열랜덤
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
            var items = data["items"], $list = $('.wrap'), html = '';
            // var items = data["items"][0] = category , category 있을 때 첫번째 category
            // console.log(items);
            $.each(items, function(i, d){
                var title = d["title"], album = d["album"], date = d["date_year"] + "." + d["date_month"] + "." + d["date_day"],
                time = d["time"], artist = d["artist"], genre = d["genre"], img = d["cover"];
                html += '<div class="item">';
                html += '<div class="img">'
                html += '<img src="' + img + '" alt="">'
                html += '</div>'
                html += '<div class="txt">'
                html +=     '<ul class="info">'
                html +=         '<li class="album">' + album + '</li>'
                html +=         '<li class="title">' + title + '</li>'
                html +=         '<li class="artist">' + artist + '</li>'
                html +=     '</ul>'
                html +=     '<p class="time">' + time + '</p>'
                html +=     '<ul class="clearfix">'
                html +=         '<li class="genre">' + genre + '</li>'
                html +=         '<li class="date">' + date + '</li>'
                html +=     '</ul>'
                html +=     '</div>'
                html += '</div>'
                if(i == items.length - 1){//24
                    // console.log(i);
                    $list.empty().html(html);
                    var $item = $list.children('.item');
                    var orders = shuffle($item.length);
                    $.each($item, function(j, e){
                        var $el = $(e), $image = $el.find('.img'), $info = $el.find('.txt');
                        // 초기세팅
                        TweenLite.set($image, {css:{'autoAlpha':0, 'y':10}});
                        TweenLite.set($info, {css:{'autoAlpha':0, 'x':5, 'y':40}});
                        // 애니메이션
                        //한번에
                        // TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, y:0}, delay:0.5});
                        // TweenLite.to($name, 0.2, {css:{'autoAlpha':1, y:0}, delay:0.7});
                        // 순차적
                        // TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, y:0}, delay:0.5 + 0.2 * j});
                        // TweenLite.to($name, 0.2, {css:{'autoAlpha':1, y:0}, delay:0.7 + 0.2 * j});
                        //랜덤
                        TweenLite.to($image, 0.2, {css:{'autoAlpha':1, y:0}, delay:0.1 + 0.1 * orders[j]});
                        TweenLite.to($info, 0.2, {css:{'autoAlpha':1, x:0,y:0}, delay:0.1 + 0.1 * orders[j]});
                        // autoAlpha : 0 = hidden
                    })

                    ///////////애니메이션 시작.(리스트 아이템)
                    ///////////아이템의 셀렉터가 DOM에 붙어야만 찾을 수 있다
                    //set - css. 시간이 없다. setting. 초기값 세팅.
                    // TweenLite.set(셀렉터, {'width':100+'%', 'height':100+'px', 'x':0, 'y':0...});
                    //$.animate({'':''})
                    //to - 애니메이션 할 때
                    // TweenLite.to(셀렉터, 애니메이션 시간, {적용할 값});
                    //{적용할 값.}
                    //{css:{}, delay:0.2, ease:Power4.easeInOut, onComplete:function(){
                    //}};
                    //duration - 애니메이션 되는 시간 css - 스타일, delay - 딜레이되는 시간,
                    //ease - 가속도, onComplete - 애니메이션이 완료된 시점(callback)
                    
        

                    // TweenMax.set();
                    // TweenMax.to();
                }
                // console.log('items 0 - ' + i + ' : ', d);
            });
        }, 
        error:function(error){
            console.log(error);
        }
    });
    // =====
    // jQuery.ajax({
    // });
});
</script>
</body>
</html>