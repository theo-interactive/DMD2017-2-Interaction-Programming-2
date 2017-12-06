<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>12week_21661086_이서진</title>
<link rel="stylesheet" href="./css/style.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
</head>
<body>
<div id="wrap">
    <div class="chart-section">
        <h1>Seojin's PlayList</h1>
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
        url: 'data/music.json',
        dataType:'json',
        success:function(data){
            //console.log(data);
            var items = data["items"],$list = $('#my-music'), html = '';
            //console.log(items);
            $.each(items,function(i,d){

                var title = d["title"],id=d["id"],url=d["url"],imgPath = d["poster"],singer = d["singer"];
                var desc = d["desc"],desc2=d["desc2"],score=d["score"];
        
                //console.log(i,title,url,imgPath);

                html += '<li class="music-item">';
                html += '<h2>'+id+'</h2>'
                html +=     '<div class="poster">';
                html +=             '<a href = "'+url +'" target = "_blank">';
                html +=                 '<img src="' +imgPath +'" alt = "' +title +  '">';
                html +=             '</a>';
                html +=     '</div>';
                html +=     '<div class="name">';
                // html +=      '<span class="singer">'+singer+'</span>';
                html +=             '<a href = "'+url +'" target = "_blank">'+title +'</a>';
                html +=             '<p class="singer">'+singer+'</p>';
                html +=             '<span class="line"></span>';
                html +=             '<div class="album">'+desc2+'</div>';
                html +=             '<span class="score">'+score+'</span>';
                html +=             '<p class="music">'+desc+'</p>';
                html +=     '</div>';
                html += '</li>';
                if( i == items.length - 1){
                    console.log(html);
                    $list.empty().html(html);

                   
                    var $item = $list.children('.music-item');
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
        error:function(error){
            console.log(error);

        }
    });

});
</script>
</body>
</html>
