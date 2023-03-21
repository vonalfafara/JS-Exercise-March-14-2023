let menu = document.getElementById('menu');
let nav = document.getElementById('myNav');
let anchors= nav.getElementsByTagName('a');

for(let anchor of anchors){
    anchor.onclick = function(){
        menu.style = "";
        anchor.parentElement.style = "";
    }
}

function openPanel(elem){
    elem.style.display = "none";
    nav.style.width = "450px";
}