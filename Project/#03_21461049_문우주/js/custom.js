
(function ($) {


	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });
	


	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});	

	

	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	
	
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
		$('a.totop,a#btn-scroll,a.btn-scroll,.carousel-inner .item a.btn').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	
	$('.gallery-item a').nivoLightbox({
		effect: 'fadeScale',                             
		theme: 'default',                           
		keyboardNav: true,                          
		clickOverlayToClose: true,                 
		onInit: function(){},                       
		beforeShowLightbox: function(){},           
		afterShowLightbox: function(lightbox){},    
		beforeHideLightbox: function(){},           
		afterHideLightbox: function(){},            
		onPrev: function(element){},               
		onNext: function(element){},                
		errorMessage: 'The requested content cannot be loaded. Please try again later.' 
	});

	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");					
		});
	
})(jQuery);
