(function($){
    $(document).ready(function(){
        var $win, $banner, $bannerWrap, $bannerContainer, $bannerItem, $bannerItemImage, $bannerItemImageEl,
            $dotNav, $paddleNav, $dotEl, $paddleEl, $paddlePrevEl, $paddleNextEl;
        var layout = function(){
            $win = $(window);
            $banner = $('#section_body');
            $bannerWrap = $banner.children('.slider-wrap');
            $bannerContainer = $('.slider-container');
            $bannerItem = $('.slider-content');
            $bannerItemImage = $('.img-area');
            $bannerItemImageEl = $bannerItemImage.children('img');
            $paddleNav = $banner.children('.nav');
            $paddleEl = $paddleNav.find('.arrow');
            $paddlePrevEl = $paddleNav.find('.arrow.left-bt');
            $paddleNextEl = $paddleNav.find('.arrow.right-bt');
        };
        var _cuId, _exId, _max, _bannerW, _bannerH, _isAni;
        var resetInit = function(){
            _cuId = 0;
            _exId = _cuId;
            _max = $bannerItem.length;
            _isAni = false;
            paddleCheck();
        };
        var init = function(){
            $paddleEl.on('click', onClickPaddleNav);
            $win.on('resize', function(){
                onResize();
            });
            $win.trigger('resize');
        };
        var onResize = function(){
            _bannerW = $win.width();
            _bannerH = $win.height();
            $banner.width(_bannerW).height(_bannerH);
            $bannerContainer.width(_bannerW * _max);
            $bannerItem.width(_bannerW);
            var oW = 1000, oH = 838, imgW, imgH, imgT, imgL;
            imgW = _bannerW; //window. width.
            //1000 : 768 = imgW : imgH;
            imgH = Math.round(imgW * oH / oW);
            if(imgH < _bannerH){
                imgH = _bannerH;
                //1000 : 768 = imgW : imgH; 
                imgW = Math.round(imgH * oW / oH);
            }
            imgT = Math.round(_bannerH / 2 - imgH / 2); //1000.001212121...
            imgL = Math.round(_bannerW / 2 - imgW / 2);
            $bannerItemImageEl.width(imgW).height(imgH).css({'margin-top':imgT,'margin-left':imgL});
            slide(true);
        };
        var onClickPaddleNav = function(e){
            e.preventDefault();
            if(_isAni) return;
            if($(e.target).hasClass('left-bt')){
                _cuId--;
                if(_cuId < 0){
                    _cuId = 0;
                }
            }else if($(e.target).hasClass('right-bt')){
                _cuId++;
                if(_cuId >= _max - 1){
                    _cuId = _max - 1;
                }
            }
            if(_exId != _cuId){
                slide();
            }
        };
        var slide = function(b = false){
            var left = _bannerW * _cuId * -1;
            _isAni = true;
            if(!b){
                //false.
                //애니메이션이 될 때.
                var duration;
                duration = 200 + Math.abs(_exId - _cuId) * 200;
                $bannerContainer.stop(true).animate({'left' : left}, duration, function(){
                    paddleCheck();
                    _exId = _cuId;
                    _isAni = false;
                });
            }else{
                //true.
                //리사이즈가 될 때.
                $bannerContainer.stop(true).css({'left' : left});
                _isAni = false;
            }
        };
        var paddleCheck = function(){
            $paddleEl.removeClass('disabled');
            if(_cuId == 0){
                $paddlePrevEl.addClass('disabled');
            }else if(_cuId == _max -1){
                $paddleNextEl.addClass('disabled');
            }
        };
        layout();
        resetInit();
        init();
    });
})(jQuery);