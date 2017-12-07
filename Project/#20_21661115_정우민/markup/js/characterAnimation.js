var _baby;
var _child;
var _boy;
var _adult;
var _old;
var _section;
  
$(document).ready(function(){
    _baby = {
        _isReverse:false,
        _timer:0,
        appInit:function(){
            var _this = _baby;
            // == this
            // == _baby
            _this.layout();
            _this.reset();
            _this.resetInit();
        },
        layout:function(){
            this.$el = $('.baby');

        },
        reset:function(){
            this._cuId = 0;
            this._max = 2;
            this._col = 2;  //가로
            this._row = 1;  //세로
            this._maxW = 300;
            this._maxH = 135;
            this._width = this._maxW / this._col;   //각 아이템들의 x 좌표
            this._height = this._maxH / this._row;  //각 아이템들의 y 좌표
            console.log(this._width, this._height);

            this.update();

        },
        resetInit:function(){
            var _this = _baby;

            _this.play();
        },
        play:function(){
            var _this = _baby;
            clearInterval(_this._timer);    
            //시간을 필요로 하는 메소드를 정지. 삭제 (리셋).
            _this._timer = setInterval(_this.progress, 300);
            
        },
        stop:function(){
            var _this = _baby;
            clearInterval(_this._timer);
        },
        progress:function(){
            var _this = _baby;
            if(!_this._isReverse){
                //순서대로
                _this._cuId++;
            }else {
                //역순으로
                _this._cuId--;
            }
            console.log('progress', _this._cuId);
            if(_this._max > 2){
                if(_this._cuId >= _this._max - 1){
                    _this._cuId = 0;
                }
            }else{
                if(_this._cuId == 2){
                    _this._cuId = 0;
                }
            }
            
            _this.update();
            
        },
        update:function(){
            var _this = _baby, x, y;
            // _this._cuId;
            //_this._cuId = 10;

            //************************************************

            console.log(_this._cuId, _this._col, _this._width, _this._row, _this._height)
            x = _this._cuId % _this._col * _this._width * -1;
            y = Math.floor(_this._cuId / _this._row) * _this._height * -1;
            //************************************************
            _this.$el.css({'background-position':x + 'px ' + y + 'px'});
            
            //console.log(x, y, _this._cuId);
        
        }
    };
    _baby.appInit();

    _child = {
        _isReverse:false,
        _timer:0,
        appInit:function(){
            var _this = _child;
            // == this
            // == _baby
            _this.layout();
            _this.reset();
            _this.resetInit();
        },
        layout:function(){
            this.$el = $('.child');

        },
        reset:function(){
            this._cuId = 0;
            this._max = 9;
            this._col = 8;  //가로
            this._row = 1;  //세로
            this._maxW = 1600;
            this._maxH = 267;
            this._width = this._maxW / this._col;   //각 아이템들의 x 좌표
            this._height = this._maxH / this._row;  //각 아이템들의 y 좌표
            console.log(this._width, this._height);

            this.update();

        },
        resetInit:function(){
            var _this = _child;

            _this.play();
        },
        play:function(){
            var _this = _child;
            clearInterval(_this._timer);    
            //시간을 필요로 하는 메소드를 정지. 삭제 (리셋).
            _this._timer = setInterval(_this.progress, 150);
            
        },
        stop:function(){
            var _this = _child;
            clearInterval(_this._timer);
        },
        progress:function(){
            var _this = _child;
            if(!_this._isReverse){
                //순서대로
                _this._cuId++;
            }else {
                //역순으로
                _this._cuId--;
            }
            console.log('progress', _this._cuId);
            if(_this._max > 2){
                if(_this._cuId >= _this._max - 1){
                    _this._cuId = 0;
                }
            }else{
                if(_this._cuId == 2){
                    _this._cuId = 0;
                }
            }
            
            _this.update();
            
        },
        update:function(){
            var _this = _child, x, y;
            // _this._cuId;
            //_this._cuId = 10;

            //************************************************

            console.log(_this._cuId, _this._col, _this._width, _this._row, _this._height)
            x = _this._cuId % _this._col * _this._width * -1;
            y = Math.floor(_this._cuId / _this._row) * _this._height * -1;
            //************************************************
            _this.$el.css({'background-position':x + 'px ' + y + 'px'});
            
            //console.log(x, y, _this._cuId);
        
        }
    };
    _child.appInit();






    _boy = {
        _isReverse:false,
        _timer:0,
        appInit:function(){
            var _this = _boy;
            // == this
            // == _baby
            _this.layout();
            _this.reset();
            _this.resetInit();
        },
        layout:function(){
            this.$el = $('.boy');

        },
        reset:function(){
            this._cuId = 0;
            this._max = 7;
            this._col = 6;  //가로
            this._row = 1;  //세로
            this._maxW = 1500;
            this._maxH = 336;
            this._width = this._maxW / this._col;   //각 아이템들의 x 좌표
            this._height = this._maxH / this._row;  //각 아이템들의 y 좌표
            console.log(this._width, this._height);

            this.update();

        },
        resetInit:function(){
            var _this = _boy;

            _this.play();
        },
        play:function(){
            var _this = _boy;
            clearInterval(_this._timer);    
            //시간을 필요로 하는 메소드를 정지. 삭제 (리셋).
            _this._timer = setInterval(_this.progress, 200);
            
        },
        stop:function(){
            var _this = _boy;
            clearInterval(_this._timer);
        },
        progress:function(){
            var _this = _boy;
            if(!_this._isReverse){
                //순서대로
                _this._cuId++;
            }else {
                //역순으로
                _this._cuId--;
            }
            console.log('progress', _this._cuId);
            if(_this._max > 2){
                if(_this._cuId >= _this._max - 1){
                    _this._cuId = 0;
                }
            }else{
                if(_this._cuId == 2){
                    _this._cuId = 0;
                }
            }
            
            _this.update();
            
        },
        update:function(){
            var _this = _boy, x, y;
            // _this._cuId;
            //_this._cuId = 10;

            //************************************************

            console.log(_this._cuId, _this._col, _this._width, _this._row, _this._height)
            x = _this._cuId % _this._col * _this._width * -1;
            y = Math.floor(_this._cuId / _this._row) * _this._height * -1;
            //************************************************
            _this.$el.css({'background-position':x + 'px ' + y + 'px'});
            
            //console.log(x, y, _this._cuId);
        
        }
    };
    _boy.appInit();




    _adult = {
        _isReverse:false,
        _timer:0,
        appInit:function(){
            var _this = _adult;
            // == this
            // == _baby
            _this.layout();
            _this.reset();
            _this.resetInit();
        },
        layout:function(){
            this.$el = $('.adult');

        },
        reset:function(){
            this._cuId = 0;
            this._max = 7;
            this._col = 6;  //가로
            this._row = 1;  //세로
            this._maxW = 1824;
            this._maxH = 384;
            this._width = this._maxW / this._col;   //각 아이템들의 x 좌표
            this._height = this._maxH / this._row;  //각 아이템들의 y 좌표
            console.log(this._width, this._height);

            this.update();

        },
        resetInit:function(){
            var _this = _adult;

            _this.play();
        },
        play:function(){
            var _this = _adult;
            clearInterval(_this._timer);    
            //시간을 필요로 하는 메소드를 정지. 삭제 (리셋).
            _this._timer = setInterval(_this.progress, 200);
            
        },
        stop:function(){
            var _this = _adult;
            clearInterval(_this._timer);
        },
        progress:function(){
            var _this = _adult;
            if(!_this._isReverse){
                //순서대로
                _this._cuId++;
            }else {
                //역순으로
                _this._cuId--;
            }
            console.log('progress', _this._cuId);
            if(_this._max > 2){
                if(_this._cuId >= _this._max - 1){
                    _this._cuId = 0;
                }
            }else{
                if(_this._cuId == 2){
                    _this._cuId = 0;
                }
            }
            
            _this.update();
            
        },
        update:function(){
            var _this = _adult, x, y;
            // _this._cuId;
            //_this._cuId = 10;

            //************************************************

            console.log(_this._cuId, _this._col, _this._width, _this._row, _this._height)
            x = _this._cuId % _this._col * _this._width * -1;
            y = Math.floor(_this._cuId / _this._row) * _this._height * -1;
            //************************************************
            _this.$el.css({'background-position':x + 'px ' + y + 'px'});
            
            //console.log(x, y, _this._cuId);
        
        }
    };
    _adult.appInit();



    _old = {
        _isReverse:false,
        _timer:0,
        appInit:function(){
            var _this = _old;
            // == this
            // == _baby
            _this.layout();
            _this.reset();
            _this.resetInit();
        },
        layout:function(){
            this.$el = $('.old');

        },
        reset:function(){
            this._cuId = 0;
            this._max = 5;
            this._col = 4;  //가로
            this._row = 1;  //세로
            this._maxW = 800;
            this._maxH = 352;
            this._width = this._maxW / this._col;   //각 아이템들의 x 좌표
            this._height = this._maxH / this._row;  //각 아이템들의 y 좌표
            console.log(this._width, this._height);

            this.update();

        },
        resetInit:function(){
            var _this = _old;

            _this.play();
        },
        play:function(){
            var _this = _old;
            clearInterval(_this._timer);    
            //시간을 필요로 하는 메소드를 정지. 삭제 (리셋).
            _this._timer = setInterval(_this.progress, 400);
            
        },
        stop:function(){
            var _this = _old;
            clearInterval(_this._timer);
        },
        progress:function(){
            var _this = _old;
            if(!_this._isReverse){
                //순서대로
                _this._cuId++;
            }else {
                //역순으로
                _this._cuId--;
            }
            console.log('progress', _this._cuId);
            if(_this._max > 2){
                if(_this._cuId >= _this._max - 1){
                    _this._cuId = 0;
                }
            }else{
                if(_this._cuId == 2){
                    _this._cuId = 0;
                }
            }
            
            _this.update();
            
        },
        update:function(){
            var _this = _old, x, y;
            // _this._cuId;
            //_this._cuId = 10;

            //************************************************

            console.log(_this._cuId, _this._col, _this._width, _this._row, _this._height)
            x = _this._cuId % _this._col * _this._width * -1;
            y = Math.floor(_this._cuId / _this._row) * _this._height * -1;
            //************************************************
            _this.$el.css({'background-position':x + 'px ' + y + 'px'});
            
            //console.log(x, y, _this._cuId);
        
        }
    };
    _old.appInit();




    _section = {
        _isReverse:false,
        _timer:0,
        appInit:function(){
            var _this = _section;
            // == this
            // == _baby
            _this.layout();
            _this.reset();
            _this.resetInit();
        },
        layout:function(){
            this.$el = $('.bgMoving');

        },
        reset:function(){
            this._cuId = 0;
            this._max = 961;
            this._col = 960;  //가로
            this._row = 960;  //세로
            this._maxW = $('.bgMoving').width();
            this._maxH = $('.bgMoving').height();
            this._width = this._maxW / this._col;   //각 아이템들의 x 좌표
            this._height = this._maxH / this._row;  //각 아이템들의 y 좌표
            console.log(this._width, this._height);

            this.update();

        },
        resetInit:function(){
            var _this = _section;

            _this.play();
        },
        play:function(){
            var _this = _section;
            clearInterval(_this._timer);    
            //시간을 필요로 하는 메소드를 정지. 삭제 (리셋).
            _this._timer = setInterval(_this.progress, 20);
            
        },
        stop:function(){
            var _this = _section;
            clearInterval(_this._timer);
        },
        progress:function(){
            var _this = _section;
            if(!_this._isReverse){
                //순서대로
                _this._cuId++;
            }else {
                //역순으로
                _this._cuId--;
            }
            console.log('progress', _this._cuId);
            if(_this._max > 2){
                if(_this._cuId >= _this._max - 1){
                    _this._cuId = 0;
                }
            }else{
                if(_this._cuId == 2){
                    _this._cuId = 0;
                }
            }
            
            _this.update();
            
        },
        update:function(){
            var _this = _section, x, y;
            // _this._cuId;
            //_this._cuId = 10;

            //************************************************

            console.log(_this._cuId, _this._col, _this._width, _this._row, _this._height)
            x = _this._cuId % _this._col * _this._width * -1;
            y = Math.floor(_this._cuId / _this._row) * _this._height * -1;
            //************************************************
            _this.$el.css({'background-position':x + 'px ' + y + 'px'});
            
            //console.log(x, y, _this._cuId);
        
        }
    };
    _section.appInit();
});