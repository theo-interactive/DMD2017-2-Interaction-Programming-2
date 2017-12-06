$(document).ready(function(){

    var _baby = $('.baby');
    var _child = $('.child');
    var _boy = $('.boy');
    var _adult = $('.adult');
    var _old = $('.old');

    var babyAni;
    var childAni;
    var boyAni;
    var adultAni;
    var oldAni;


    function chaAni(obj, j){
        
        var objW = obj.width();

        // obj.click(function(){
        //     console.log(objW);
        // })

        var i = 0;

        var objInterval;


        if(i < j){

            objInterval = setInterval(function(){
                obj.css({'background-position':objW * i + 'px 0'});
            }, 1000)

            if(i == j){
                i = 0;
            }

        }
        

    }

    chaAni(_baby, 1);


});