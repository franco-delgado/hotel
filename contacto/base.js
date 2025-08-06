
const inicio = document.querySelector(".inicio");
const hotel = document.querySelector(".hotel");
const ecomer = document.querySelector(".ecomer");
const blog = document.querySelector(".blog");


//OPCIONES MOVIL
const iniciom = document.querySelector(".iniciom");
iniciom.addEventListener("click", comienzo);
const ecomerm = document.querySelector(".ecomerm");
ecomerm.addEventListener("click", irEcomer);
const blogm = document.querySelector(".blogm");
blogm.addEventListener("click",irblog);
const hotelm = document.querySelector(".hotelm");
hotelm.addEventListener("click", irHotel);
function ir(){
    alert("funca");
}

inicio.addEventListener("click", comienzo);
function comienzo(){
    location.href = "../index.html";
}
hotel.addEventListener("click", irHotel);
function irHotel(){
    location.href = "../hotel/hotel.html";
}
ecomer.addEventListener("click", irEcomer);
function irEcomer() {
    location.href = "..restorant/index.html";
}
blog.addEventListener("click", irblog);
function irblog() {
    location.href = "../blog/blog.html";
}

//OPCIONES
const movil = document.querySelector(".movil");
const opcion = document.querySelector(".opcion");
const cerrar = document.querySelector(".cerrar");

movil.addEventListener("click", menu);
function menu() {
    let ancho = -30;
    setInterval(frame, 1);
    function frame() {
        if (ancho <= 0) {
            ancho++;
            opcion.style.left = ancho + "vh";
            movil.style.display = "none";
        }
    }
}

cerrar.addEventListener("click", close);
function close() {
    let ancho = 0;
    setInterval(fram, 4);
    function fram() {
        if (ancho >= -30) {
            ancho--;
            opcion.style.left = ancho + "vh";
            movil.style.display = "inline-block";
        }
    }
}

