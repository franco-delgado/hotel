//MENU SUPERIOR
let barramenu = document.getElementById("barramenu");
// FUNCION DE MENU
function back(){
    location.href = "../room.html"
}

let arrImagenes = [];
let i=0;
arrImagenes[0] = "url(../../imagen/habitacion1.jpg)";
arrImagenes[1] = "url(../../imagen/habitacion2.jpg)";
arrImagenes[2] = "url(../../imagen/habitacion3.jpg)";
arrImagenes[3] = "url(../../imagen/habitacion4.jpg)";

const contenImagen = document.querySelector(".contenImagen");
contenImagen.style.background = arrImagenes[i];
function next(){
    i++;
    if(i == 4){
        i=0
        contenImagen.style.background = arrImagenes[i];
    }else{
        contenImagen.style.background = arrImagenes[i];
    }
}function previous(){
    i--;
    if(i < 0){
        i=4;
        contenImagen.style.background = arrImagenes[i];
    }else{
        contenImagen.style.background = arrImagenes[i];
    }
}
setInterval(autonext,4000);

function autonext(){
    i++;
    if(i == 4){
        i=0
        contenImagen.style.background = arrImagenes[i];
    }else{
        contenImagen.style.background = arrImagenes[i];
    }
}