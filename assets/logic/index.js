const btnMenuDesplegable = document.getElementById("btnMenuDesplegable");
const btnCerrarMenuDesplegable = document.getElementById("btnCerrarMenuDesplegable");
const overlay = document.getElementById("overlay")

//Funcion para abrir menu desplegable en movil
function abrirMenuDesplegable(){

    overlay.style.display = "block"
    document.getElementById("opcionesMobile").style.display = "flex"

    document.getElementById("opcionesMobile").classList.add("entrada")
    document.querySelector(".divBtnCerrarMenu").classList.add("entrada")

    setTimeout(() => {
        
        document.getElementById("opcionesMobile").classList.remove("entrada")
        document.querySelector(".divBtnCerrarMenu").classList.remove("entrada")

    }, 500);

}

function cerrarMenuDesplegable(){

    overlay.style.display = "none"

    document.getElementById("opcionesMobile").classList.add("salida")
    document.querySelector(".divBtnCerrarMenu").classList.add("salida")

    setTimeout(() => {
        
        document.getElementById("opcionesMobile").classList.remove("salida")
        document.querySelector(".divBtnCerrarMenu").classList.remove("salida")
        document.getElementById("opcionesMobile").style.display = "none"

    }, 500);

}

btnMenuDesplegable.addEventListener("click", abrirMenuDesplegable)
overlay.addEventListener("click", cerrarMenuDesplegable)
btnCerrarMenuDesplegable.addEventListener("click", cerrarMenuDesplegable)

let btnOpcionesmobile = document.querySelectorAll(".btnsOpcionesMobile a")

btnOpcionesmobile.forEach((opcion) => {
    opcion.addEventListener("click", cerrarMenuDesplegable)
})

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});