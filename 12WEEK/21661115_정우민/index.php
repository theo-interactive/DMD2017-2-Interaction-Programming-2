<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>HIPHOP TRACK OF THE YEARS</title>
<link rel="stylesheet" href="./css/style.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
</head>
<body>
<div id="wrap">
    <div class="header">
        <h1>HIP-HOP TRACK OF THE YEARS</h1>
        <p class="sub">지극히 주관적입니다.</p>
    </div>
    <div class="list-wrap">
    <div class="list-section">
        <h2>2009</h2>
        <ul class="list09"></ul>
    </div>
    <div class="list-section">
        <h2>2010</h2>
        <ul class="list10"></ul>
    </div>
    <div class="list-section">
        <h2>2011</h2>
        <ul class="list11"></ul>
    </div>
    <div class="list-section">
        <h2>2012</h2>
        <ul class="list12"></ul>
    </div>
    <div class="list-section">
        <h2>2013</h2>
        <ul class="list13"></ul>
    </div>
    <div class="list-section">
        <h2>2014</h2>
        <ul class="list14"></ul>
    </div>
    <div class="list-section">
        <h2>2015</h2>
        <ul class="list15"></ul>
    </div>
    <div class="list-section">
        <h2>2016</h2>
        <ul class="list16"></ul>
    </div>
    <div class="list-section">
        <h2>2017</h2>
        <ul class="list17"></ul>
    </div>
    <button class="more-btn"> + MORE </button>
    <button class="totop">TOP</button>
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
        url : 'data/myPlayList.json',
        success : function(data){
            console.log(data);

            var moreBtn = 0;

            var _09items = data["2009"], $list = $('.list09'), html = '';
            // console.log(items);
            $.each(_09items, function(i, d){
                var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                html += '<li class="09-item">';
                html +=     '<div class="img_area">';
                html +=         '<a href="' + _listen + '" target="_blank">';
                html +=             '<img src="' + _img + '"alt="' + _title + '">';
                html +=         '</a>';
                html +=     '</div>';
                html +=     '<div class="txt_area">';
                html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                html +=         '<p class="artist">' + _artist + '</div>';
                html +=         '<p class="album">' + _album + '</div>';
                html +=         '<p class="release">' + _release + ' 발매</div>';
                html +=     '</div>';
                html += '</li>'
            
                if(i == _09items.length -1){
                    console.log(i);
                    $list.empty().html(html);
                    var $item =$list.children('.09-item');
                    var order = shuffle($item.length);

                    $.each($item, function(j, e){
                        var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                        // //순서대로 나오는 애니메이션
                        // //초기 세팅
                        TweenLite.set($poster, {css:{'autoAlpha':0, 'x':60}});
                        TweenLite.set($title, {css:{'autoAlpha':0, 'x':60}});
                        TweenLite.set($artist, {css:{'autoAlpha':0, 'x':-60}});
                        TweenLite.set($album, {css:{'autoAlpha':0, 'x':-60}});
                        TweenLite.set($release, {css:{'autoAlpha':0, 'x':-60}});
                        // //애니메이션
                        TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                        TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                        TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                        TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                        TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                    });

                }

            });

            $('.more-btn').click(function(){
                console.log(moreBtn);
                $('.list-section').eq(moreBtn + 1).stop().fadeIn(100);
                if(moreBtn == 0){
                    var _10items = data["2010"], $list = $('.list10'), html = '';
                    // console.log(items);
                    $.each(_10items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="10-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _10items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.10-item');
                            var order = shuffle($item.length);
        
                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');
        
                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
        
                            });
        
                        }

                    });
                } else if (moreBtn == 1){
                    var _11items = data["2011"], $list = $('.list11'), html = '';
                    // console.log(items);
                    $.each(_11items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="11-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _11items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.11-item');
                            var order = shuffle($item.length);

                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':-60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                            });

                        }

                    });
                } else if (moreBtn == 2){
                    var _12items = data["2012"], $list = $('.list12'), html = '';
                    // console.log(items);
                    $.each(_12items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="12-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _12items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.12-item');
                            var order = shuffle($item.length);

                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                            });

                        }

                    });
                } else if (moreBtn == 3){
                    var _13items = data["2013"], $list = $('.list13'), html = '';
                    // console.log(items);
                    $.each(_13items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="13-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _13items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.13-item');
                            var order = shuffle($item.length);

                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':-60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                            });

                        }

                    });
                } else if (moreBtn == 4){
                    var _14items = data["2014"], $list = $('.list14'), html = '';
                    // console.log(items);
                    $.each(_14items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="14-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _14items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.14-item');
                            var order = shuffle($item.length);

                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                            });

                        }

                    });

                } else if (moreBtn == 5){
                    var _15items = data["2015"], $list = $('.list15'), html = '';
                    // console.log(items);
                    $.each(_15items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="15-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _15items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.15-item');
                            var order = shuffle($item.length);

                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':-60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                            });

                        }

                    });
                } else if (moreBtn == 6){
                    var _16items = data["2016"], $list = $('.list16'), html = '';
                    // console.log(items);
                    $.each(_16items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="16-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _16items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.16-item');
                            var order = shuffle($item.length);

                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                            });

                        }

                    });
                } else if (moreBtn == 7){
                    var _17items = data["2017"], $list = $('.list17'), html = '';
                    // console.log(items);
                    $.each(_17items, function(i, d){
                        var _title = d["title"], _artist = d["artist"], _album = d["album"], _release = d["release"], _img = d["image"], _listen = d["listen"];
                        html += '<li class="17-item">';
                        html +=     '<div class="img_area">';
                        html +=         '<a href="' + _listen + '" target="_blank">';
                        html +=             '<img src="' + _img + '"alt="' + _title + '">';
                        html +=         '</a>';
                        html +=     '</div>';
                        html +=     '<div class="txt_area">';
                        html +=         '<a href="' + _listen + '" target="_blank" class="title">' + _title + '</a>';
                        html +=         '<p class="artist">' + _artist + '</div>';
                        html +=         '<p class="album">' + _album + '</div>';
                        html +=         '<p class="release">' + _release + ' 발매</div>';
                        html +=     '</div>';
                        html += '</li>'
                    
                        if(i == _17items.length -1){
                            console.log(i);
                            $list.empty().html(html);
                            var $item =$list.children('.17-item');
                            var order = shuffle($item.length);

                            $.each($item, function(j, e){
                                var $el = $(e), $poster = $el.find('.img_area'), $title = $el.find('.title'), $artist = $el.find('.artist'), $album = $el.find('.album'), $release = $el.find('.release');

                                // //순서대로 나오는 애니메이션
                                // //초기 세팅
                                TweenLite.set($poster, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($title, {css:{'autoAlpha':0, 'x':60}});
                                TweenLite.set($artist, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($album, {css:{'autoAlpha':0, 'x':-60}});
                                TweenLite.set($release, {css:{'autoAlpha':0, 'x':-60}});
                                // //애니메이션
                                TweenLite.to($poster, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.2 * j});
                                TweenLite.to($title, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.3 * j});
                                TweenLite.to($artist, 2, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($album, 3, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});
                                TweenLite.to($release, 4, {css:{'autoAlpha':1, 'x':0}, delay: 0.4 * j});

                            });

                        }

                    });

                    $('.more-btn').stop().css({'display':'none'}); 
                    
                }
                $('html, body').animate({'scrollTop' : $('.list-section').eq(moreBtn + 1).offset().top + 'px'}, 'slow');
                moreBtn++;

                
            })




        },
        error : function(message){
            console.log(message);
        }
    })

    $('.totop').click(function(){
        $('html, body').animate({'scrollTop' : $('body').offset().top + 'px'}, 'slow');
    })
    
});
</script>
</body>
</html>