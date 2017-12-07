$(document).ready(function(){
    var noticeBool = false;
    $('.notice_title').click(function(){
        if(noticeBool == false){
            $(this).parents('.notice_list_li').stop().animate({'height':'100%', 'margin-bottom':'30px'});
            $(this).parents('.notice_item').stop().css({'height':'100%'});
            $(this).parents('.notice_item').find('.notice_desc').stop().fadeIn(500);
            noticeBool = 1;
        } else if(noticeBool == true){
            if($(this).hasClass('notice_open')){

                $('.notice_list_li').stop().animate({'height':'40px', 'margin-bottom':'10px'});
                $('.notice_item').stop().css({'height':'40px'});
                $('.notice_desc').stop().fadeOut(500);
    
                noticeBool = 0;

            } else if(!$(this).hasClass('notice_open')){
                $('.notice_title').removeClass('notice_open');
                $(this).addClass('notice_open');
                $('.notice_list_li').stop().animate({'height':'40px', 'margin-bottom':'10px'});
                $('.notice_item').stop().css({'height':'40px'});
                $('.notice_desc').stop().fadeOut(500);
                $(this).parents('.notice_list_li').stop().animate({'height':'100%', 'margin-bottom':'30px'});
                $(this).parents('.notice_item').stop().css({'height':'100%'});
                $(this).parents('.notice_item').find('.notice_desc').stop().fadeIn(500);
                noticeBool = 1;

                
            }
        }
    })
})