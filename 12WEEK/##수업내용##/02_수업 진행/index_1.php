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

    <ul id="list" class="list">
        <!-- <li>
            <span class="role">교수</span>
            <span class="number">20170004</span>
            <span class="name">김용원</span>
            <span class="id">rh</span>
        </li> -->
    </ul>
    <ul id="list-2" class="list"></ul>

    <form action="">
        
        <input type="text" name="id">
        <input type="text" name="name">
        <input type="text" name="phone">

    </form>





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
    $.ajax({
        //url - 호출 주소 URL 경로.
        //type - post, get
        //data - { id : 0, name : 0, phone : ''}
        //data - form 의 input value.
        //dataType - json, xml, html, script

        url : 'data/data.json',
        dataType : 'json',
        success : function(r){
            // console.log(r);
            //json 배열 - response
            var $list1 = $('#list'), $list2 = $('#list-2'), html = '', itemData, itemData2;
            //data.json 의 items 배열.
            itemData = r.items;
            //data.json 의 items2 배열.
            itemData2 = r.items2;

            //items Loop.
            $.each(itemData, function(index, data){
                // console.log(index, data);
                html += '<li>';
                // html +=     '<span class="title">' + data.title + '</span>';
                // html +=     '<span class="desc">' + dtat.desc + '</span>';
                html +=     '<span class="title">' + data["title"] + '</span>';
                html +=     '<span class="desc">' + data["desc"] + '</span>';
                html += '</li>';
                if(index == itemData.length - 1){
                    //마지막 index 체크.
                    console.log(html);
                    $list1.empty().html(html);
                }
            });
            //items2 Loop.
            $list2.empty();
            $.each(itemData2, function(index, data){
                // console.log(index, data);
                var html = '';
                //var html = '<li><span class="role">' + data["role"] + '</span><span class="number">' + data["number"] + '</span><span class="name">' + data["name"] + '</span><span class="id">' + data["id"] + '</span></li>';
                html += '<li>';
                html +=     '<span class="role">' + data["role"] + '</span>';
                html +=     '<span class="number">' + data["number"] + '</span>';
                html +=     '<span class="name">' + data["name"] + '</span>';
                html +=     '<span class="id">' + data["id"] + '</span>';
                html += '</li>';
                console.log(index, html);
                $list2.append(html);
                // $list2.prepend(html);
            });
        },
        error : function(message){
            console.log(message);
        }
    });
});
</script>
</body>
</html>