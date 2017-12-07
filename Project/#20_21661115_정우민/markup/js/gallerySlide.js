$(document).ready(function(){

    $(window).on('resize', function(){
        if($(window).width() > 1280){
            var imgW = $('.gal_list').width() / 3 - 8;
            // console.log(imgW);
            $('.gal_list_li').css({'width':imgW + 'px'});
            $('.gal_list').css({'height':$('.gal_list_li').find('img').height() + 'px'});
        } else if($(window).width() <= 1280 && $(window).width() > 768){
            var imgW = $('.gal_list_ul').width() - 8;
            // console.log(imgW);
            $('.gal_list_li').css({'width':imgW + 'px'});
            $('.gal_list').css({'padding':'10px', 'height':$('.gal_list_li').find('img').height() + 'px'});
        }

        if($(window).width() > 1280){
            var mImgW = $('.gal_list').width() / 3;
        } else if($(window).width() <= 1280 && $(window).width() > 768){
            var mImgW = $('.gal_list_ul').width();
        }
    
        var btnClick = 0;
    
        
        $('.prev_btn').click(function(){
            if($('.gal_list_ul').is(':animated')){
                return false;
            }

            if(btnClick > 0){
                btnClick--;
                $('.gal_list_ul').stop().animate({'margin-left': '+=' + mImgW + 'px'});
            }
        });
        
        $('.next_btn').click(function(){
            if($('.gal_list_ul').is(':animated')){
                return false;
            }
    
            if(btnClick < 1){
                btnClick++;
                $('.gal_list_ul').stop().animate({'margin-left':'-=' + mImgW + 'px'});
            }
        });
        
    });

    $(window).trigger('resize');


    


});