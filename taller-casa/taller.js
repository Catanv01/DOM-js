function generarColorHex(){
    let digitos = "0123456789ABCDEF"
    let colorHex = "#"
    for (let i = 0; i < 6; i++){
        let indice_aleatorio = Math.floor(Math.random() * 16)
        colorHex = colorHex + digitos.charAt(indice_aleatorio)
    }
    return colorHex
}

let color = document.getElementById("color")
let boton = document.getElementById("boton")

function cambiarColor(){
    let color_aleatorio = generarColorHex()
    document.body.style.backgroundColor = color_aleatorio
    color.innerText = color_aleatorio
}

boton.addEventListener("click", cambiarColor)