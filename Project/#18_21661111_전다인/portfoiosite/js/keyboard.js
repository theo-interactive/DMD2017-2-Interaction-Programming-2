$(window).keydown(function(e) {
    key = (e.originalEvent.code) ? e.originalEvent.code : e.which;
    $('.key.k' + key).addClass('active');
    console.log(e.originalEvent.code);
    });

    $(window).keyup(function(e) {
        key = (e.originalEvent.code) ? e.originalEvent.code : e.which;
        $('.key.k' + key).removeClass('active');
    });

    function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');
    
    var i = 0;
    var timer = setInterval(function() {
                    if (i < text.length) {
                        $(element).append(text.charAt(i));
                        i++;
                    } else {
                        clearInterval(timer);
                    }
                }, speed);
    }

    $( document ).ready(function() {
    var speed = 95;
    var delay = $('.type1').text().length * speed + speed;
    typeEffect($('.type1'), speed);
    setTimeout(function(){
        $('.type2').css('display', 'inline-block');
        typeEffect($('.type2'), speed);
    }, delay);
    });
