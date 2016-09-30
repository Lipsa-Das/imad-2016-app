
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    counter+=1;
    var span= document.getElementbyId('o');
    span.innerHTML=counter.toString();
};