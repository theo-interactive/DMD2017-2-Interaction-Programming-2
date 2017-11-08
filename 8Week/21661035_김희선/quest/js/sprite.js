var Sprite;

$(document).ready(function(){
    Sprite = {
        _isReverse:false,
        _timer:0,
        appInit:function(){
            var _this = Sprite;
            //this
            //Sprite
            _this.layout();
            _this.reset();
            _this.resetInit();
        },
        layout:function(){
            this.$el = $('.koma');
        },
        reset:function(){
            this.cuId = 0;
            this._max = 8;
            //맥스는 이모티콘 이미지 갯수

            this._col = 3;
            this._row = 3;
            
            this._maxW = 864;
            this._maxH = 864;

            this._width = this._maxW / this._col;
            this._height = this._maxH / this._rol;
            this.update();
            
        },  
        resetInit:function(){
        },
    
        play:function(){
            var _this = Sprite;
            clearInterval(_this._timer);
            _this._timer = setInterval(_this.progress, 60);
        },
        stop:function(){

        },
        progress:function(){
            var _this = Sprite;
            if(!_this._isReverse){
                //순방향.
                _this._cuId++;
            }else{
                //역방향.                
            }
            // if(_this._cuId < 0){
            //     _this._cuId = 0;
            // }
            if(_this._cuId >= _this._max - 1){
                _this._cuId = _this._max - 1;
            }
            _this.update();
        },
        update:function(){
            var _this = Sprite, x, y;
            //_this._cuId
            //_this._cuId = 10;
            //********.
            x = _this._cuId % _this._row * _this._width * -1;
            y = Math.floor(_this._cuId / _this._col) * _this._height * -1;
            //********.
            _this.$el.css({'background-position':x + 'px ' + y + 'px'});            
        }
      
    };
    Sprite.appInit();
    // $('#kuma').hover(
       
    // );
});