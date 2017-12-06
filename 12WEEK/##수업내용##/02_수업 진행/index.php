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
        url : 'data.php',
        dataType : 'json',
        success : function(r){
            console.log(r);
            var $list = $('#class-list'), html = '', items = r;
            //배열을 반대로.
            //items.reverse();
            //배열을 랜덤하게 재설정.
            items = shuffleItems(items);
            $.each(items, function(i, d){
                if(i == 0){
                    html += '<li class="head">';
                    html +=     '<span class="sort">구분</span>';
                    html +=     '<span class="name">이름</span>';
                    html +=     '<span class="id">아이디</span>';
                    html += '</li>';
                }
                var _number = d["number"], _name = d["name"], _id = d["id"], _role = d["role"];
                // console.log(_number, _name, _id, _role);
                html += '<li>';
                html +=     '<span class="sort">';
                // if(_role == '학생'){
                //     html += '학번 :';
                // }else{
                //     html += '교번 :';
                // }
                html += (_role == '학생') ? '학번 : ' : '교번 : ';
                html +=         '<i>' + _number + '</i>';
                html +=     '</span>';
                html +=     '<span class="name">' + _name + '</span>';
                html +=     '<span class="id">' + _id + '</span>';
                html += '</li>';
                if(i == items.length - 1){
                    $list.empty().html(html);
                }
            });
        },
        error : function(m){
        }
    });
});
</script>
</body>
</html>