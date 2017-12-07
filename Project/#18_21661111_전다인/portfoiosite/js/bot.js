$(document).ready(function(){
    console.log($('#in_text'));
    console.log("hello");
   
    setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
            <div class="bubble">
                <ul>
                    <li>about</li>
                    <li>work</li>
                    <li>contact</li>
                </ul>
                세가지의 메뉴중 먼저 보고싶으신 메뉴를 입력해 주세요
            </div>
            </div>`); }, 2000);
    setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
            <div class="bubble">장난치시지 말고 무조건 하나를 꼭 입력해주세요</div>
            </div>`); }, 4000);
    

    const sendMessage = (text) => {
    if ($('#conversation .chat:last').hasClass('chat-user')) {
        $('#conversation .chat:last .bubble:last').addClass('borderBottom');
        $('#conversation .chat:last').append(`<div class="bubble borderTop">${text}</div>`);
    } else {
        $('#conversation').append(
        `<div class="chat chat-user">
            <div class="bubble">${text}</div>
        </div>`
        );
    }
    };
    const receiveMessage = (text) => {
    if (text) {
        if ($('#conversation .chat:last').hasClass('chat-bot')) {
        $('#conversation .chat:last .bubble:last').addClass('borderBottom');
        $('#conversation .chat:last').append(`<div class="bubble borderTop">${text}</div>`);
        } else {
        $('#conversation').append(
            `<div class="chat chat-bot">
            <div class="bubble">${text}</div>
            </div>`
        );
        }
    }
    };

    $(() => {
    $('#btnSend').click(
        () => {
            parseInput();
            beforeSend();
            
        }
        
    );
    
    //enter을 치면 메세지를 보낼 수 있는 코드
    //13번은 엔터인듯하다..
    //13번을 누르면=send
    $('#in_txt').keypress(
        (event) => {
        console.log(event.which);
        if (event.which === 13) {
            parseInput();
            beforeSend();
            
        }
        }
    );
    });

    function beforeSend(){
        let text = $('#in_txt').val();

            $('#in_txt').val('');
            //다음 질문을 나오게 하려고
            //showResponse();

            if (text !== '') {
            //만약 텍스트가 비어있지 않다면..?
            //텍스트에 뭐가 있어야..
            sendMessage(text);
            $('#conversation').scrollTop($('#conversation').attr("scrollHeight"));
            }
    }

    function parseInput() {
        console.log($('#in_text'));
        var text = $('#in_txt').val();
        console.log(text+'hi');
        var regexp = /['안'|'녕']/;
        var unpleasant = /['싫어'|'없어']/;
        var name = "름";
        var contact = /['연락'|'전화'|'한잔'|'놀래']/;
        var menu = /메뉴/;
        var want = /말/;
        var bye = /['감사합니다'|'고마워'|'잘가']/;
        var home = /['키보드'|'메인'|'홈']/;
        console.log(text.match(menu));
        if(text.match(regexp)){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
            <div class="bubble">
                네 안녕하세요. 반갑습니다.
            </div>
            </div>`); }, 1000);
            return
        }
        if(text.match(name)){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    응 안녕. 나는 봇이야
                </div>
            </div>`); }, 1000);
        }
        else if(text.match(unpleasant)){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    미안하지만 그건 제가 원하는 답이 아니에요.
                </div>
                <div class="bubble">
                    <ul>
                        <li>about</li>
                        <li>work</li>
                        <li>contact</li>
                    </ul>
                    세가지의 메뉴중 먼저 보고싶으신 메뉴를 입력해 주세요.
                </div>
            </div>`); }, 1000);
        }
        else if(text.match(menu) != null){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    그럼요 얼마든지요. 선택 가능하신 메뉴는 세가지 입니다.
                </div>
                <div class="bubble">
                    <ul>
                        <li>about</li>
                        <li>work</li>
                        <li>contact</li>
                    </ul>
                    세가지의 메뉴 중 보고싶으신 메뉴를 입력해 주세요.
                </div>
            </div>`); }, 1000);
        }
        else if(text.match(contact) != null){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    영광입니다. 이 쪽으로 연락주시면 감사하겠습니다.
                </div>
            </div>`); }, 1000);
            Move('4');
            function typeEffect(element, speed) {
                var text = $(element).text();
                $(element).html('');
                
                var i = 0;
                var timer = setInterval(function() {
                        if (i < text.length) {
                            $(element).append(text.charAt(i));
                            i++;
                        } else {
                            clearInterval(timer);
                        }
                    }, speed);
                }
    
                var speed = 95;
                var delay = $('.type10').text().length * speed + speed;
                typeEffect($('.type10'), speed);
                setTimeout(function(){
                    $('.type11').css('display', 'inline-block');
                    typeEffect($('.type11'), speed);
                }, delay);

        }
        else if(text == "about"){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    감사합니다. about은 type-r전다인에 대한 소개페이지 입니다.
                </div>
                <div class="bubble">
                    Type-r는
                    <ul>
                        <li>type |taip|</li>
                        <li>1.①형（型） , 타입, 정형, 양식, 원형, 유형; （널리） 종류, 타입(kind); 《구어》…타입의 사람, (어딘가 남다른) 사람</li>
                        <li>-er</li>
                        <li>1.[명사에서] <‘무엇을 하는 사람이나 도구, 기계 등’을 나타냄></li>
                        <li>type + er의 합성어로 저 전다인을 나타냅니다.</li>
                    </ul>
                </div>
            </div>`); }, 1000);
            Move('2');
            
        }
        else if(text == "work"){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    감사합니다. work는 type-r전다인에 의해 만들어진 작업물페이지 입니다.
                </div>
                <div class="bubble">
                    현재 보실 수 있는 작업물은 총 4가지 이며 나머지는 추후에 멋진 작업물로 다시 보여드리겠습니다.
                    <ul>
                        <li>Live for</li>
                        <li>Holo lens</li>
                        <li>My music library</li>
                        <li>Adventure is worthwile</li>
                    </ul>
                </div>
            </div>`); }, 1000);
            Move('3');
        }
        else if(text == "contact"){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    감사합니다. contact는 type-r전다인에게 연락할 수 있는 페이지 입니다.
                </div>
                <div class="bubble">
                    왼쪽에 나와있는 다양한 정보들로 전다인에게 연락해주세요.
                    기다리고 있겠습니다.
                </div>
            </div>`); }, 1000);
            Move('4');
        }
        else if(text.match(want)!=null){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                 교수님 요즘들어 수업이 많이 어려워져서 따라가기 힘들었지만 한학기 동안 기초부터 심화까지 차근히 알려주셔서 정말 감사했습니다.
                </div>
                <div class="bubble">
                 2년동안 정말 많이 고생했습니다.
                </div>
            </div>`); }, 1000);
            Move('4');
            $('#want1').css('display', 'inline-block');
            function typeEffect(element, speed) {
                var text = $(element).text();
                $(element).html('');
                
                var i = 0;
                var timer = setInterval(function() {
                        if (i < text.length) {
                            $(element).append(text.charAt(i));
                            i++;
                        } else {
                            clearInterval(timer);
                        }
                    }, speed);
                }
    
                var speed = 55;
                var delay = $('#want1').text().length * speed + speed;
                typeEffect($('#want1'), speed);
        }
        else if(text.match(bye)!=null){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                 감사합니다. 봇, 그리고 전다인이었습니다.
                </div>
            </div>`); }, 1000);
            Move('4');
            $('#want2').css('display', 'inline-block');
            function typeEffect(element, speed) {
                var text = $(element).text();
                $(element).html('');
                
                var i = 0;
                var timer = setInterval(function() {
                        if (i < text.length) {
                            $(element).append(text.charAt(i));
                            i++;
                        } else {
                            clearInterval(timer);
                        }
                    }, speed);
                }
    
                var speed = 55;
                var delay = $('#want2').text().length * speed + speed;
                typeEffect($('#want2'), speed);
        }
        else if(text.match(home) != null){
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    메인화면입니다. 키보드 맘껏 두드리세요:)
                </div>
            </div>`); }, 1000);
            Move('1');
        }
        else{
            setTimeout(function(){ $('#conversation').append(
            `<div class="chat chat-bot">
                <div class="bubble">
                    저는 봇입니다. 아직 다양한 말을 배우거나, 할 수 없습니다.
                </div>
            </div>`); }, 1000);
        }
        //delay 넣기
    }
    function Move(seq){
        var offset = $("#div" + seq).offset();
        $('html, body').animate({scrollTop:offset.top},400);
    }
});
