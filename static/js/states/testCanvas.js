require([], function() {
    console.log('Hello Canvas!');

    function createCanopyPath(ctx) {
        ctx.beginPath();
        ctx.moveTo(-25, -50);
        ctx.lineTo(-10, -80);
        ctx.lineTo(-20, -80);
        ctx.lineTo(-5, -110);
        ctx.lineTo(-15, -110);
        ctx.lineTo(0, -140);
        ctx.lineTo(15, -110);
        ctx.lineTo(5, -110);
        ctx.lineTo(20, -80);
        ctx.lineTo(10, -80);
        ctx.lineTo(25, -50);
        ctx.closePath();
    }

    function drawTrails() {
        var canvas = document.getElementById('trails');
        var ctx = canvas.getContext('2d');
        ctx.save();
        ctx.translate(130, 150);
        ctx.fillStyle = '#663300';
        ctx.fillRect(-5, -50, 10, 50);
        createCanopyPath(ctx);
        ctx.stroke();
        ctx.restore();
        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#663300';
        ctx.stroke();
        ctx.restore();
        ctx.fillStyle = '#339900';
        ctx.fill();
        
    }
    drawTrails();
})
