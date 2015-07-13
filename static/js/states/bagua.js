require([],function(){
    var i=0;
    setInterval(function(){
        i+=1;
        if(i>360){
            i=i-360
        }
        document.querySelector('.bagua').style.transform = 'rotate('+i+'deg)';
    },10)
})