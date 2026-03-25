// Abrir invitación
document.getElementById("openBtn").addEventListener("click", function(){
    document.getElementById("intro").style.opacity = "0";
    setTimeout(function(){
        document.getElementById("intro").style.display = "none";
        document.getElementById("card").style.display = "block";
    }, 800);

    document.getElementById("music").play();
});

// Cuenta regresiva
const eventDate = new Date("April 20, 2026 16:00:00").getTime();

setInterval(function() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        "⏳ Faltan " + days + " días " + hours + "h "
        + minutes + "m " + seconds + "s ";

}, 1000);

//
