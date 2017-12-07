
	$(function(){
	//driving
	var ease_driving = "easeInOutExpo";
	//$("#driving .info_t").animate({top:60},300,ease_driving);
	//$("#driving .info_b").animate({bottom:60},800,ease_driving);
	//$("#speed").animate({left:140},1300,ease_driving);
	//$("#rpm").animate({right:140},1800,ease_driving);	
	
	//$("#driving .gear").delay(1200).fadeIn(1300,"easeInOutBounce");		
		
	$("#driving .ico li span").click(function(){
		$(this).toggleClass("on");
			
});	

$("#driving .gear li").click(function(){
		$(this).toggleClass("on");
		
});
		
	var driving = {	
		increase : function() {				
			num+=5;
			if(num < 241){	
				$("#driving .bar").css("animation","rotate.8s infinite linear");
				$("#speed h1").text(Math.round(num/3*2));	
				$("#speed .bar,#speed .gra,#speed .gra_red").css({rotate:num+"deg"});	
				$("#rpm .bar,#rpm .gra,#rpm .gra_red").css({rotate:num*0.7+"deg"});	
				$("#speed .gra,#rpm .gra").css({opacity:"0." + num/10});			
				if( 9 < num < 100){
					$("#driving .bar").css("animation","rotate.8s infinite linear");
					$("#speed h1").removeClass("sm");
					$("#speed h1").css("margin-left","-11%");
				}else if(num > 180){
					$("#speed h1").css("margin-left","-11%");	
					$("#driving .bar").css("animation","rotate.8s infinite linear");
					$("#speed .gra_red").css({opacity:1});	
					$("#rpm .gra").css({opacity:1});
					$("#speed h1").text(160);

				}else{
					$("#driving .bar").css("animation","rotate.8s linear");			
					$("#speed h1").addClass("sm");		
					$("#speed .gra").css({opacity:1});
					$("#speed .gra_red").css({opacity:1});		
				}
				$("#speed li").eq(Math.round(num/30)).css({fontSize:30,opacity:1});
				$("#speed li").eq(Math.round(num/30)).next().css({fontSize:20,opacity:0.8});
				$("#speed li").eq(Math.round(num/30)).prev().css({fontSize:20,opacity:0.8});	
				$("#speed li").eq(Math.round(num/30)).prev().prev().css({fontSize:16,opacity:0.5});	
				$("#speed li").eq(Math.round(num/30)).next().next().css({fontSize:16,opacity:0.5});			
				$("#rpm li").eq(Math.round(num/30*0.7)).css({fontSize:30,opacity:1});
				$("#rpm li").eq(Math.round(num/30*0.7)).next().css({fontSize:20,opacity:0.8});
				$("#rpm li").eq(Math.round(num/30*0.7)).prev().css({fontSize:20,opacity:0.8});
				$("#rpm li").eq(Math.round(num/30*0.7)).prev().prev().css({fontSize:16,opacity:0.5});
				$("#rpm li").eq(Math.round(num/30*0.7)).next().next().css({fontSize:16,opacity:0.5});			
			}else if(num > 241){
				$("#driving .bar").css("animation","rotate.8s linear");
				clearInterval(start);	
				state = 1;
				$("#speed h1").css("margin-left","-11%");
			}
		},
		decrease : function() {	
			num-=2;
			if(num == 0){
				clearInterval(end);				
				state = 0;
				num = 0;
				$("#driving .bar").css("animation","none");
				$("#speed h1").text(0);			
			}else if(num > 0){
				$("#driving .bar").css("animation","rotate.8s infinite linear");
				$("#speed h1").text(Math.round(num/3*2));	
				$("#speed .bar,#speed .gra,#speed .gra_red").css({rotate:num+"deg"});	
				$("#rpm .bar,#rpm .gra,#rpm .gra_red").css({rotate:num/3*2+"deg"});	
				$("#speed .gra,#rpm .gra").css({opacity:"0." + num/10});			
				if(num < 100){
					$("#speed h1").css("margin-left","-1%");	
					$("#driving .bar").css("animation","rotate.8s infinite linear");
					$("#speed h1").removeClass("sm");
															
				}else if(num > 180){
					$("#driving .bar").css("animation","rotate.8s infinite linear");
					$("#speed .gra_red").css({opacity:1});	
					$("#rpm .gra").css({opacity:1});
					$("#speed h1").css("margin-left","-11%");
				}else{	
					$("#speed h1").css("margin-left","-1%");
					$("#driving .bar").css("animation","rotate.8s infinite linear");		
					$("#speed h1").addClass("sm");		
					$("#speed .gra,#rpm .gra").css({opacity:1});
					$("#speed .gra_red").css({opacity:0});
				}
				$("#speed li").eq(Math.round(num/30)).css({fontSize:30,opacity:1});
				$("#speed li").eq(Math.round(num/30)).next().css({fontSize:20,opacity:0.8});
				$("#speed li").eq(Math.round(num/30)).prev().css({fontSize:20,opacity:0.8});	
				$("#speed li").eq(Math.round(num/30)).prev().prev().css({fontSize:16,opacity:0.5});	
				$("#speed li").eq(Math.round(num/30)).next().next().css({fontSize:16,opacity:0.5});			
				$("#rpm li").eq(Math.round(num/30*0.7)).css({fontSize:30,opacity:1});
				$("#rpm li").eq(Math.round(num/30*0.7)).next().css({fontSize:20,opacity:0.8});
				$("#rpm li").eq(Math.round(num/30*0.7)).prev().css({fontSize:20,opacity:0.8});
				$("#rpm li").eq(Math.round(num/30*0.7)).prev().prev().css({fontSize:16,opacity:0.5});
				$("#rpm li").eq(Math.round(num/30*0.7)).next().next().css({fontSize:16,opacity:0.5});	
			}else{
				num = 0;
				$("#speed h1").text(0);	
				clearInterval(end);	
				clearInterval(start);
				$("#driving .bar").css("animation","rotate.8s linear");
			}
		}
	}
	var state = 0;
	var num = 0;
	$(".gear").mouseover(function(){
		if(state == 1){
			clearInterval(end);	
			state = 0;			
		}		
		start = setInterval(driving.increase,20);
	});
	$(".gear").mouseout(function(){	
		state = 1;
		clearInterval(start);
		end = setInterval(driving.decrease,30);
	});
	});
	