# 1 WEEK

1주차 과제입니다.

수업시간에 진행했던 Visual Studio Code 를 익혀보고, jQuery 로드했던 소스를 작성합니다.

학번_이름 폴더 생성 후 index.html, css, js 폴더 구조까지 만들어서 폴더 업로드합니다.


## jQuery 맛보기

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/reset.css">
    <script src="./js/jquery.min.js"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> -->
    <title>0831</title>
</head>
<body>
    <h1>1WEEK - 08/31</h1>
<script>
(function($){
    $(document).ready(function(){
        console.log('Hello World!');
        alert('안녕하세요.');
    });
})(jQuery);
</script>
</body>
</html>
```