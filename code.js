let barramenu = document.getElementById("barramenu");
const contacto = document.getElementById("contacto");
const paginaprincipal = document.getElementById("paginaprincipal");
const room = document.getElementById("room");
const restaurante = document.getElementById("restaurante");

paginaprincipal.addEventListener("click",()=>{
    location.href = "../index.html"
})

room.addEventListener("click",()=>{
    location.href = "room/room.html"
})
room.addEventListener("mouseenter",()=>{
    room.style.color = "rgb(240, 255, 255)";
})
room.addEventListener("mouseout",()=>{
    room.style.color = "rgb(0, 0, 0)";
})

restaurante.addEventListener("click",()=>{
    location.href = "restaurante/restaurante.html"
})
restaurante.addEventListener("mouseenter",()=>{
    restaurante.style.color = "rgb(240, 255, 255)";
})
restaurante.addEventListener("mouseout",()=>{
    restaurante.style.color = "rgb(0, 0, 0)";
})

contacto.addEventListener("mouseenter",()=>{
    contacto.style.color = "rgb(240, 255, 255)";
})
contacto.addEventListener("mouseout",()=>{
    contacto.style.color = "rgb(0, 0, 0)";
})

paginaprincipal.addEventListener("mouseenter",()=>{
    paginaprincipal.style.color = "rgb(240, 255, 255)";
})
paginaprincipal.addEventListener("mouseout",()=>{
    paginaprincipal.style.color = "rgb(0, 0, 0)";
})

function clickmenu(){
    if(barramenu.style.display != "grid"){
        barramenu.style.display = "grid";
        let id = null;
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == 200) {
                clearInterval(id);
            }
            else {
                pos++;
                barramenu.style.height = pos + 'px';
            }
        }
    }else{
        let id = null;
        let pos = 200;
        clearInterval(id);
        id = setInterval(frame, 5);
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

contacto.addEventListener("click",()=>{
    location.href = "contacto/index.html";
})


