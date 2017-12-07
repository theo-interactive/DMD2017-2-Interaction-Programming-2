$(document).ready(function(){
    albumControl();
    function loadContent(){
        $.ajax({
            url: 'data/music.json',
            dataType:'json',
            success:loadComplete, //<-- 함수 이름만 넣으면 callback 경로로 넘어감.
            error:function(error){
                console.log(error);

            }
        });
    }

    //Ajax 호출 성공시 loadComplete 로 callback.
    function loadComplete(data){
        console.log('success');
        //data.
        var soundList = data["soundList-items"],
            soundinfo = data["items"],
            htmls='';
        //element.
        var $section4 = $('div#section_wrapper_4'),
            $list = $('#list-wrapper'),
            $genre = $('#music_genre'),
            $date = $('#music_date'),
            $musicInfo =$('#music-desc-wrapper'),
            $menuList = $('.sound-list'),
            $audio_wrapper = $('#audio-wrapper');
            $audio = $('#audio')

            // $section4.css("display", "none");
            
            // $section4.fadeOut();

            
        //make html.
        $.each(soundList, function(i, d){
            var _soundName = d["title"],
                _soundId = d["id"],
                _soundTime = d["time"],
                listHtml;
            listHtml = '<li class="sound-list"><span class="select-box"></span><span><p class="mu_id">'+ _soundId+ '</p></span><span><p class="mu_title">'+_soundName+ '</p></span><span><p class="mu_time">'+ _soundTime+'</p></span> </li>';
            $list.append(listHtml);

            //**중요**//
            // if(i == soundList.length - 1){
            //     //마지막 끝나는 시점을 체크해서 이벤트 활성화
            //     resetInit();
            // }
        });

        //make html.
        $.each(soundinfo, function(i, d){
           
            var _soundGenre = d["genre"],
                _soundDate = d["date"],
                _soundTite = d["musicTitle"],
                _soundDesc = d["musicDesc"],
                _musicPath = d["audio"],
                genreHtml,
                dateHtml,
                infoHtml,
                audioHtml
         
            $('body').on('click', '.sound-list', function(e){
                var myindex =  $(this).index();        
                console.log("myindex"+myindex);     
                genreHtml = '<dd id="genre" class="clear">'+ _soundGenre[myindex]+'</dd>';
                dateHtml = '<dd id="date" class="clear">'+ _soundDate[myindex]+'</dd>';
                infoHtml = '<p id="music-title" class="clear">'+ _soundTite[myindex]+'</p>'+'<span id="music-desc" class="clear">'+_soundDesc[myindex]+'</span>';
                audioHtml = '<audio  class="clear" id="audio" controls="controls" ><source id="source" src="'+_musicPath[myindex]+'"></audio>';
                $('.clear').remove();

                $genre.append(genreHtml);
                $date.append(dateHtml);
                $musicInfo.append(infoHtml);
                $audio_wrapper.append( audioHtml);                   
                
            });
          
        });
        // $.each(soundinfo2, function(i, d){
        //     var _soundGenre = d["genre"],
        //     _soundDate = d["date"],
        //     _soundTite = d["musicTitle"],
        //     _soundDesc = d["musicDesc"],
        //     genreHtml,
        //     dateHtml,
        //     infoHtml
        //     $('body').on('click', '.sound-list', function(e){
        //         var myindex =  $(this).index();
        //         if(myindex == 1){
          
        //             // genreHtml = '<dd class="genre">'+ _soundGenre+'</dd>';
        //             // dateHtml = '<dd class="genre">'+ _soundDate +'</dd>';
        //             // infoHtml = '<p id="music-title">'+ _soundTite+'</p>'+'<span id="music-desc">'+_soundDesc+'</span>';
        //             // $genre.append(genreHtml);
        //             // $date.append(dateHtml)
        //             // $musicInfo.append(infoHtml);
        //         }
        //     });
        // });
    }
    function albumControl(){
        var $albumInfo = $('#album_Info'),
            $albumPhoto =$('#section4-bg'),
            $albumInfoClear=$('.clear')

            $albumInfo.addClass('vis');
            if($albumInfo.addClass('vis')){
                $albumInfoClear.css({'opacity':'0'});
            };
    }

    $('body').on('click', '.sound-list', function(e){
        
        audioPlay();
        // element.
        var $album= $('ol#album_Photo > li'),
            $section4= $('div#section4-bg'),
            $menuList2 = $('nav > ul > li '),
            $scenChange = $('#list-change')
            // $albumPhoto =$('#album_Photo > li')

        // index.
        var myindex =  $(this).index();
        var menuindex = $menuList2.index();
              

            // album cover & background-image change
            $album.css({'background-image' : 'url(./images/album_0'+ parseInt(myindex + 1, 10) + '.png)'});
            // $section4.fadeIn('slow');
            $section4.css({'background-image' : 'url(./images/music_0'+ parseInt(myindex + 1, 10) + '.jpg)'},500);
            $scenChange.fadeIn(500).fadeOut(100, function(){
                console.log('fin')
                $('#album_Info').removeClass('vis');
                $('.clear').css({'opacity':'1'});
            });
            // $section4.fadeOut("fast", function () {
            //     $(this).css({'background-image' : 'url(./images/music_0'+ parseInt(myindex + 1, 10) + '.jpg)'});
            //     $(this).fadeIn("slow");
            // });

            // select - style
            if($('.sound-list').removeClass('list-selected')){
                $('.sound-list').eq(myindex).addClass('list-selected');
            }; 
    });
   
    // if(!$('#album_Info').hasClass('vis')){
    //     $('#album_Info').addClass('vis');
    // }else if($('#album_Info').hasClass('vis')){
        
    // }

    $('body').on('mouseover', '.sound-list', function(e){
        var myindex =  $(this).index();
        if($('.sound-list').removeClass('list-selected2')){
        $('.sound-list').eq(myindex).addClass('list-selected2');
    }; 
    });

    function audioPlay(){
        
        var Audio = document.getElementsByTagName('audio');
        
        if (!Audio.paused) {
        
            console.log("playing");
        
        } else {
            console.log("pause");
            //Not playing...maybe paused, stopped or never played.
        
        }
    }

    function imgRotate(){
        var $albumImg = $("ol#album_Photo li"), degree = 0,timer;
    }
    // function resetInit(){
    //     //이벤트 바인딩.
    //     var $musicList = $('.sound-list'),
    //         $album= $('ol#album_Photo > li'),
    //         $section4= $('div#section_wrapper_4'),
    //         $menuList2 = $('nav > ul > li ');

    //     $musicList.on('mouseover mousedown',function(e){
    //         var myindex =  $(this).index();
    //         var menuindex = $menuList2.index();
    //         console.log('index는'+myindex+'번째입니다');
    //         if(e.type == 'mousedown'){
    //             $album.css({'background-image' : 'url(./images/album_0'+ parseInt(myindex + 1, 10) + '.png)'});
    //             $section4.css({'opacity':'1','background-image' : 'url(./images/music_0'+ parseInt(myindex + 1, 10) + '.jpg)'});
    //             if($musicList.removeClass('list-selected')){
    //                 $musicList.eq(myindex).addClass('list-selected');
    //             }
                
    //         }
    //     });
    // }

    function redirectPage() {
        window.location = linkLocation;
    }

    //모든 함수를 다 쓴 후 마지막에 실행해야 함.
    //Ajax 호출.
    loadContent();

});