$(document).ready(function(){
    $('.guide_phone').children('a').click(function(){
        $('.guide_desc').stop().fadeIn(400).animate({'width':'560px'});
        $('.guide_desc').children('div').removeClass('displayBlock');
        if($(this).hasClass('health_btn')){
            $('.health_desc').addClass('displayBlock');
        }else if($(this).hasClass('happy_btn')){
            $('.happy_desc').addClass('displayBlock');
        }else if($(this).hasClass('money_btn')){
            $('.money_desc').addClass('displayBlock');
        }else if($(this).hasClass('dia_btn')){
            $('.dia_desc').addClass('displayBlock');            
        }else if($(this).hasClass('character_btn')){
            $('.character_desc').addClass('displayBlock');                        
        }else if($(this).hasClass('event_btn')){
            $('.event_desc').addClass('displayBlock');                                    
        }else if($(this).hasClass('coin_btn')){
            $('.coin_desc').addClass('displayBlock');                                                
        }else if($(this).hasClass('skill_btn')){
            $('.skill_desc').addClass('displayBlock');                                                           
        }else if($(this).hasClass('choice_btn')){
            $('.choice_desc').addClass('displayBlock');
        }else if($(this).hasClass('jump_btn')){
            $('.jump_desc').addClass('displayBlock');
        }

    });
    $('.guide_close').click(function(){
        $('.guide_desc').stop().animate({'width':'0'}).fadeOut(400);        
    })
})