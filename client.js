window.onload = function(){
    window.onmousemove = function(mouseData){
        var mousex = mouseData.x;
        var mousey = mouseData.y;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://[fe80::21a6:9715:e589:a6ae]:3200", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(
            [mousex,mousey]
        ));
    }
    window.setInterval(function(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://[fe80::21a6:9715:e589:a6ae]:3200", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function(response){
            if(xhr.readyState == 4){
                var miceOnPage = document.getElementsByClassName("MultiplayerMice");
                var theResponse = JSON.parse(xhr.responseText);
                if(miceOnPage.length != theResponse.length){
                    for(var i = miceOnPage.length-1; i >= 0; i--){
                        miceOnPage[i].remove();
                    }
                    for(var i = 0; i < theResponse.length;i++){
                        document.body.innerHTML += '<img src = "./mouse.png" class="MultiplayerMice"></img>'
                        console.log("added mouse");
                    }
                }
                miceOnPage = document.getElementsByClassName("MultiplayerMice");
                console.log(theResponse);
                for(var i = 0; i < miceOnPage.length; i++){
                    var mouseElementStyle = miceOnPage[i].style;
                    mouseElementStyle.position = "absolute";
                    mouseElementStyle.top = theResponse[i][1].toString() + "px";
                    mouseElementStyle.left = theResponse[i][0].toString() + "px";
                }
 
            }
        }
        xhr.send();
    },1000/60)

    
}   