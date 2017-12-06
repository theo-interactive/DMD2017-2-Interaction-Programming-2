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
  <h1>희영이가 추천하는 자기전에 듣기 좋은 곡</h1>
  <div id="grid">
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
            dataType:'json',
            success:function(r){
                //console.log(r);
                var items = r["items"], $list = $('#grid'), html ='';
                //items.reverse();//배열을 반대로
                //items = shuffleItems(items); // 배열을 랜덤으로
                $.each(items, function(i,d){
                  console.log("ss");
                    var title = d["title"], artist = d["artist"], time = d["time"],album = d["album"],date = d["date"],poster = d["poster"];
                    //console.log(_number,_name);
                    html += '<div class="grid-item">'
                    html +=   '<div class="figure">'
                    html +=     '<img src="' + poster + '" alt="">'
                    html +=   '</div>'
                    html += '<div class="txt">'
                    html +=     '<ul class="info">'
                    html +=         '<li class="title">' + title + '</li>'
                    html +=         '<li class="artist">' + artist + '</li>'
                    html +=         '<li class="time">' + time + '</li>'
                    html +=     '</ul>'
                    html +=     '<p class="album">' + album + '<span>' + date + '</span></p>'
                    html +=     '</div>'
                    html += '</div>'
                    html +=   '</div>'
                    if(i == items.length - 1){
                        $list.empty().html(html);

                        var $item = $list.children('.grid-item');
                        var orders = shuffle($item.length);

                        $.each($item,function(j,e){
                            var $el = $(e), $poster = $el.find('.figure'), $txt = $el.find('.txt');

                            TweenLite.set($poster, {css:{'autoAlpha': 0,'y':30}});
                            TweenLite.set($txt, {css:{'autoAlpha': 0,'y':50}});
                            // //순차적인애니메이션
                            // TweenLite.to($poster,0.2,{css:{'autoAlpha':1,'y':0}, delay:0.2+0.1*j});
                            // TweenLite.to($txt,0.2,{css:{'autoAlpha':1,'y':0}, delay:0.7});

                            TweenLite.to($poster,0.2,{css:{'autoAlpha':1,'y':0}, delay:0.5+ 0.02 * orders[j]});
                            TweenLite.to($txt,0.2,{css:{'autoAlpha':1,'y':0}, delay:0.5 + 0.02 *orders[j]});
                        })
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
