require([], function() {
    document.addEventListener('touchmove', function(e) {
        e.preventDefault()
    })
    var canvas = document.getElementsByTagName('canvas')[0],
        ctx = canvas.getContext('2d'),
        pr = window.devicePixelRatio || 1,
        width = window.innerWidth,
        height = window.innerHeight,
        f = 90,
        q,
        r = 0,
        u = Math.PI * 2
    canvas.width = width * pr
    canvas.height = height * pr
    ctx.scale(pr, pr)
    ctx.globalAlpha = 0.6

    function init() {
        ctx.clearRect(0, 0, width, height)
        q = [{
            x: 0,
            y: height * .7 + f
        }, {
            x: 0,
            y: height * .7 - f
        }]
        while (q[1].x < width + f) {
            draw(q[0], q[1])
        }
        //draw(q[0],q[1])
    }

    function draw(i, j) {
        ctx.beginPath()
        ctx.moveTo(i.x, i.y)
        ctx.lineTo(j.x, j.y)
        var k = j.x + (Math.random() * 2 - 0.25) * f,
            n = y(j.y)
        ctx.lineTo(k, n)
        ctx.closePath()
        r -= u / -50
        ctx.fillStyle = '#' + (Math.cos(r) * 127 + 128 << 16 | Math.cos(r + u / 3) * 127 + 128 << 8 | Math.cos(r + u / 3 * 2) * 127 + 128).toString(16)
        ctx.fill()
        //ctx.stroke()

        q[0] = q[1]
        q[1] = {
            x: k,
            y: n
        }
    }

    function y(p) {
        var t = p + (Math.random() * 2 - 1.1) * f
        return (t > height || t < 0) ? y(p) : t
    }
    document.onclick = init
    document.ontouchstart = init
    init()
})
