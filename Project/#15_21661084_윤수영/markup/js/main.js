$(function(){
  var $body=$("html,body");
  var $navi=$("#toggle-menu");
  var $nav_indi=$(".nav_indicator");
  var $nav_gnb=$nav_indi.siblings("div");
  var $nav_line=$nav_indi.children("div");
  var $nav_guide=$nav_indi.children("p");
  var $nav_mnu=$("#gnb li a");
  var secTop=[0]
var mnuName=new Array();
function naviOpen(){
  $nav_gnb.stop().fadeIn(500);
  $navi.parent().addClass("on");
}
function naviClose(){
  $nav_gnb.stop().fadeOut(250);
  $navi.parent().removeClass("on");
  $navi.prop("checked",false);
}
$navi.on("click",function(){
  if($(this).prop("checked")){
    naviOpen();
  }else{
    naviClose();
  }
});
$nav_mnu.on("click",function(evt){
  evt.preventDefault();
  CloseDesignModal();
  var idx=($nav_mnu.index($(this)))
  $body.stop().animate({scrollTop:secTop[idx]},function(){
    naviClose();
  });
});
$(document).on("keyup",function(evt){
  var keyCode = evt.which;
  if(keyCode==27){
    naviClose();
    CloseDesignModal();
  }});
$("#wrap").on("click",function(){
  if($nav_gnb.is(":visible")){
  naviClose();
}if($designModalBg.is(":visible")){
  CloseDesignModal();}
});
$("nav").on("click",function(evt){
  evt.stopPropagation();
});
$(window).load(function(){
  $("section").each(function(idx){
    secTop.push($(this).offset().top);
  });
  $("a.mnuName").each(function(idx){
    mnuName[idx]=$(this).text();
  });
  $("img,section a").removeAttr("title");title_1_Show();
});
var title_list_1=new Array();
$(".title_list_1").find("a").each(function(idx){
  title_list_1[idx] = $(this).text();
});
var title_list_2=new Array();
$(".title_list_2").find("a").each(function(idx){
  title_list_2[idx]=$(this).text();
});
var textIndex_1=1;
var textIndex_2=0;
var textTimer_1=0;
var textTimer_2=0;
var $title_1=$(".title_1");
var $title_2=$(".title_2");
function title_1_Show(){
  $title_1.addClass("on");
}
function title_1_Hide(){
  $title_1.removeClass("on").text(title_list_1[textIndex_1]).attr("data-hover",title_list_1[textIndex_1]);
  if(textIndex_1<title_list_1.length-1){
    textIndex_1++;
  }else{
    textIndex_1=0;
  }
}setInterval(function(){
  textTimer_1++;
  if(textTimer_1>=1){
    title_1_Show();
    if(textTimer_1>=125){
      textTimer_1=0;title_1_Hide();
    }
  }
},40);
$title_2.on("click",function(evt){
  evt.preventDefault();
  if(textIndex_2<title_list_2.length-1){
    textIndex_2++;
  }else{
    textIndex_2=0;
  }
  $(this).stop().fadeOut(500,function(){
    $(this).text(title_list_2[textIndex_2]).stop().fadeIn(500);
  });
});
$header_conRight = $("header>.container>.cont_right_container>p.display");
var headerRandom=Math.floor(Math.random()*3);
$header_conRight.css({"background-image":"url(images/main_header_laptop_display_"+headerRandom+".jpg)"});
$header_conRight.siblings(".scroll").css({"background-image":"url(images/main_header_laptop_scroll_"+headerRandom+".png)"});$header_conRight.css({"margin-top":"-0px"}).stop().animate({"margin-top":"-1306px"},8000,"linear",function(){
  $header_conRight.delay(1500).animate({"margin-top":0},5000,"linear",function(){
    $("header>.container>.ic_1").css({"background-image":"url(images/main_header_icon_1.gif)"});
  });
});
$header_conRight.siblings(".scroll").stop().animate({"top":"120px"},8000,"linear",function(){
  $header_conRight.siblings(".scroll").delay(1500).animate({"top":"14px"},5000,"linear")});
  var $contact_popup=$(".popup");
  var msgPopupFlag=false;
  $(window).on("scroll",function(){
    var scrollTop=$(this).scrollTop();
    var scrollBottom=scrollTop+$(this).height();
    $(".alert").fadeOut(700);for(var i=0;i<secTop.length;i++){
      if(scrollTop>=secTop[i]-40){
        $nav_guide.html(mnuName[i]);
        $nav_line.addClass("s_"+[i]);
      }else{
        $nav_line.removeClass("s_"+[i]);
      }
      if(scrollBottom>=$(document).height()-10){
        $nav_guide.html(mnuName[4]);
        $nav_line.addClass("s_"+[4]);
      }
    }
    if(scrollBottom>=($(document).height()-($("#contact").height()/2))){
      if(msgPopupFlag!==true){
        var hours=now.getHours();
        var minutes=now.getMinutes();
        if(hours<10){hours="0"+hours;}
        if(minutes<10){minutes="0"+minutes;}
        $(".msg").append('<time><span class="hours"></span>:<span class="minutes"></span></time>');
        $("span.hours").text(hours);
        $("span.minutes").text(minutes);$contact_popup.eq(0).addClass("on")
        setTimeout(function(){
            $contact_popup.eq(1).addClass("on")},1000);
        setTimeout(function(){
          $contact_popup.eq(2).addClass("on")},2000);
        setTimeout(function(){
          $contact_popup.eq(3).addClass("on")},3000);
        msgPopupFlag=true;}
      }
    });
    var now=new Date();
    var year=now.getYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var day=now.getDay();
    if(month<10){month="0"+month;}if(date<10){date="0"+date;}year=year.toString().substr(-2);
    var dayKor=null;switch(day){
      case 0:dayKor="일"
      break;case 1:dayKor="월"
      break;case 2:dayKor="화"
      break;case 3:dayKor="수"
      break;case 4:dayKor="목"
      break;case 5:dayKor="금"
      break;case 6:dayKor="토"
      break;}
$("span.year").text(year);
$("span.month").text(month);
$("span.date").text(date);
$("span.day").text(dayKor);
$("span.day").text(dayKor);
var $mouseIcon=$(".mouse");
var $keepScrollBtn=$(".scroll>a");
$mouseIcon.on("click",function(evt){
  evt.preventDefault();
  $body.stop().animate({scrollTop:secTop[1]},800);
});
$keepScrollBtn.on("click",function(evt){
  evt.preventDefault();console.log("이벤트 시작");
  var tempIdx=$keepScrollBtn.index($(this));
  switch(tempIdx){
    case 0:idx=2
    break;case 1:idx=4
    break;
  }
  $body.stop().animate({scrollTop:secTop[idx]},800);});
  var myinfo={mobile:"",mail:"nykim@nykim.net"};
  $("#about .mobile").text(myinfo.mobile);
  $("#about .mail").text(myinfo.mail);
  var iconStar=$("#about .ic_3");
  var rotateDeg=0;
  function transRotate(target,deg){
    target.css({transform:'rotate('+deg+'deg)'});
  }setInterval(function(){
    rotateDeg+=90;transRotate(iconStar,rotateDeg);},1000);
  var $aboutMoreBtn=$("#about .btn");
  var $aboutMoreCont=$(".about_more");
  var $aboutMoreFlag=false;
  $aboutMoreBtn.on("click",function(evt){
    evt.preventDefault();
    if($aboutMoreFlag==false){
      $aboutMoreFlag=true;
      var aboutMoreContHeight=$aboutMoreCont.innerHeight();
      secTop[2]+=aboutMoreContHeight
      secTop[3]+=aboutMoreContHeight
      secTop[4]+=aboutMoreContHeight
      $body.animate({scrollTop:1400},500,function(){
        $aboutMoreCont.delay(200).slideDown(600,function(){
          $aboutMoreBtn.html("저에 대해 더 알아보세요 <span>▼</span>");
          $(".l_1, .l_2").show().animate({width:"95%"},2600,"easeOutQuart");
        });
      });
    }else{
      $body.animate({scrollTop:1400},500);
    }
  });
var $designList=$("#design li");
$designList.on("mouseenter",function(){
  var index=$designList.index($(this));
  $designList.eq(index).find("div").show();}).on("mouseleave",function(){
    var index=$designList.index($(this));
    $designList.eq(index).find("div").hide();
  });
  var $designItems=$("#design ul.main>li");
  var $designModal=$(".design_modal");
  var $designModalBg=$(".design_modal_bg");
  var $designModalTitle=$(".design_modal_title");
  var $designModalMnu=$("#lnb>li");
  var $designModaImg=$(".design_modal_main>img");
  var designModal_Index=0;
  var designModal_Alt=[];
  var designModal_Desc=[];
  $("#design ul>li>a>img").each(function(idx){designModal_Alt[idx]=$(this).attr("alt");});
  $("#design ul>li>a>img").each(function(idx){designModal_Desc[idx]=$(this).attr("title");});
  function scrollBarWidth(){
    document.body.style.overflow='hidden';
    var width=document.body.clientWidth;document.body.style.overflow='scroll';
    width-=document.body.clientWidth;
    if(!width)width=document.body.offsetWidth-document.body.clientWidth;document.body.style.overflow='';
    return width;
  }
  function OpenDesignModal(){
    $("#wrap").css({"margin-right":scrollBarWidth()});
    $(".design_modal_main").css({"margin-right":"15px"});
    $designModalBg.fadeIn(500,function(){
      $designModal.slideDown(600)
    });
    $("body").css({"overflow":"hidden"});}
    function CloseDesignModal(){
      $designModalBg.fadeOut(300);
      $designModal.fadeOut(300);
      $designModal.stop().animate({scrollTop:0},100,function(){
        $("body,#wrap").add($designModal).removeAttr("style");
      });
    }$designItems.on("click",function(evt){
      evt.preventDefault();
      OpenDesignModal();
      designModal_Index=$designItems.index($(this));
      AlterDesignModal(designModal_Index)
      return false;
    });
  function AlterDesignModal(index){
    $designModal.find("li").eq(index).addClass("on").siblings().removeClass("on");
    $designModalTitle.children(".num").text("0"+(index+1));
    $designModalTitle.children("h3").text(designModal_Alt[index]);
    $designModalTitle.children(".desc").html(designModal_Desc[index]);
    $designModalTitle.children(".desc").append("<span class='desc_last'> ── 이미지를 클릭하시면 원본 사이즈로 볼 수 있습니다.</p>")
    $designModaImg.attr({"src":"images/sub_design_"+(index+1)+".jpg","alt":designModal_Alt[index],"title":"클릭하시면 원본 사이즈로 볼 수 있습니다."});
  }
  $(".design_modal_bg .clse").on("click",function(evt){
    evt.preventDefault();CloseDesignModal();
    return false;
  });
  $designModal.on("click",function(evt){evt.stopPropagation();});
  $designModalMnu.on("click",function(evt){
    evt.preventDefault();
    $designModal.stop().animate({scrollTop:0});
    var tempIdx=$designModalMnu.index($(this));
    AlterDesignModal(tempIdx)
  });
  $(".design_modal_main>img").on("click",function(){
    ImgPop($(this).attr("src"));
  });
  function ImgPop(img){
    myImg=new Image();
    myImg.src=(img);
    NewWindowWidth=myImg.width;
    NewWindowHeight=myImg.height;
    imgWin=window.open("","","width="+NewWindowWidth+",height="+NewWindowHeight+",scrollbars=yes");
    imgWin.document.write("<html><head><title>디자인 포트폴리오 : 원본 사이즈로 보기</title></head>");
    imgWin.document.write("<body topmargin=0 leftmargin=0>");
    imgWin.document.write("<img src="+img+" onclick='window.close()' style='cursor:pointer;' alt='이미지 원본'>");
    imgWin.document.close();
  }});
  $(function(){
    var $alert=$(".alert");
    var alertCont=$(".alert").html();
    $(window).on("load resize",function(){
      var displayW=$(window).width();
      if(displayW<1080){
        $alert.html(alertCont).stop().fadeIn(500);
      }else{
        $alert.text("좋아요!").stop().fadeOut(800);
      }
      $alert.on("click",function(){
        $alert.stop().fadeOut(700);
      });
    });
  });
$(function(){$("section#contact>.container>.main>.talk+p").on("click",function(){
  $(this).toggleClass("on");
  if($(this).hasClass("on")){
    $(this).text("☆ 귀사에 입사를 희망합니다");
  }else{$(this).text("봐주셔서 감사합니다 :)");
}});
});
$(function(){});
