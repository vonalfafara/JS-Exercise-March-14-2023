let menu = document.getElementById('menu');
let nav = document.getElementById('myNav');
let anchors= nav.getElementsByTagName('a');

let line1 = menu.children[0];
let line2 = menu.children[1];
let line3 = menu.children[2];

for(let anchor of anchors){
    anchor.onclick = function(){
        openPanel()
    }
}

function openPanel(){
    menu.classList.toggle('open');
    nav.classList.toggle('open');
}