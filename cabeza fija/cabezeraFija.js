click = document.getElementById('click')
ver = document.getElementById('ver')

click.addEventListener("click", mostrarMenu)

function mostrarMenu(){
    ver.classList.toggle('ver')
}
