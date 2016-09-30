console.log('Loaded!');
var img = document.getElementById('yo');
var marginLeft = 0;
function moveRight()
{
    marginLeft+=10;
    img.style.marginLeft= marginLeft +'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};

var button = document.gerElementById("counter");
button.onclick = function(){
    counter+=1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};