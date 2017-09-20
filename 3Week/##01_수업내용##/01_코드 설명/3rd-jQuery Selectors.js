//$ jQuery.

$('#id').val();

//$ - jQuery 메서드
//$('#id') - Selector - id DOM 객체를 반환
//.val() - 객체의 속성을 반환

//Selector
$ = jQuery
$ = jQuery = function

$(...);
jQuery(...);

$.isArray(...);
jQuery.isArray(...);

$('div');
document.getElementsByTagName('div');

$('#header');
document.getElementById('header');

$('.content');
document.getElementsByClassName('content');

$('div');
$('#header');
$('.header');
$('a[href="#"]');

$('li').length;

$('li')[index];
$('li').get(index);

$('li').eq(index);

$('li:first');
$('li').first();

$('li:first');
$('li').first();
$('li').eq(0);

$(':last');
last();

$(':has(span)');
has('span');

$(':not(span)');
not('span');

$('li:visible');

$('li').index();
$('li').index('li.last');

$('ul').children();
 
$('ul').children('li');

$('ul').children().first();
$('ul').children().eq(0);
$('ul').children().(':last');

$('ul').parent();

$('a:has(span)').parents('ul');
$('a').has('span').parents('ul');

$('a:not(span)').parent('li');
$('a').not('span').parent('li');

$('ul').prev();

$('li:last').prevAll();
$('li:last').prevAll('li.prev');

$('ul').next();
$('li:last').nextAll();
$('li:last').nextAll('li.prev');


$('ul').find('li');
$('ul').find('li a');
$('ul').find('li').find('a');