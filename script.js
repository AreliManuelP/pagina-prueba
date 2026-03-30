// Abrir invitación
function abrirInvitacion(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

// Cuenta regresiva
const fechaEvento = new Date("Sep 24, 2026 00:00:00").getTime();

const contador = document.getElementById("contador");

setInterval(function(){
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    contador.innerHTML = `Faltan ${dias} días ${horas}h ${minutos}m`;

}, 1000);
