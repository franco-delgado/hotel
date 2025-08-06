function clickmenu(){
    location.href = "../index.html"
}

let meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let datos = new Date();
let Dia = datos.getDate();
let numeroDeMes = datos.getMonth();
let Año = datos.getFullYear();


let dates = document.getElementById("dates");
let month = document.getElementById("month");
let year = document.getElementById("year");

let prevMonthDOM = document.getElementById("prevMonth");
let nextMonthDOM = document.getElementById("nextMonth");

month.textContent = meses[numeroDeMes];
year.textContent= Año.toString();

//console.log(isLeap(2023));

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click',()=>nextMonth());

writeMonth(numeroDeMes);

function writeMonth(month){
    for(let i= startDay(); i>0; i--){
        dates.innerHTML += `<div class="calendar__date calendarItem lastday">${getTotalDays(numeroDeMes-1)-(i-1)}</div>`;
    }
    for(let i=1; i<=getTotalDays(month); i++){
        if(i === Dia){
            dates.innerHTML += `<div class="calendar__date today" onclick="select(${i}, ${month+1})">${i}</div>`;
        } else{
            dates.innerHTML += `<div class="calendar__date calendarItem" onclick="select(${i}, ${month+1})">${i}</div>`;
        }
    }
}

function getTotalDays(month){
    if(month === -1) month = 11;

    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        return 31;
    }else if(month == 3 || month == 5 || month == 8 || month == 10){
        return 30;
    }else{
        return isLeap() ? 29:28;
    }
}

function isLeap(){
    return((Año % 100 !== 0) && (Año % 4 === 0) ||(Año %400 === 0))
}

function startDay(){
    let Start = new Date(Año, numeroDeMes, 1)
    return ((Start.getDay()-1) === -1) ? 6 : Start.getDay()-1;
}

function lastMonth(){
    if(numeroDeMes !== 0){
        numeroDeMes--;
    }else{
        numeroDeMes = 11;
        Año--;
    }

    setNewDate();
}

function nextMonth(){
    if(numeroDeMes !== 11){
        numeroDeMes++;
    }else{
        numeroDeMes = 0;
        Año++;
    }

    setNewDate();
}

function setNewDate(){
    datos.setFullYear(Año,numeroDeMes,Dia);
    month.textContent = meses[numeroDeMes];
    year.textContent = Año.toString();

    dates.textContent = '';
    writeMonth(numeroDeMes);
}



/*MI PARTE*/
let enviarDias=[];
let primerNum="";
let ultimoNum="";
function select(num, mes){
    var elements = document.querySelectorAll('.calendar__date');

    elements.forEach(function(element) {
        if (element.contains(event.currentTarget)) {
            element.style.color = 'red';
        }
    });
// 3.000
    if(primerNum == ""){
        primerNum = num+" "+mes;
        enviarDias[0] = primerNum;
    }else{
        ultimoNum = num+" "+mes;
        enviarDias[1] = ultimoNum;
        alert ("comienza: "+primerNum+" finaliza: "+ultimoNum)
    }
}

/*enviar a email*/

/*document.addEventListener('DOMContentLoaded', function () {
    const enviar = document.getElementById("enviarForm");
    enviar.addEventListener('click', enviarDatos);
});
    let sumail = document.getElementById("sumail").value;*/

function enviar(){
  let primerDia = enviarDias[0];
  let ultimoDia = enviarDias[1];
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let consulta = document.getElementById("consulta").value;
  const obj={
    primerDia: primerDia,
    ultimoDia: ultimoDia,
    nombre: nombre,
    email: email,
    telefono: tel,
    consulta: consulta
  }
const mensaje = JSON.stringify(obj);
console.log("MENSAJE: "+mensaje)
localStorage.setItem('datosUsuario', mensaje);
window.location.href = "../recepsion/index.html";
}