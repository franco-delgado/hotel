//MENU SUPERIOR
let barramenu = document.getElementById("barramenu");
// FUNCION DE MENU
function back(){
    location.href = "../index.html"
}

let arrImagenes = [];
let i=0;
arrImagenes[6] = "url(../imagen/desayunador4.jpg)";
arrImagenes[0] = "url(../imagen/restorante1.jpg)";
arrImagenes[1] = "url(../imagen/desayunador1.jpg)";
arrImagenes[2] = "url(../imagen/restorante2.jpg)";
arrImagenes[3] = "url(../imagen/desayunador2.jpg)";
arrImagenes[4] = "url(../imagen/restorante3.jpg)";
arrImagenes[5] = "url(../imagen/desayunador3.jpg)";

const contenImagen = document.querySelector(".contenImagen");
contenImagen.style.background = arrImagenes[i];
function next(){
    i++;
    if(i == 6){
        i=0
        contenImagen.style.background = arrImagenes[i];
    }else{
        contenImagen.style.background = arrImagenes[i];
    }
}function previous(){
    i--;
    if(i < 0){
        i=6;
        contenImagen.style.background = arrImagenes[i];
    }else{
        contenImagen.style.background = arrImagenes[i];
    }
}
setInterval(autonext,4000);

function autonext(){
    i++;
    if(i == 6){
        i=0
        contenImagen.style.background = arrImagenes[i];
    }else{
        contenImagen.style.background = arrImagenes[i];
    }
}