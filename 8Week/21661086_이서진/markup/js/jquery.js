$(document).ready(function(){
    var menu =  $('.menu-btn');
    var menu_svg =  $('#menu > rect');
    var menu_close = $('#menu_close');
    var category = $('#category_name');
    var category_show = $('.menu-wrap').animate({'height':'0%','z-index':1},200).fadeOut(1);
    var home = $('#category_home');
    var main_video =$('.main-video');


    function title(){
        $('#main_title_text').fadeIn(2000);
        $('#main_sub_text').fadeIn(1000).animate({
            'letter-spacing':'10px'},1000);
    };
    title();
    function svg(){
        var svg= {
            css: menu_svg.css('fill', 'white'),
            one: menu_svg.eq(0).attr(
                {'x':0,'y':0,'width':2,'height':2}
            ),
            two: menu_svg.eq(1).attr(
                {'x':6,'y':0,'width':2,'height':2}
            ),
            three: menu_svg.eq(2).attr(
                {'x':12,'y':0,'width':2,'height':2}
            ),
            four: menu_svg.eq(3).attr(
                {'x':0,'y':6,'width':2,'height':2}
            ),
            five: menu_svg.eq(4).attr(
                {'x':6,'y':6,'width':2,'height':2}
            ),
            six: menu_svg.eq(5).attr(
                {'x':12,'y':6,'width':2,'height':2}
            ), 
            seven: menu_svg.eq(6).attr(
                {'x':0,'y':12,'width':2,'height':2}
            ),        
            eight: menu_svg.eq(7).attr(
                {'x':6,'y':12,'width':2,'height':2}
            ),  
            nine: menu_svg.eq(8).attr(
                {'x':12,'y':12,'width':2,'height':2}
            )
        };
    }

    function svg_change(){
        var svg_change = {
            css: menu_svg.css({'fill':'#ff85aa','cursor':'pointer'}),
            one: menu_svg.eq(0).attr(
                {'x':6,'y':2,'width':2,'height':4}
            ),
            two: menu_svg.eq(1).attr(
                {'x':6,'y':0,'width':2,'height':2}
            ),
            three: menu_svg.eq(2).attr(
                {'x':8,'y':6,'width':4,'height':2}
            ),
            four: menu_svg.eq(3).attr(
                {'x':0,'y':6,'width':2,'height':2}
            ),
            five: menu_svg.eq(4).attr(
                {'x':6,'y':6,'width':2,'height':2}
            ),
            six: menu_svg.eq(5).attr(
                {'x':12,'y':6,'width':2,'height':2}
            ), 
            seven: menu_svg.eq(6).attr(
                {'x':2,'y':6,'width':4,'height':2}
            ),        
            eight: menu_svg.eq(7).attr(
                {'x':6,'y':12,'width':2,'height':2}
            ),  
            nine: menu_svg.eq(8).attr(
                {'x':6,'y':8,'width':2,'height':4}
            )
        };
    }

    function main_overflow(){
        var overflow = {
            menu_Btn_show: menu.css('z-index','10000'),
            video_show: main_video.css({'z-index':'1000','display':'block'}),
            menu_wrap_none: $('.menu-wrap').animate({'display':'none','height':'0%','z-index':1},200).fadeOut(100),

        }
    }

    function category_noshow(){
        var category_noshow = {
            menu_wrap_none: $('.menu-wrap').animate({'display':'none','height':'0%','z-index':1},200).fadeOut(100),
            menu_Btn_show: menu.css('z-index','10000')
        }

    }
    function synopsis_01_animation(){
        $('#synopsis_01_img').addClass('synopsis01_slideRight');
        $('#synopsis-text_01').addClass('synopsis_text');
        // $('#text').addClass('synopsis_text_ani');
        $('#synopsis_01').css('display','block');
        $('#synopsis_02').css('display','none');
        $('#synopsis-bt01').addClass('selected');
        $('#synopsis-bt02').removeClass('selected');
    }
    function synopsis_01_animation_stop(){
        $('#synopsis_01_img').removeClass('synopsis01_slideRight');
        $('#synopsis-text_01').removeClass('synopsis_text');
        // $('#text').removeClass('synopsis_text_ani');
        $('#synopsis_01').css('display','none');
    }
    function synopsis_02_animation(){
        $('#synopsis_02_img').addClass('synopsis02_slideRight');
        $('#synopsis-text_02').addClass('synopsis_text');
        // $('#text').addClass('synopsis_text_ani');
        $('#synopsis_02').css('display','block');
        $('#synopsis_01').css('display','none');
    }
    function synopsis_02_animation_stop(){
        $('#synopsis_02_img').removeClass('synopsis02_slideRight');
        $('#synopsis-text_02').removeClass('synopsis_text');
        // $('#text').removeClass('synopsis_text_ani');
        $('#synopsis_02').css('display','none');
    }

    $('#main_title_text').mousemove(function(e){
        var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
        var rYP = (e.pageY - this.offsetTop-$(this).height());
        $('#main_title_text').css('text-shadow', +rYP/20+'px '+rXP/20+'px rgba(255,119,145,.8), '+rYP/15+'px '+rXP/15+'px rgba(119,164,255,0.5), '+rXP/15+'px '+rYP/15+'px rgba(157,255,119,.7)');
      });

    $(menu).on('mouseenter mousedown mouseleave',function(e){
        if(e.type == "mouseenter"){
            menu_svg.animate(svg_change());
        }else if(e.type == "mousedown"){
            menu_svg.animate(svg_change());
            $('.menu-wrap,#category_name').fadeIn(1).animate(
                {'display':'block','z-index':1500,'opacity':100,'height':'100%'},100);
            $('#category_name > li').animate(
                {'opacity':100},1000);
            $(menu).css('z-index',1);    
        }
        else{
            menu_svg.animate(svg());
        }
    });


    $(menu_close).mousedown(function(){
        $('.menu-wrap > li').css('display','none');
        category_noshow();
    });
    $(category).children().eq(1).mousedown(function(){
         // 스토리 화면 1000
         $('#synopsis').css({'display':'block','top':'0','z-index':1000});
         // 카테고리 메뉴 + 비디오 화면 0  & 메뉴 버튼 10000, 
         $('.menu-wrap').animate({'display':'none','height':'0%','z-index':1},200).fadeOut(100),
         main_video.css({'z-index':'0','display':'none'});
         category_noshow();
         synopsis_01_animation();
    });
    $(home).mousedown(function(){
        main_overflow();
        $('#synopsis').css({'z-index':'1','display':'none'});
        synopsis_01_animation_stop();
    });
  
    $('#synopsis-bt01').mousedown(function(){
        $(this).addClass('selected');
        $('#synopsis-bt02').removeClass('selected');
        synopsis_01_animation();
        synopsis_02_animation_stop();
    });

    $('#synopsis-bt02').mousedown(function(){
        $(this).addClass('selected');
        $('#synopsis-bt01').removeClass('selected');
        synopsis_01_animation_stop();
        synopsis_02_animation();
   
    });

    $('#kr').mousedown(function(){
        $(this).addClass('lang_selected');
        $('#en').removeClass('lang_selected');
        $('#synopsis-text_01 > #text').html(
            '<b>Nia 와 Silas</b>는 같은 사무실에서 일한다.<br>그들은 인간의 <b>감정이 유전적으로 제거</b>된 사회에서 살고 있다.<br>모든 사람들은 <b>감정을 갖는 질병</b>이 발생하기 전까지 평온하고,<br>비폭력적이며, 드론과 같은 삶을 산다. '
        );
        $('#synopsis-text_02 > #text').html('질병에 감염된 <b>Silas</b>는 감염 증상을 간신히 숨기고 있던 <b>Nia</b>에게 다가간다.<br>감염되어 아픈 서로를 발견한 <b>Nia 와 Silas는</b> 점점 서로에게 끌리게 된다. <br>그들은 사회 안에서 증상을 숨기고,<b>다른 곳에서 자유를 찾기로 결심</b>한다.')
    });
    $('#en').mousedown(function(){
        $(this).addClass('lang_selected');
        $('#kr').removeClass('lang_selected');
        $('#synopsis-text_01 > #text').html('<b>Nia and Silas</b> work in the same office.<br>They live in a society where human <b>emotion</b> has been genetically<b> eliminated.</b><br> Everyone lives calm, violence-free, drone-like lives - until a disease <b>breaks out</b> that causes people to <b>have emotions.</b>');
        $('#synopsis-text_02 > #text').html(' After becoming infected, Silas, now an outcast, is drawn to Nia who has<br> managed to hide her symptoms. When they discover that they are both <br>sick,<b> they must decide</b> whether to hide within their society or seek <br> <b>freedom</b> elsewhere.');
    });

    
});