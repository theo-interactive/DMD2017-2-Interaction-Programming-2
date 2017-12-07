// 슬라이더
$('.banner-wrap').width($('.banner').width()).height($('.banner').height());
$('.banner-container').width($('.banner-wrap').width() * $('.banner-item').length).height('100%');
$('.banner-item').css({
    'width': $('.banner-wrap').width(),
    'height': '100%'
});
var $win, $banner, $bannerWrap, $bannerContainer, $bannerItem, $bannerItemImage, $bannerItemImageEl,
    $dotNav, $paddleNav, $dovEl, $paddleEl, $paddlePrevEl, $paddleNextEl;
var layout = function () {
    $win = $(window);

    $banner = $('.banner');
    $bannerWrap = $banner.children('.banner-wrap');
    $bannerContainer = $bannerWrap.children('.banner-container');
    $bannerItem = $bannerContainer.children('.banner-item');
    $bannerItemImage = $bannerItem.children('.image-area');
    $bannerItemImageEl = $bannerItemImage.children('img');

    $dotNav = $banner.children('.dot-nav');
    $dotNavEl = $dotNav.find('span');

    $paddleNav = $banner.children('.paddle-nav');
    $paddleEl = $paddleNav.find('.arrow');
    $paddlePrevEl = $paddleNav.find('.arrow.prev');
    $paddleNextEl = $paddleNav.find('.arrow.next');
};
var _cuId, _exId, _max, _bannerW, _bannerH, _isAni;
var resetInit = function () {
    _cuId = 0;
    _exId = _cuId;
    _max = $bannerItem.length;
    _isAni = false;
    paddleCheck();
    dotCheck();
};

var init = function () {
    $paddleEl.on('click', onClickPaddleNav);
    $dotNavEl.on('click', onClickDotNav);
    $win.on('resize', function () {
        onResize();
    });
    $win.trigger('resize');
};

var onResize = function () {
    _bannerW = $win.width();
    _bannerH = $win.height();
    $banner.width(_bannerW).height(_bannerH);
    $bannerContainer.width(_bannerW * _max);
    $bannerItem.width(_bannerW);

    var oW = 1400,
        oH = 933,
        imgW, imgH, imgT, imgL;
    imgW = _bannerW;

    imgH = Math.round(imgW * oH / oW);
    console.log(imgH, _bannerH);
    if (imgH < _bannerH) {
        imgH = _bannerH;

        imgW = Math.round(imgH * oW / oH);
    }

    imgT = Math.round(_bannerH / 2 - imgH / 2);
    imgL = Math.round(_bannerW / 2 - imgW / 2);
    $bannerItemImageEl.width(imgW).height(imgH).css({
        'margin-top': imgT,
        'margin-left': imgL
    });

    slide(true);

};

var onClickPaddleNav = function (e) {
    e.preventDefault();
    if (_isAni) return;

    if ($(e.target).hasClass('prev')) {
        console.log('이전으로');
        _cuId--;
        if (_cuId < 0) {
            _cuId = 0;
        }
    } else if ($(e.target).hasClass('next')) {
        console.log('다음으로');
        _cuId++;
        if (_cuId >= _max - 1) {
            _cuId = _max - 1;
        }
    }
    console.log(_cuId);
    if (_exId != _cuId) {
        slide();
    }
};
var onClickDotNav = function (e) {
    e.preventDefault();
    if (_isAni) return;
    var $el = $(this),
        id;
    id = $dotNavEl.index(this);
    console.log(id);
    if (!$el.hasClass('selected')) {
        _cuId = id;
        if (_exId != _cuId) {
            slide();
        }
    }
};

var slide = function (b = false) {
    var left = _bannerW * _cuId * -1,
        duration;
    _isAni = true;

    if (!b) {
        var duration;
        duration = 200 + Math.abs(_exId - _cuId) * 200;
        $bannerContainer.stop(true).animate({
            'left': _bannerW * _cuId * -1
        }, duration, function () {
            paddleCheck();
            dotCheck();
            _exId = _cuId;
            _isAni = false;
        });
    } else {
        $bannerContainer.stop(true).animate({
            'left': left
        });
        _isAni = false;
    }
}

var paddleCheck = function () {
    $paddleEl.removeClass('disabled');
    if (_cuId == 0) {
        console.log(_cuId);
        $paddlePrevEl.addClass('disabled');

    } else if (_cuId == _max - 1) {
        console.log(_cuId);
        $paddleNextEl.addClass('disabled');
    } else {
        $paddleEl.show();
    }
};

var dotCheck = function () {
    $dotNavEl.removeClass('selected');
    $dotNavEl.eq(_cuId).addClass('selected');
}

layout();
resetInit();
init();



//  텍스트
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = "1";
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = "1";
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);