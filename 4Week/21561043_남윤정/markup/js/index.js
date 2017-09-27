$(document).ready(function(){

    $('ul#menu_page').hide();
    
    $('button#menu_bt').click(function(){
        $('ul#menu_page').toggle();
    });

});