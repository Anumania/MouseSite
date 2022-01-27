window.onload = function(){
    window.onmousemove = function(mouseData){
        var mousex = mouseData.x;
        var mousey = mouseData.y;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://[2620:9b::1901:900a]:3200", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            x:mousex,y:mousey
        }));
    }
}