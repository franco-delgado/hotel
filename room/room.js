//MENU SUPERIOR
let barramenu = document.getElementById("barramenu");
// FUNCION DE MENU
function home(){
    location.href = "../index.html"
}
function restaurante(){
    location.href = "../restaurante/restaurante.html"
}
function clickContacto(){
    location.href = "../contacto/index.php"
}

function clickmenu(){
    if(barramenu.style.display != "grid"){
        barramenu.style.display = "grid";
        let id = null;
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 2);
        function frame() {
            if (pos == 200) {
                clearInterval(id);
            } else {
                pos++;
                barramenu.style.height = pos + 'px';
            }
        }
    }else{
        let id = null;
        let pos = 200;
        clearInterval(id);
        id = setInterval(frame, 2);
        function frame() {
            if (pos == 0) {
                clearInterval(id);
                barramenu.style.display = "none";
            } else {
                pos--;
                barramenu.style.height = pos + 'px';
            }
        }
    }
}
//CLASS ROOM
//ROOM SINGLE
const room1 = document.querySelector(".room-1");
room1.addEventListener("click",()=>{
    location.href = "single/single.html"
})
room1.addEventListener("mouseenter",()=>{
    room1.style.boxShadow = "10px 10px 5px #000";
})
room1.addEventListener("mouseout",()=>{
    //alert("bien")
    room1.style.boxShadow = "none";
})
//ROOM DOBLE
const room2 = document.querySelector(".room-2");
room2.addEventListener("click",()=>{
    location.href = "doble/doble.html"
})
room2.addEventListener("mouseenter",()=>{
    room2.style.boxShadow = "10px 10px 5px #000";
})
room2.addEventListener("mouseout",()=>{
    //alert("bien")
    room2.style.boxShadow = "none";
})
//ROOM SUITE
const room3 = document.querySelector(".room-3");
room3.addEventListener("click",()=>{
    location.href = "suite/suite.html"
})
room3.addEventListener("mouseenter",()=>{
    room3.style.boxShadow = "10px 10px 5px #000";
})
room3.addEventListener("mouseout",()=>{
    //alert("bien")
    room3.style.boxShadow = "none";
})