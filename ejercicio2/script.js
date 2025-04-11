
// Ejercicio2: Cambiar los Atributos de los elementos del DOM

// 2.1 Seleccionar elemento del DOM
/** 
 * 1. Seleccionar el elemento h1 con querySelector
 * 2. Cambiar el titulo por "Hola Mundo"
 * 3. Ver el efecto en el navegador
 */

// let titulo = document.querySelector("h1")
// titulo.innerText = "¡Hola Mundo!"
// console.log(titulo)


// 2.2 Cambiar el atributo src de la imagen
/**
 * 1. Seleccionar la imagen con querySelector
 * 2. Cambiar su atributo src por "imagen/carita.png"
 * 3. Ver el efecto en el navegador
 */

// let img = document.querySelector("img")
// img.src = "imagen/carita.png"
// console.log(img)



// 2.3 Cambiar la clase del div
/**
 * 1. Seleccionar el div main-div con querySelector
 * 2. Cambiar su clase por "new-div"
 * 3. Ver el efecto en el navegador
 */

// let div = document.querySelector(".main-div");
// console.log(div)
// div.className = "new-div";

 

// 2.4 Cambiar el atributo href del enlace
/**
 * 1. Seleccionar el enlace con querySelector usando su id
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de su atributo href por consola con getAttribute
 * 2. Cambiar su atributo href por "https://www.icesi.edu.co"
 * 3. Cambiar su texto por "Universidad Icesi"
 * 4. Cambiar su atributo target por "_blank"
 * 5. Cambiar su clase por "boton"
 * 6. Ver el efecto en el navegador
 * 7. Eliminar la clase del enlace
 * 8. Ver el efecto en el navegador
 */

// let enlace = document.querySelector("#enlace");
// console.log(enlace.getAttribute("href")); //obtenerlo
// enlace.setAttribute("href","https://www.icesi.edu.co"); //cambiarlo
// enlace.innerText = "Ir a Universidad ICESI" //cambiar texto
// enlace.setAttribute("target","_blak"); //enlace se abre en una pestaña diferente
// enlace.setAttribute("class","boton"); //dar una clase
// enlace.removeAttribute("class"); // Quitar la clase anterior

// console.log(enlace);




// 2.5 Cambiar el estilo del div
/**
 * 1. Seleccionar el div con querySelector
 * 2. Cambiar su estilo por:
 *    - background-color: green
 *    - color: white
 *    - font-size: 30px
 *    - font-family: Arial
 *    - text-align: center
 *    - padding: 20px
 *    - border-radius: 10px
 * 3. Ver el efecto en el navegador
 */

// let div = document.querySelector(".main-div");
// div.style.backgroundColor = "green" //cambiar el fondo del elemento
// div.style.color = "white"
// div.style.fontSize = "30px"
// div.style.textAlign = "center"
// div.style.padding = "20px"
// div.style.borderRadius = "30px"
// console.log(div)



