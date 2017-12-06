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
    <div class="class-section">
        <h1>Interaction Programming 2</h1>
        <ul id="class-list"></ul>
    </div>
    <div class="chart-section">
        <h1>iTunes Movie Trailers</h1>
        <ol id="itunes-movie" class="movie-chart">
            <!-- <li class="movie-item">
                <div class="poster"><img src="" alt=""/></div>
                <div class="name"></div>
            </li> -->
        </ol>
    </div>
    <div class="chart-section">
        <h1>Naver Movie Chart</h1>
        <ol id="naver-movie" class="movie-chart">
            <!-- <li class="movie-item">
                <div class="poster"><img src="" alt=""/></div>
                <div class="name"></div>
            </li> -->
        </ol>
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
        url : 'data.php',
        type : 'get',
        data : {},
        dataType: 'json',
        success:function(result){
            console.log(result);
            var items = result, html = '', $el = $('#class-list');
            // items.reverse();
            // items = shuffleItems(items);
            $.each(items, function(i, d){
                html += (i == 0)? '<li class="head"><span class="sort">구분</span><span class="name">이름</span><span class="id">아이디</span></li>' : '';
                html += '<li>';
                html +=     '<span class="sort">';
                html += (d.role == '학생') ? '학번' : '교번';
                html +=     '<i>' + d.number + '</i>';
                html +=     '</span>';
                html +=     '<span class="name">' + d.name + '</span>';
                html +=     '<span class="id">' + d.id + '</span>';
                html += '</li>';
                if(i == items.length - 1){
                    $el.empty().html(html);
                }
            });
        },
        error:function(error){
            console.log(error);
        }
    });
    
    $.ajax({
        url : 'data/itunes.json',
        type : 'get',
        data : {},
        dataType: 'json',
        success:function(result){
            console.log(result);
            var items = result.items[0].thumbnails, html = '', $el = $('#itunes-movie');
            $.each(items, function(i, d){
                html += '<li class="movie-item">';
                html +=     '<div class="poster"><a href="' + d.url + '" target="_blank"><img src="' + d.large_poster_2x+ '" alt="' + d.title + '"/></a></div>';
                html +=     '<div class="name">' + d.title + '</div>';
                html += '</li>';
                if(i == items.length - 1){
                    $el.empty().html(html);
                    listAni($el);
                }
            });
        },
        error:function(error){
            console.log(error);
        }
    });
    $.ajax({
        url : 'data/naver.json',
        type : 'get',
        data : {},
        dataType: 'json',
        success:function(result){
            console.log(result);
            var items = result.movieChartList.RESERVE, html = '', $el = $('#naver-movie');
            $.each(items, function(i, d){
                html += '<li class="movie-item">';
                html +=     '<div class="poster"><a href=""><img src="' + naverURL + d.posterImageUrl+ '" alt="' + d.movieTitle + '"/></a></div>';
                html +=     '<div class="name">' + d.movieTitle + '</div>';
                html += '</li>';
                if(i == items.length - 1){
                    $el.empty().html(html);
                    listAni($el);
                }
            });
        },
        error:function(error){
            console.log(error);
        }
    });
    var listAni = function($e){
        var $item = $e.find('.movie-item'), orders = shuffle($item.length);
        $.each($item, function(i, d){
            var $el = $(d), $poster = $el.children('.poster'), $img = $poster.find('img'), image, $name = $el.children('.name');
            image = new Image();
            image.onload = function(){
                TweenLite.set($poster, {css:{'autoAlpha': 0, 'y' : 20 + 'px'}});
                TweenLite.set($name, {css:{'autoAlpha': 0, 'y' : 40 + 'px'}});
                TweenLite.to($poster, 0.2, {css:{'autoAlpha' : 1, 'y' : 0}, delay : 0.02 * i, ease: Power4.easeInOut});
                TweenLite.to($name, 0.3, {css:{'autoAlpha' : 1, 'y' : 0}, delay : 0.03 * i});
                // TweenLite.set($el, {css:{'autoAlpha': 0}});
                // TweenLite.to($el, 0.3, {css:{'autoAlpha' : 1}, delay : 0.02 * orders[i]});
            }
            image.src = $img.attr('src');
        });
    };
});
</script>
</body>
</html>