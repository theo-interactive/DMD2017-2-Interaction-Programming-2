<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>희산s음악</title>
<link rel="stylesheet" href="./css/style.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
</head>
<body>
<div id="wrap">
<div class="chart-section">
    <h1>Music Chart</h1>
    <ol id="my-music" class="music-chart"></ol>
</div>
</div>  <script type="text/javascript">
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
        url : 'data/data.json',
        dataType : 'json',
        success:function(data){
            // console.log(data);
            var items = data["items"], $list = $('#my-music'), html = '';
            // console.log(items);
            $.each(items, function(index, data){
                // console.log(d);
                var title = data["title"], video = data["video"], cover = data["cover"],  Singer = data["singer"], genre = data["genre"];
                // console.log(i, title, url, imgPath);
                html += '<li class="music-item">';
                html +=     '<a href="' + video + '" target = "_blank" class="poster">';
                html +=             '<img src="' + cover + '" alt="' + title + '">';
                html +=     '</a>';
                html +=     '<div class="name">';
                html +=         title + '<br>'  + Singer + '<br>' + genre ;
                html +=     '</div>';
                html += '</li>';
                if(i == items.length - 1){
                    console.log(i)
                    $list.empty().html(html);
                    var $item = $list.children('.music-item');
                    var orders = shuffle($item.length);
                    $.each($item, function(j, e){
                        var $el = $(e), $poster = $el.find('.poster'), $name = $el.find('.name');
                        TweenLite.set($poster, {css:{'autoAlpha':0, 'y':15}});
                        TweenLite.set($name, {css:{'autoAlpha':0, 'y':35}});
      
                        TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                        TweenLite.to($name, 0.3, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                    });
               
                }
            });
           
        },
        error:function(error){
            console.log(error);
        }
    });
});


</script>
</body>
</html>