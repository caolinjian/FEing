require(['trianglify'], function(Trianglify) {
    var pattern = Trianglify({
        width: 640,
        height: 1280,
        cell_size:50
    });
    console.log(pattern.png());
    document.body.appendChild(pattern.svg())
})