let menu = document.getElementById('menu');
let nav = document.getElementById('myNav');
let anchors= nav.getElementsByTagName('a');


for(let anchor of anchors){
    anchor.onclick = function(){
        openPanel()
    }
}

function openPanel(){
    menu.classList.toggle('open');
    nav.classList.toggle('open');
}