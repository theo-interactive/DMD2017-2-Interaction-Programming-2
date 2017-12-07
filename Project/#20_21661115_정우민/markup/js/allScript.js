$(document).ready(function(){        
    
    function mainH2Resize(){
        var mainMarginT = $(window).height()/2 - $('#main>h2').height()/2;
        var mainMarginL = $(window).width()/2 - $('#main>h2').width()/2;

        $('#main').children('h2').stop().animate({'margin-top':mainMarginT - 80 + 'px'}, 3000, 'easeOutQuint');
        $('#main').children('h2').css({'margin-left':mainMarginL});
    };

    $(window).on('resize', function(){
        mainH2Resize();
    });

    $(window).trigger('resize')




    var nowPage = 0;


    $('html').keydown(function(e) {

        if($('.section').is(":animated")){
            
            return false;
            
        }

        var KE = e.originalEvent;
        // console.log(KE.keyCode);
        if (KE.keyCode == 38 || KE.keyCode == 37){
            

            if(nowPage > 0){
                if(nowPage == 5){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.old').stop().fadeOut(800);
                    $('.adult').stop().fadeIn(800);
                } else if(nowPage == 4){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.adult').stop().fadeOut(800);
                    $('.boy').stop().fadeIn(800);
                } else if(nowPage == 3){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().animate({'margin-top':'0'}, 800, 'easeOutCirc');
                    $('.boy').stop().fadeOut(800);
                    $('.child').stop().fadeIn(800);
                } else if(nowPage == 2){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine');      
                    $('.child').stop().fadeOut(800);
                    $('.baby').stop().fadeIn(800);              
                } else if(nowPage == 1){
                    $('.section').eq(0).animate({'margin-top':'+=100%'}, 800, 'easeOutCirc');
                    $('.header_wrap').animate({'margin-top':'-50px'}, 400, 'easeInOutQuad');
                    
                }
                nowPage--;
                
            }
        }else if (KE.keyCode == 40 || KE.keyCode == 39){
            if(nowPage < 5){
                if(nowPage == 0){
                    $('.section').eq(0).animate({'margin-top':'-=100%'}, 1000, 'easeInOutQuad');
                    $('.header_wrap').delay(200).animate({'margin-top':'0'}, 400, 'easeInOutQuad');
                    $('.about_title > h2').stop().delay(300).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.slogun').stop().delay(600).animate({'margin-right':'0'}, 800, 'easeOutCirc');
                    $('.about_desc > p').eq(0).stop().delay(1200).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(1).stop().delay(1600).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(2).stop().delay(2000).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(3).stop().delay(2400).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(4).stop().delay(2800).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(5).stop().delay(3200).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                } else if(nowPage == 1){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().delay(200).animate({'margin-top':'0'}, 800, 'easeOutCirc');
                    $('.baby').stop().fadeOut(800);
                    $('.child').stop().fadeIn(800);
                    
                } else if(nowPage == 2){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine'); 
                    $('.child').stop().fadeOut(800);
                    $('.boy').stop().fadeIn(800);                   
                    
                } else if(nowPage == 3){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.boy').stop().fadeOut(800);
                    $('.adult').stop().fadeIn(800);
                    
                } else if(nowPage == 4){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.adult').stop().fadeOut(800);
                    $('.old').stop().fadeIn(800);
                }
                nowPage++;    

                  
            }           

        }
      });


    $('.content_wrap').on('mousewheel DOMMouseScroll', function(e) {
        
        if($('.section').is(":animated")){

            return false;

        }

        console.log(nowPage);

        var EE = e.originalEvent;

        console.log(EE);

        if (EE.wheelDelta == 120){
            

            if(nowPage > 0){
                if(nowPage == 5){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.old').stop().fadeOut(800);
                    $('.adult').stop().fadeIn(800);
                } else if(nowPage == 4){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.adult').stop().fadeOut(800);
                    $('.boy').stop().fadeIn(800);
                } else if(nowPage == 3){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().animate({'margin-top':'0'}, 800, 'easeOutCirc');
                    $('.boy').stop().fadeOut(800);
                    $('.child').stop().fadeIn(800);
                } else if(nowPage == 2){
                    // $('.section').eq(0).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'+=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(3).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'+=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine');      
                    $('.child').stop().fadeOut(800);
                    $('.baby').stop().fadeIn(800);              
                } else if(nowPage == 1){
                    $('.section').eq(0).animate({'margin-top':'0'}, 800, 'easeOutCirc');
                    $('.header_wrap').animate({'margin-top':'-50px'}, 400, 'easeInOutQuad');
                    
                }
                nowPage--;
                
            }
        }else{
            if(nowPage < 5){
                if(nowPage == 0){
                    $('.section').eq(0).animate({'margin-top':'-200%'}, 1000, 'easeInOutQuad');
                    $('.header_wrap').delay(200).animate({'margin-top':'0'}, 400, 'easeInOutQuad');
                    $('.about_title > h2').stop().delay(300).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.slogun').stop().delay(600).animate({'margin-right':'0'}, 800, 'easeOutCirc');
                    $('.about_desc > p').eq(0).stop().delay(1200).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(1).stop().delay(1600).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(2).stop().delay(2000).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(3).stop().delay(2400).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(4).stop().delay(2800).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                    $('.about_desc > p').eq(5).stop().delay(3200).animate({'margin-right':'0'}, 600, 'easeOutCirc');
                } else if(nowPage == 1){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().delay(200).animate({'margin-top':'0'}, 800, 'easeOutCirc');
                    $('.baby').stop().fadeOut(800);
                    $('.child').stop().fadeIn(800);
                } else if(nowPage == 2){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine');  
                    $('.child').stop().fadeOut(800);
                    $('.boy').stop().fadeIn(800);                  
                    
                } else if(nowPage == 3){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.boy').stop().fadeOut(800);
                    $('.adult').stop().fadeIn(800);
                } else if(nowPage == 4){
                    // $('.section').eq(0).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(1).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(2).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(3).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.section').eq(4).animate({'margin-left':'-=100%'}, 800, 'easeOutQuad');
                    $('.section').eq(5).animate({'margin-left':'-=100%'}, 800, 'easeOutCirc');
                    $('.adult').stop().fadeOut(800);
                    $('.old').stop().fadeIn(800);
                }
                nowPage++;    

                  
            }           

        }

    });

    // $('.footer_wrap').on('mousewheel DOMMouseScroll', function(e) {
    //     console.log('footer');
    // });

    //페이지 이동은 이렇게 하면 될거 같다.
    // $('.header_wrap').click(function(){
    //     $('.section').animate({'margin-left': '-=100%'});
    // })

    // $('.content').click(function(){
    //     $('.section').animate({'margin-left': '+=100%'});
    // })


    $('.about_btn').click(function(){
        nowPage = 1;
        console.log('click' + nowPage);
        $('.section').eq(1).stop().animate({'margin-left':'0'}, 800, 'easeOutCirc');
        $('.section').eq(2).stop().animate({'margin-left':'100%'}, 800, 'easeOutQuad');
        $('.section').eq(3).stop().animate({'margin-left':'200%'}, 800, 'easeOutQuad');
        $('.section').eq(4).stop().animate({'margin-left':'300%'}, 800, 'easeOutQuad');
        $('.section').eq(5).stop().animate({'margin-left':'400%'}, 800, 'easeOutQuad');
        $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine'); 
        $('.baby').stop().fadeIn(800);
        $('.child').stop().fadeOut(800);
        $('.boy').stop().fadeOut(800);
        $('.adult').stop().fadeOut(800);
        $('.old').stop().fadeOut(800);
    });

    $('.guide_btn').click(function(){                
        nowPage = 2;
        console.log('click' + nowPage);
        $('.section').eq(1).stop().animate({'margin-left':'-100%'}, 800, 'easeOutQuad');
        $('.section').eq(2).stop().animate({'margin-left':'0'}, 800, 'easeOutCirc');
        $('.section').eq(3).stop().animate({'margin-left':'100%'}, 800, 'easeOutQuad');
        $('.section').eq(4).stop().animate({'margin-left':'200%'}, 800, 'easeOutQuad');
        $('.section').eq(5).stop().animate({'margin-left':'300%'}, 800, 'easeOutQuad');
        $('.guide_phone').stop().delay(100).animate({'margin-top':'0'}, 800, 'easeOutCirc');
        $('.child').stop().fadeIn(800);
        $('.baby').stop().fadeOut(800);
        $('.boy').stop().fadeOut(800);
        $('.adult').stop().fadeOut(800);
        $('.old').stop().fadeOut(800);
    });

    $('.notice_btn').click(function(){
        nowPage = 3;
        console.log('click' + nowPage);
        $('.section').eq(1).stop().animate({'margin-left':'-200%'}, 800, 'easeOutQuad');
        $('.section').eq(2).stop().animate({'margin-left':'-100%'}, 800, 'easeOutQuad');
        $('.section').eq(3).stop().animate({'margin-left':'0'}, 800, 'easeOutCirc');
        $('.section').eq(4).stop().animate({'margin-left':'100%'}, 800, 'easeOutQuad');
        $('.section').eq(5).stop().animate({'margin-left':'200%'}, 800, 'easeOutQuad');
        $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine'); 
        $('.boy').stop().fadeIn(800);
        $('.baby').stop().fadeOut(800);
        $('.child').stop().fadeOut(800);
        $('.adult').stop().fadeOut(800);
        $('.old').stop().fadeOut(800);
    });

    $('.gallery_btn').click(function(){
        nowPage = 4;
        console.log('click' + nowPage);
        $('.section').eq(1).stop().animate({'margin-left':'-300%'}, 800, 'easeOutQuad');
        $('.section').eq(2).stop().animate({'margin-left':'-200%'}, 800, 'easeOutQuad');
        $('.section').eq(3).stop().animate({'margin-left':'-100%'}, 800, 'easeOutQuad');
        $('.section').eq(4).stop().animate({'margin-left':'0'}, 800, 'easeOutCirc');
        $('.section').eq(5).stop().animate({'margin-left':'100%'}, 800, 'easeOutQuad');
        $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine'); 
        $('.adult').stop().fadeIn(800);
        $('.baby').stop().fadeOut(800);
        $('.child').stop().fadeOut(800);
        $('.boy').stop().fadeOut(800);
        $('.old').stop().fadeOut(800);
    });

    $('.dl_btn').click(function(){
        nowPage = 5;
        console.log('click' + nowPage);
        $('.section').eq(1).stop().animate({'margin-left':'-400%'}, 800, 'easeOutQuad');
        $('.section').eq(2).stop().animate({'margin-left':'-300%'}, 800, 'easeOutQuad');
        $('.section').eq(3).stop().animate({'margin-left':'-200%'}, 800, 'easeOutQuad');
        $('.section').eq(4).stop().animate({'margin-left':'-100%'}, 800, 'easeOutQuad');
        $('.section').eq(5).stop().animate({'margin-left':'0'}, 800, 'easeOutCirc');
        $('.guide_phone').stop().animate({'margin-top':'100%'}, 800, 'easeInSine'); 
        $('.old').stop().fadeIn(800);
        $('.baby').stop().fadeOut(800);
        $('.child').stop().fadeOut(800);
        $('.boy').stop().fadeOut(800);
        $('.adult').stop().fadeOut(800);
    });

    $('.menu_btn').mouseenter(function(){
        $(this).find('.btn_deco').stop().animate({'height':'30px'}, 200);
        $(this).find('span').stop().animate({'color':'#000000'}, 200);
    }).mouseleave(function(){
        $(this).find('.btn_deco').stop().animate({'height':'0'}, 200);
        $(this).find('span').stop().animate({'color':'#ffffff'}, 200);
        
        
    })

    $('.start_btn').click(function(){
        $('.section').eq(0).animate({'margin-top':'-200%'}, 1000, 'easeInOutQuad');
        $('.header_wrap').delay(200).animate({'margin-top':'0'}, 400, 'easeInOutQuad');
        $('.about_title > h2').stop().delay(300).animate({'margin-right':'0'}, 600, 'easeOutCirc');
        $('.slogun').stop().delay(600).animate({'margin-right':'0'}, 800, 'easeOutCirc');
        $('.about_desc > p').eq(0).stop().delay(1200).animate({'margin-right':'0'}, 600, 'easeOutCirc');
        $('.about_desc > p').eq(1).stop().delay(1600).animate({'margin-right':'0'}, 600, 'easeOutCirc');
        $('.about_desc > p').eq(2).stop().delay(2000).animate({'margin-right':'0'}, 600, 'easeOutCirc');
        $('.about_desc > p').eq(3).stop().delay(2400).animate({'margin-right':'0'}, 600, 'easeOutCirc');
        $('.about_desc > p').eq(4).stop().delay(2800).animate({'margin-right':'0'}, 600, 'easeOutCirc');
        $('.about_desc > p').eq(5).stop().delay(3200).animate({'margin-right':'0'}, 600, 'easeOutCirc');
        nowPage = 1;
    })



});