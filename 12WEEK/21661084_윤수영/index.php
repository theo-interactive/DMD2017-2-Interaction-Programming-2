<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Ajax</title>
<link rel="stylesheet" href="css/style.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
</head>
<body>
<div id="wrap">
    <h1>My Music List</h1>
    <div class="list"></div>
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
        url: 'data/mymusic_list.json',
        dataType:'json',
        success:function(data){
            //console.log(data);
            var items = data["items"], $list = $('.list'), html = '';
            //console.log(items);
            $.each(items,function(i,d){

              var title = d["title"], album = d["album"], date = d["date_year"] + "." + d["date_month"] + "." + d["date_day"], artist = d["artist"], listen = d["listen"], img = d["image"];
                //console.log(i,title,url,imgPath);
                html += '<div class="item">';
                html +=     '<div class="img">'
                html +=         '<a href="' + listen + '" target="_blank">';
                html +=             '<img src="' + img + '"alt="' + title + '">';
                html +=         '</a>';
                html +=     '</div>'
                html +=     '<div class="text">'
                html +=         '<ul class="ul">'
                html +=             '<li class="album">' + album + '</li>'
                html +=             '<li class="title">' + title + '</li>'
                html +=             '<li class="artist">' + artist + '</li>'
                html +=             '<li class="date">' + date + '</li>'
                html +=         '</ul>'
                html +=     '</div>'
                html += '</div>'

                if( i == items.length - 1){
                    console.log(html);
                    $list.empty().html(html);

                    //var $item = $list.children('.movie-item'),$poster = $item.find('.poster'),$title = $item.find('.title');
                    var $item = $list.children('.item');
                    var orders = shuffle($item.length);

                    $.each($item,function(j,e){
                        var $el = $(e), $poster = $el.find('.img'),$title = $el.find('.text');
                        // 초기 셋팅
                        TweenLite.set($poster,{css:{'autoAlpha':0,'y':50}});
                        TweenLite.set($title,{css:{'autoAlpha':0,'y':70}});
                        // 애니메이션
                        // TweenLite.to($poster,0.2,{css:{'autoAlpha':1,'y':0},delay:0.5});
                        // TweenLite.to($title,0.2,{css:{'autoAlpha':1,'y':0},delay:0.7});


                        /// 순차적 애니메이션
                        // TweenLite.to($poster,0.2,{css:{'autoAlpha':1,'y':0},delay:0.5 + 0.08 * j});
                        // TweenLite.to($title,0.2,{css:{'autoAlpha':1,'y':0},delay:0.5 +  0.1 * j});

                        /// 랜덤 애니메이션
                        TweenLite.to($poster,0.2,{css:{'autoAlpha':1,'y':0},delay:0.5 + 0.03 *  orders[j]});
                        TweenLite.to($title,0.2,{css:{'autoAlpha':1,'y':0},delay:0.5 +  0.02 * orders[j]});
                    })



                    ////////////////////////////////////// 애니메이션 시작. (리스트 아이템)
                    ///////////////////////////////////// 아이템의 셀렉터가 DOM에 붙어야만 찾을 수 있다.
                    //TweenLite.set(셀렉터,{'width':100 +'%','height':100+'px','x':0,'y':0});
                    //$.animate({'':''});

                    //TweenLite.to(셀렉터,애니메이션 시간,{적용할 값});

                    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
                    // {css:{},delay:0.2,ease:Power4.easeInOut,onComplete:function(){
                    // }};
                    //  duration-애니메이션 시간, css - 스타일 , dely - 딜레이 되는 시간,
                    //  ease  -  가속도 , onComplete - 애니메이션이 완료된 시점(callback)

                    // set - css,시간이 없다. setting. 초기 값 셋팅
                    // to - 애니메이션 할 때,

                    //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

                    // TweenMax.set();
                    // TweenMax.to();
                }
                //console.log('items 0 - '+  i + ':', d);
            });
            // var arr = [0,1,2,3,4,5,6,7,8];
            // var arr = [{'title':'title 1'}]

        },
        error:function(error){
            console.log(error);

        }

    });
    // JQuery.ajax({

    // });

});
</script>
</body>
</html>
