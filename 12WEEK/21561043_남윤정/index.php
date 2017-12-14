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
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenLite.min.js"></script>
</head>
<body>
<div id="wrap">
    
    <!-- <ul id="list" class="list">
        <li>
            <span class="role">학생</span>
            <span class="number">21561043</span>
            <span class="name">남윤정</span>
            <span class="id">yj</span>
        </li>
    </ul>
    
    <ul id="list-2" class="list-2"></ul> -->

    <div class="class-section">
        <h1>Interaction Programming 2</h1>
        <ul id="class-list"></ul>
    </div>
    <div class="chart-section">
        <h1>iTunes Movie Trailers</h1>
        <ol id="itunes-movie" class="movie-chart"></ol>
    </div>
    <div class="chart-section">
        <h1>Naver Movie Chart</h1>
        <ol id="naver-movie" class="movie-chart"></ol>
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
    // $.ajax({
    //     //url - 호출 주소 URL 경로
    //     //type - post, get
    //     //data - { id : 0, name : 0, phone : ''}
    //     //data form의 input value.
    //     //dataType - json, xml, html, script
    //     url : 'data/data.json',
    //     dataType : 'json',
    //     //json 배열 result
    //     success : function(result){
    //         var $list1 = $('#list'), $list2 = $('#list-2'), html = '', html2 = '', itemData, itemData2;
    //         //data.json의 items 배열
    //         itemData = result.items;
    //         //data.json의 items2 배열
    //         itemData2 = result.items2;

    //         //items Loop.
    //         $.each(itemData, function(index,data){

    //             var html ='';

    //             html += '<li>';
    //             html +=     '<span class="title">' + data["title"] + '</span>';
    //             html +=     '<span class="desc">' + data["desc"] + '</span>';
    //             html += '</li>';

    //             if(index == itemData.length -1){
    //             //마지막 index 체크.
    //             console.log(html);
    //             $list1.empty().html(html);
    //         }
    //         });
    //         $list2.empty();
    //         //items2 Loop.
    //         $.each(itemData2, function(index,data){

    //             var html ='';

    //             html += '<li>';
    //             html +=     '<span class="role">' + data["role"] + '</span>';
    //             html +=     '<span class="number">' + data["number"] + '</span>';
    //             html +=     '<span class="name">' + data["name"] + '</span>';
    //             html +=     '<span class="id">' + data["id"] + '</span>';
    //             html += '</li>';


    //             $list2.append(html);
    //         });
            
    //         //마지막 index에서 확인

    //         console.log(result);
    //     },
    //     error : function(massage){
    //         console.log(message);
    //     }
    // })
    $.ajax({
        url:'data.php',
        dataType : 'json',
        success : function(r){
            console.log(r);


            var $list = $('#class-list'), html = '', item = r;
            $.each(item, function(i,d){
                if(i == 0){
                    html += '<li class = "head">';
                    html +=     '<span class="sort">구분</span>'
                    html +=     '<span class="name">이름</span>'
                    html +=     '<span class="id">아이디</span>'
                    html += '</li>';
                }
                var _number = d["number"], _name = d["name"], id = d["id"], _role = d["role"], _id = d["id"];
                console.log(_number, _name, _role, _id)
                html += '<li>';
                html +=     '<span class="sort">';
                // if(_role == '학생'){
                //     html += '<i>학번</i>';
                // }else{
                //     html += '<i>교번</ll>';
                // }
                html += (_role == '학생') ? '학번 : ' : '교번 : ';
                html +=         '<i>' + _number + '</i>';
                html +=     '</span>'
                html +=     '<span class = "name">' + _name + '</span>';
                html +=     '<span class = "id">' + _id + '</span>';
                html += '</li>';
                if(i == item.length -  1){
                    $list.empty().html(html);
                }
            })
        },
        error:function(m){
        }
    })

    $.ajax({
        url : 'data/itunes.json',
        success:function(data){
            console.log(data);
            var items = data["items"][0]["thumbnails"], $list = $('#itunes-movie'), html = '';
            // console.log(items);
            $.each(items,function(i,d){

                var title = d["title"], url = d["url"], imgPath = d["poster_2x"];

                html += '<li class="move-item">';
                html +=     '<div class="poster">';
                html +=         '<a href="' + url + '" target"="_blank">';
                html +=             '<img src="' + imgPath + '" alt"' + title + '">';
                html +=         '</a>';
                html +=     '<div class="name">';
                html +=         '<a href="' + url + '" target"="_blank">' + title + '</a>';
                html +=             '';
                html +=         '</a>';
                html +=     '</div>'
                html += '</li>';
                // console.log('item 0 - ' + i + ' : ', d);

                if(i == items.length - 1){
                    console.log(i)
                    $list.empty().html(html);

                    // TweenLite.set(셀렉터, {'width':100+'%', 'height':100+'px', 'x':0, 'y':0...});
                    // $.animate({'':''})
                    // TweenLite.to(셀렉터, 애니메이션 시간, {적용할값});
                    // TweenMax.set();
                    // TweenMax.to();
                    // {css:{}, delay:0.2, ease:Power4.easeInOut, onComletee:function(){}};
                    //duration - 애니메이션이 되는 시간, css - 스타일, delay - 딜레이 되는 시간
                    //ease - 가속도
                    //set - css.시간이 없다. setting 초기값 세팅
                    //to - 애니메이션 할 때

                    // var $item = $item.children('.movie-item'), $poster = $item.find
                    // ('poster'), $title = $item.find('.title');

                    var $item = $list.children('.movie-item');
                    var orders = shuffle($item.length);
                    console.log(orders);

                    $.each($item, function(j,e){
                        var $el = $(e), $poster = $el.find('.poster'), $name = $el.find('.name');
                        //초기세팅
                        TweenLite.set($poster, {css:{'autoAlpha':0, 'y':30}});
                        TweenLite.set($name, {css:{'autoAlpha':0}, 'y':30});
                        //애니메이션.
                        TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                        TweenLite.to($name, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                    });

                }
            });

            // var arr = [0,1,2,3,4,5,6,7,8];
            // var arr = [{'title':'title 1'},
            // {'title':'title 1'}];
        },
        error:function(error){
            console.log(error);
        }
    });
    $.ajax({
        url : 'data/naver.json',
        success:function(data){
            console.log(data);
            var items = data["movieChartList"]["RESERVE"], $list = $('#naver-movie'), html = '';
            // console.log(items);
            $.each(items,function(i,d){

                var title = d["movieTitle"], imgPath = d["posterImageUrl"];

                html += '<li class="move-item">';
                html +=     '<div class="poster">';
                html +=            '<img src="http://movie.phinf.naver.net' + imgPath + '" alt"' + title + '">';
                html +=     '<div class="name">';
                html +=         title
                html +=     '</div>'
                html += '</li>';
                // console.log('item 0 - ' + i + ' : ', d);

                if(i == items.length - 1){
                    console.log(i)
                    $list.empty().html(html);

                    // TweenLite.set(셀렉터, {'width':100+'%', 'height':100+'px', 'x':0, 'y':0...});
                    // $.animate({'':''})
                    // TweenLite.to(셀렉터, 애니메이션 시간, {적용할값});
                    // TweenMax.set();
                    // TweenMax.to();
                    // {css:{}, delay:0.2, ease:Power4.easeInOut, onComletee:function(){}};
                    //duration - 애니메이션이 되는 시간, css - 스타일, delay - 딜레이 되는 시간
                    //ease - 가속도
                    //set - css.시간이 없다. setting 초기값 세팅
                    //to - 애니메이션 할 때

                    // var $item = $item.children('.movie-item'), $poster = $item.find
                    // ('poster'), $title = $item.find('.title');

                    var $item = $list.children('.movie-item');
                    var orders = shuffle($item.length);
                    console.log(orders);

                    $.each($item, function(j,e){
                        var $el = $(e), $poster = $el.find('.poster'), $name = $el.find('.name');
                        //초기세팅
                        TweenLite.set($poster, {css:{'autoAlpha':0, 'y':30}});
                        TweenLite.set($name, {css:{'autoAlpha':0}, 'y':30});
                        //애니메이션.
                        TweenLite.to($poster, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                        TweenLite.to($name, 0.2, {css:{'autoAlpha':1, 'y':0}, delay:0.5 + 0.02 * orders[j]});
                    });

                }
            });

            // var arr = [0,1,2,3,4,5,6,7,8];
            // var arr = [{'title':'title 1'},
            // {'title':'title 1'}];
        },
        error:function(error){
            console.log(error);
        }
    });

});
</script>
</body>
</html>