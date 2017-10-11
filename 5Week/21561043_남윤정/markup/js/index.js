$(document).ready(function(){

    $('ul#menu_page').hide();
    
    $('button#menu_bt').click(function(){
        $('ul#menu_page').toggle();
    });

    $('li#poster1').click(function(){
       $('section.poster1').show();
       $('section.poster2').hide();
       $('section.poster3').hide();
       $('ul#menu_page').hide();
    });

    $('li#poster2').click(function(){
        $('section.poster2').show();
        $('section.poster1').hide();
        $('section.poster3').hide();
        $('ul#menu_page').hide();
     });

     $('li#poster3').click(function(){
        $('section.poster3').show();
        $('section.poster1').hide();
        $('section.poster2').hide();
        $('ul#menu_page').hide();
     });
});