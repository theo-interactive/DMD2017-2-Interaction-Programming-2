
$(document).ready(function(){
    BoxRePosition();
    $(menuList).css({'cursor':'pointer'});
$(window).resize(function(){
    BoxRePosition();
})

// $(window).load(function(){
//     BoxRePosition();
// })

var body = $('body'),
    sceneChange = $('#sceneChange'),
    homeLogo = $('h2'),
    menuList = $('nav > ul > li > a'),
    menuList2 = $('nav > ul > li '),
    menuBest = $('nav > ul > li > a#best'),
    menuAbout = $('nav > ul > li > a#about'),
    menuSound = $('nav > ul > li > a#sound'),
    info = $('nav > ul > li#info'),
    mvList = $('#movie_name > li'),
    mvPoster = $('#movie_poster > img'),
    clickNumber = 0,
    es_info = $('.info_box_type2'),
    es_info2 = $('.info_box_type3'),
    aboutPage = $('#section_wrapper_3'),
    aboutBtnWrap = $('#about-btn'),
    aboutBtn = $('#about-btn > li '),
    aboutShow = $('#about-btn > li > a'),
    aboutShow_1 = $('#about-btn > li:first-child > a'),
    beforeBtn = $('#before-btn'),
    section4 = $('div#section_wrapper_4'),
    albumPhoto =$('#album_Photo > li'),
    musicList = $('.sound-list');
    musicSource =$('#source');

    
var btnindex = aboutBtn.index();
var sound = new Audio('EternalSunshine.mp3');

function BoxRePosition(){
   
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var boxWidth = $('.info_box').width();
    var boxHeight = $('.info_box').height();
    
    $('.info_box').css('left', (windowWidth - boxWidth)/2);
    $('.info_box').css('top', (windowHeight - boxHeight)/2);

}
$(homeLogo).on('mousedown',function(){
    menuList.removeClass('menu_selected');
    body.stop(true).animate({'margin-left':'0'},700);
    aboutBtnWrap.css({'display':'none'});
});
menuList2.on("mousedown", function(){

// 메뉴 클릭 시, 애니메이션 및 css 세부 조정
var myindex =  $(this).index();
    if(myindex == 0){
        body.stop(true).animate({'margin-left': "-100%"},{duration:700, easing: 'easeInOutCubic'});
        aboutBtnWrap.css({'display':'none'});
        beforeBtn.css({'display':'none'});
        sceneChange.animate({'display':'block','margin-left':'100%'},{duration:100, easing: 'easeInOutSine'}).fadeIn(400).fadeOut('slow');

    }else if(myindex == 1){
        body.stop(true).animate({'margin-left': "-200%"},{duration:700, easing: 'easeInOutCubic'});
        aboutBtnWrap.css({'display':'block'});
        beforeBtn.css({'display':'none'});
        aboutPage.stop(true).animate({'top':"0%"},1);
        aboutShow.removeClass('btn_selected');
        aboutShow_1.addClass('btn_selected');
     
    }else if(myindex == 2){
        body.stop(true).animate({'margin-left': "-300%"},{duration:500, easing: 'easeInOutCubic'});
        aboutBtnWrap.css({'display':'none'});
        beforeBtn.css({'display':'none'});
        section4.css({'background-image':'none'});
        albumPhoto.css({'background-image':'url(./images/album_00.png)'});

        $('.clear').remove();
       
        //if(musicList.hasClass('list-selected')){
            $('.sound-list').removeClass('list-selected');
        //};  
     
    }
    
});

// info 창
$(info).on('mousedown',function(){  
    clickNumber++;
    if(clickNumber%2==0){
        $('#info_txt').css({'z-index':'1000','opacity':'1'});
        menuList.css('color','black');
        if(!$(this).hasClass('info_selected')){
            $(this).removeClass('info_selected');
            $(this).addClass('info_selected');
        }
    }else{
        $('#info_txt').css({'z-index':'0','opacity':'0'}); 
        menuList.css('color','white');
        info.removeClass('info_selected');
    }

});

// 메뉴 셀렉
$(menuList).on('mousedown mouseout',function(e){

    if(e.type == 'mousedown'){
        console.log('down');
        if(!$(this).hasClass('menu_selected')){
            menuList.removeClass('menu_selected');
            $(this).addClass('menu_selected');
        }
    }else if(e.type == 'mouseout'){
    
    }
});  


var cuMyIndex = 0;

// best 메뉴 , 포스터 이미지 변화 및 클릭 시, about페이지로 이동
// 질문 : about 페이지로 이동 시, about-btn이 index에 맞게 select상태여야함.
$(mvList).on('mouseover mousedown',function(e){
    cuMyIndex =  $(this).index();

    if(e.type == 'mouseover'){
        var srcValue = 'images/' + $(this).attr('id') + '.jpg';
        $(mvPoster).attr('src', srcValue);
        $(mvPoster).stop().fadeIn('fast');
    }else if(e.type = 'mousedown'){
        beforeBtn.css({'display':'block'});
        var pageUp = cuMyIndex * -100;
        var btnCounter;
       
        // 무비 리스트에 일치하는 버튼 리스트가 select....

        // btnCounter = aboutBtn.index();

    /******************************************* Q */

        if(cuMyIndex  > 0){
            aboutShow.removeClass('btn_selected');
            aboutShow.eq(cuMyIndex).addClass('btn_selected');
            body.stop(true).animate({'margin-left': "-200%"},{duration:700, easing: 'easeInOutSine'});
            menuBest.removeClass('menu_selected');
            menuAbout.addClass('menu_selected');
            aboutPage.stop(true).animate({'top': pageUp+ "%"},1);
            aboutBtnWrap.css({'display':'block'});

        }else if(cuMyIndex  == 0){
            aboutShow.removeClass('btn_selected');
            aboutShow.eq(cuMyIndex).addClass('btn_selected');
            body.stop(true).animate({'margin-left': "-200%"},700);
            menuBest.removeClass('menu_selected');
            menuAbout.addClass('menu_selected');
            aboutPage.stop(true).animate({'top': "0%"},1);
            aboutBtnWrap.css({'display':'block'});
        }
    }
    
});

// 포스터 리스트 클릭 시, about에서 해당 영화로 감
beforeBtn.on("mousedown", function(){
    body.stop(true).animate({'margin-left': "-100%"},700);
    $(this).css({'display':'none'});
    aboutBtnWrap.css({'display':'none'});
    menuAbout.removeClass('menu_selected');
    menuBest.addClass('menu_selected');
});

// info_box (about페이지 : 마우스 오버 시, 내용)
es_info.hover(function(e){
    $(this).css({'opacity':1.0});
}, function(e){
    $(this).css({'opacity':0.0});
});


// about에 버튼 누를 시, index에 맞게 이동
aboutBtn.on("mousedown", function(){
    
    var myindex =  $(this).index();
    console.log(myindex +"버튼");
    if(myindex > 0){
        var pageUp = myindex * -100;
        aboutPage.stop(true).animate({'top': pageUp+ "%"},{duration:500, easing: 'easeInOutCirc'});
    
    }else if(myindex == 0){
        aboutPage.stop(true).animate({'top':"0%"},{duration:500, easing: 'easeInOutCirc'});
    }

});



//about버튼 클릭 시, index에 맞는 select이 됨
$(aboutShow).on('mousedown',function(){
    
    if(!$(this).hasClass('btn_selected')){
        aboutShow.removeClass('btn_selected');
        $(this).addClass('btn_selected');    
} 
});


    $("#es_trailer").on('mousedown',function(){
        $("#YT").css({'display':'block'});
        
    });
    $("#her_trailer").on('mousedown',function(){
        $("#YT2").css({'display':'block'});
    });
    $("#carol_trailer").on('mousedown',function(){
        $("#YT3").css({'display':'block'});
    });
    $("#ltb_trailer").on('mousedown',function(){
        $("#YT4").css({'display':'block'});
    });
    $("#equals_trailer").on('mousedown',function(){
        $("#YT5").css({'display':'block'});
    });
    $("#mama_trailer").on('mousedown',function(){
        $("#YT6").css({'display':'block'});
    });
    $("#mrB_trailer").on('mousedown',function(){
        $("#YT7").css({'display':'block'});
    });
    $("#angel_trailer").on('mousedown',function(){
        $("#YT8").css({'display':'block'});
    });
    $("#20th_trailer").on('mousedown',function(){
        $("#YT9").css({'display':'block'});
    });

    // $('a.ytPlay').on('mousedown',function(){
    //     console.log("음악스탑")
    //     sound.pause();
    //     $('#bgSound').css({'background-image':'url(../images/equalizer_stop.png)'});
    // });

});
