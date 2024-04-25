


let btnFrontend = document.getElementById("btnFrontend")
let textoFrontend = document.getElementById("textoFrontend")

let btnFullstack = document.getElementById("btnFullstack")
let textofullStack = document.getElementById("textofullStack")

let btnBackend = document.getElementById("btnBackend")
let textoBackend = document.getElementById("textoBackend")




btnFrontend.addEventListener("click", mostrarTextoFrontend)

btnFullstack.addEventListener("click", mostrarTextoFullStack)

btnBackend.addEventListener("click", mostrarTextoBackend)


function mostrarTextoFrontend(){
    textoFrontend.classList.toggle('ver')
}
function mostrarTextoFullStack(){
    textofullStack.classList.toggle('ver')
}

function mostrarTextoBackend(){
    textoBackend.classList.toggle('ver')
}