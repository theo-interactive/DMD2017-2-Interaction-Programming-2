<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>play list_sj</title>
<link rel="stylesheet" href="./css/style.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
</head>
<body>
<div id="wrap">
    <div class="chart-section">
        <h1>play list</h1>
        <ol id="my-music" class="music-chart"></ol>
    </div>

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
        url : 'data/music.json', //url - 호출주소 url경로
        success:function(data){
            //console.log(data);
            var items = data["items"], $list = $('#my-music'), html = '';
            //console.log(items);
            $.each(items, function(i, d){
                var title = d["title"], url = d["url"], imgPath = d["poster"], singer = d["singer"];
                var album = d["album"],genre=d["genre"];

                html += '<li class="music-item">';
                html +=     '<div class="poster">';
                html +=             '<a href = "'+url +'" target = "_blank">';
                html +=                 '<img src="' +imgPath +'" alt = "' +title +  '">';
                html +=             '</a>';
                html +=     '</div>';
                html +=     '<div class="name">';
                
                html +=             '<a href = "'+url +'" target = "_blank">'+title +'</a>';
                html +=             '<p class="singer">'+singer+'</p>';
                
                html +=             '<div class="name_top">';
                html +=                '<div class="album">앨범명 : '+album+'</div>';
                html +=               '<p class="genre">장르 : '+genre+'</p>';
                html +=             '</div>';
                html +=     '</div>';
                html += '</li>';

                if(i == items.length -1){
                    console.log(i);
                    $list.empty().html(html);
                    var $item = $list.children('.music-item');


                    $.each($item, function(j, e){
                        var $el = $(e), $poster = $el.find('.poster'), $name = $el.find('.name');
                        TweenLite.set($poster,{css:{'autoAlpha':0, 'y':50}});
                        TweenLite.set($name,{css:{'autoAlpha':0, 'y':60}});
                        
                        
                        TweenLite.to($poster, 0.5, {css:{'autoAlpha':1,'y':0}, delay:0.5 + 0.1 * j});
                        TweenLite.to($name, 0.3, {css:{'autoAlpha':1, 'y':0}, delay:0.7 + 0.1 * j});
                    });
                    // TweenLite.to($poster, 0.2, {css:{'autoAlpha':1}, delay:0.5});
                    //     TweenLite.to($name, 0.2, {css:{'autoAlpha':1}, delay:0.7});
                    //TweenLite.set(셀렉터,{'width':100+'%', 'height':100+'px', 'x':0, 'y':0}); //set - css 시간이 없다. setting. 초기값 세팅.
                    //TweenLite.to(셀렉터, 애니메이션 시간, {적용할 값, css, delay : 딜레이시간, ease : 가속도 ,onComplete : 애니메이션이 완료된 시점}); //애니메이션 할 때.
                }
                });
                    //TweenMax.set();
                    //TweenMax.to();
                //console.log('items 0 -' + i + ' : ' , d);
        },
        error : function(error){
            console.log(error);
        }
    });
});
</script>
</body>
</html>