window.onload = function(){
    window.onmousemove = function(mouseData){
        var mousex = mouseData.x;
        var mousey = mouseData.y;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://[2620:9b::1901:900a]:3200", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(
            [mousex,mousey]
        ));
    }
    window.setInterval(function(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://[2620:9b::1901:900a]:3200", false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        var theResponse = JSON.parse(xhr.responseText);
        for(var i = 0; i < theResponse.length; i++){
            console.log(theResponse[i])
        }

    },1000/30)

    
}   