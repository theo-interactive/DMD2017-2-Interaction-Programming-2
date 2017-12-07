$(document).ready(function(){

    $('section.poster1').show();
    $('section.poster2').hide();
    $('section.poster3').hide();
    $('section.poster4').hide();

    $('ul#menu_page').hide();
    
    $('a#menu_bt').click(function(){
        $('ul#menu_page').toggle();
    });

    $('li#poster1').click(function(){
       $('section.poster1').show();
       $('section.poster2').hide();
       $('section.poster3').hide();
       $('section.poster4').hide();
       $('ul#menu_page').hide();
    });

    $('li#poster2').click(function(){
        $('section.poster2').show();
        $('section.poster1').hide();
        $('section.poster3').hide();
        $('section.poster4').hide();
        $('ul#menu_page').hide();
     });

     $('li#poster3').click(function(){
        $('section.poster3').show();
        $('section.poster1').hide();
        $('section.poster2').hide();
        $('section.poster4').hide();
        $('ul#menu_page').hide();
     });

     $('li#poster4').click(function(){
        $('section.poster4').show();
        $('section.poster1').hide();
        $('section.poster2').hide();
        $('section.poster3').hide();
        $('ul#menu_page').hide();
     });

    //poster1
    $( init );
    
    function init() {
      $(".dropable-area").sortable({
          connectWith:".connected-sortable",
          stack:'.connected-sortable ul'
        }).disableSelection();
    }
    //poster2
    var box1 = $('.yellow');
    var box2 = $('.black');
    var box3 = $('.navy');
    var box4 = $('.red');
    var box5 = $('.salmon');
    var box6 = $('.brown');
    var box7 = $('.blue');
    var box8 = $('.pink');
    var box9 = $('.darkblue');
    var box10 = $('.purple');
    
    $(box1).mouseover(function(){
        TweenLite.to(box1, 3, {top:255, repeat:-1})
    });
    $(box1).mouseout(function(){
        TweenLite.to(box1, 3, {top:0, repeat:-1})
    });
    $(box2).mouseover(function(){
        TweenLite.to(box2, 3, {top:225, repeat:-1})
    });
    $(box2).mouseout(function(){
        TweenLite.to(box2, 3, {top:0, repeat:-1})
    });
    $(box3).mouseover(function(){
        TweenLite.to(box3, 3, {top:-225, repeat:-1})
    });
    $(box3).mouseout(function(){
        TweenLite.to(box3, 3, {top:0, repeat:-1})
    });
    $(box4).mouseover(function(){
        TweenLite.to(box4, 3, {left:-225, repeat:-1})
    });
    $(box4).mouseout(function(){
        TweenLite.to(box4, 3, {left:0, repeat:-1})
    });
    $(box5).mouseover(function(){
        TweenLite.to(box5, 3, {left:-225, repeat:-1})
    });
    $(box5).mouseout(function(){
        TweenLite.to(box5, 3, {left:0, repeat:-1})
    });
    $(box6).mouseover(function(){
        TweenLite.to(box6, 3, {top:-225, repeat:-1})
    });
    $(box6).mouseout(function(){
        TweenLite.to(box6, 3, {top:0, repeat:-1})
    });
    $(box7).mouseover(function(){
        TweenLite.to(box7, 3, {top:-225, repeat:-1})
    });
    $(box7).mouseout(function(){
        TweenLite.to(box7, 3, {top:0, repeat:-1})
    });
    $(box8).mouseover(function(){
        TweenLite.to(box8, 3, {top:-225, left:-225, repeat:-1})
    });
    $(box8).mouseout(function(){
        TweenLite.to(box8, 3, {top:0, left:0, repeat:-1})
    });
    $(box9).mouseover(function(){
        TweenLite.to(box9, 3, {left:-225, repeat:-1})
    });
    $(box9).mouseout(function(){
        TweenLite.to(box9, 3, {left:0, repeat:-1})
    });
    $(box10).mouseover(function(){
        TweenLite.to(box10, 3, {left:225, top:-225, repeat:-1})
    });
    $(box10).mouseout(function(){
        TweenLite.to(box10, 3, {left:0, top:0, repeat:-1})
    });
    

    //poster3
    var y = 0; 

    var c1 = new Audio('sound/c1.wav');
    var d1 = new Audio('sound/d1.wav');
    var e1 = new Audio('sound/e1.wav');
    var f1 = new Audio('sound/f1.wav');
    var g1 = new Audio('sound/g1.wav');
    var a1 = new Audio('sound/a1.wav');
    var b1 = new Audio('sound/b1.wav');
    var c2 = new Audio('sound/c2.mp3');
    var d2 = new Audio('sound/d2.mp3');
    var e2 = new Audio('sound/e2.mp3');
    var f2 = new Audio('sound/f2.mp3');
    var g2 = new Audio('sound/g2.mp3');
    var a2 = new Audio('sound/a2.mp3');
    var b2 = new Audio('sound/b2.mp3');
    var c3 = new Audio('sound/c3.mp3');

    $("#c1").mouseover(function(){
        y = Math.random()*300;
        $("#c1").animate({top:y+'px'});
    });
    $("#c1").mouseout(function(){
        y = 0;
        $("#c1").animate({top:y+'px'});
    });
    $("#d1").mouseover(function(){
        y = Math.random()*300;
        $("#d1").animate({top:y+'px'});
    });
    $("#d1").mouseout(function(){
        y = 0;
        $("#d1").animate({top:y+'px'});
    });
    $("#e1").mouseover(function(){
        y = Math.random()*300;
        $("#e1").animate({top:y+'px'});
    });
    $("#e1").mouseout(function(){
        y = 0;
        $("#e1").animate({top:y+'px'});
    });
    $("#f1").mouseover(function(){
        y = Math.random()*300;
        $("#f1").animate({top:y+'px'});
    });
    $("#f1").mouseout(function(){
        y = 0;
        $("#f1").animate({top:y+'px'});
    });
    $("#g1").mouseover(function(){
        y = Math.random()*300;
        $("#g1").animate({top:y+'px'});
    });
    $("#g1").mouseout(function(){
        y = 0;
        $("#g1").animate({top:y+'px'});
    });
    $("#a1").mouseover(function(){
        y = Math.random()*300;
        $("#a1").animate({top:y+'px'});
    });
    $("#a1").mouseout(function(){
        y = 0;
        $("#a1").animate({top:y+'px'});
    });
    $("#b1").mouseover(function(){
        y = Math.random()*300;
        $("#b1").animate({top:y+'px'});
    });
    $("#b1").mouseout(function(){
        y = 0;
        $("#b1").animate({top:y+'px'});
    });
    $("#c2").mouseover(function(){
        y = Math.random()*300;
        $("#c2").animate({top:y+'px'});
    });
    $("#c2").mouseout(function(){
        y = 0;
        $("#c2").animate({top:y+'px'});
    });
    $("#d2").mouseover(function(){
        y = Math.random()*300;
        $("#d2").animate({top:y+'px'});
    });
    $("#d2").mouseout(function(){
        y = 0;
        $("#d2").animate({top:y+'px'});
    });
    $("#e2").mouseover(function(){
        y = Math.random()*300;
        $("#e2").animate({top:y+'px'});
    });
    $("#e2").mouseout(function(){
        y = 0;
        $("#e2").animate({top:y+'px'});
    });
    $("#f2").mouseover(function(){
        y = Math.random()*300;
        $("#f2").animate({top:y+'px'});
    });
    $("#f2").mouseout(function(){
        y = 0;
        $("#f2").animate({top:y+'px'});
    });
    $("#g2").mouseover(function(){
        y = Math.random()*300;
        $("#g2").animate({top:y+'px'});
    });
    $("#g2").mouseout(function(){
        y = 0;
        $("#g2").animate({top:y+'px'});
    });
    $("#a2").mouseover(function(){
        y = Math.random()*300;
        $("#a2").animate({top:y+'px'});
    });
    $("#a2").mouseout(function(){
        y = 0;
        $("#a2").animate({top:y+'px'});
    });
    $("#b2").mouseover(function(){
        y = Math.random()*300;
        $("#b2").animate({top:y+'px'});
    });
    $("#b2").mouseout(function(){
        y = 0;
        $("#b2").animate({top:y+'px'});
    });
    $("#b1").mouseout(function(){
        y = 0;
        $("#b1").animate({top:y+'px'});
    });
    $("#c3").mouseover(function(){
        y = Math.random()*300;
        $("#c3").animate({top:y+'px'});
    });
    $("#c3").mouseout(function(){
        y = 0;
        $("#c3").animate({top:y+'px'});
    });
    $("#d3").mouseover(function(){
        y = Math.random()*300;
        $("#d3").animate({top:y+'px'});
    });
    $("#d3").mouseout(function(){
        y = 0;
        $("#d3").animate({top:y+'px'});
    });
    $("#e3").mouseover(function(){
        y = Math.random()*300;
        $("#e3").animate({top:y+'px'});
    });
    $("#e3").mouseout(function(){
        y = 0;
        $("#e3").animate({top:y+'px'});
    });
    $("#f3").mouseover(function(){
        y = Math.random()*300;
        $("#f3").animate({top:y+'px'});
    });
    $("#f3").mouseout(function(){
        y = 0;
        $("#f3").animate({top:y+'px'});
    });
    $("#g3").mouseover(function(){
        y = Math.random()*300;
        $("#g3").animate({top:y+'px'});
    });
    $("#g3").mouseout(function(){
        y = 0;
        $("#g3").animate({top:y+'px'});
    });
    $("#a3").mouseover(function(){
        y = Math.random()*300;
        $("#a3").animate({top:y+'px'});
    });
    $("#a3").mouseout(function(){
        y = 0;
        $("#a3").animate({top:y+'px'});
    });
    
    $("#c1").mouseover(function(){
        c1.play();
    });
    $("#d1").mouseover(function(){
        d1.play();
    });
    $("#e1").mouseover(function(){
        e1.play();
    });
    $("#f1").mouseover(function(){
        f1.play();
    });
    $("#g1").mouseover(function(){
        g1.play();
    });
    $("#a1").mouseover(function(){
        a1.play();
    });
    $("#b1").mouseover(function(){
        b1.play();
    });
    $("#c2").mouseover(function(){
        c2.play();
    });
    $("#d2").mouseover(function(){
        d2.play();
    });
    $("#e2").mouseover(function(){
        e2.play();
    });
    $("#f2").mouseover(function(){
        f2.play();
    });
    $("#g2").mouseover(function(){
        g2.play();
    });
    $("#a2").mouseover(function(){
        a2.play();
    });
    $("#b2").mouseover(function(){
        b2.play();
    });
    $("#c3").mouseover(function(){
        c3.play();
    });
    $("#d3").mouseover(function(){
        d2.play();
    });
    $("#e3").mouseover(function(){
        e2.play();
    });
    $("#f3").mouseover(function(){
        f2.play();
    });
    $("#g3").mouseover(function(){
        g2.play();
    });
    $("#a3").mouseover(function(){
        a2.play();
    });

    //poster4
    $('.poster4').mouseover(function(){
        $(this).css({cursor:'none'});
      });
      
      $(document).on('mousemove', function(e){
        $('.cline').css({
          left:  e.pageX - 450 ,
          top:   e.pageY - 450
        });
      });
});
