require([], function() {
    console.log('css3 clock');

    function init() {
        drawLines($('.line-min'), 60, 85);
        drawLines($('.line-hour'), 12, 80);
        drawNumbers($('.number'));
        move();
    }
    init();

    function drawLines(wrap, total, translateX) {
        var gap = 360 / total;
        var strHtml = '';
        for (var i = 0; i < total; i++) {
            strHtml += '<li style="-webkit-transform:rotate(' + i * gap + 'deg)  translate(' + translateX + 'px,-50%)"></li>';
        }
        wrap.html(strHtml);
    }

    function drawNumbers(wrap) {
        var radius = wrap.width() / 2;
        var strHtml = '';
        for (var i = 1; i < 13; i++) {
            var myAngle = (i / 6) * Math.PI;
            var myX = radius + radius * Math.sin(myAngle),
                myY = radius - radius * Math.cos(myAngle);
            strHtml += '<li style="left:' + myX + 'px;top:' + myY + 'px;">' + i + '</li>';
        }
        wrap.html(strHtml);
    }

    function move() {
        var domHour = $('.hour'),
            domMin = $('.min'),
            domSec = $('.sec');
        setInterval(function() {
            var now = new Date(),
                hour = now.getHours(),
                min = now.getMinutes(),
                sec = now.getSeconds();
            var secAngle = sec * 6 - 90,
                minAngle = min * 6 + sec * 0.1 - 90,
                hourAngle = hour * 30 + min * 0.5 - 90;
            domSec.css('-webkit-transform', 'rotate(' + secAngle + 'deg)');
            domMin.css('-webkit-transform', 'rotate(' + minAngle + 'deg)');
            domHour.css('-webkit-transform', 'rotate(' + hourAngle + 'deg)');
        },200);
    }
});
