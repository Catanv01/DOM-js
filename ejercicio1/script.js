
//  Ejercicio 1 - Seleccionar elementos del DOM

/** 1.1. Selecionar x id
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 */

let titulo = document.getElementById("titulo");
titulo.innerText = "¡Hola Mundo!" //cambia el texto del titulo desde el javascript
console.log(titulo);

//otra opción

let titulo2 = document.querySelector("#titulo")
console.log(titulo)



/** 1.2. Seleccionar x clase
 * 1. Seleccionar el div por su clase main-div 
 * 2. Mostrar su contenido en consola
 * 3. Mostrar su contenido en consola con innerHTML
 * 4. Mostrar su contenido en consola con innerText
 */

// let mainDiv = document.getElementsByClassName("main-div")[0]
// console.log(mainDiv)
// console.log(mainDiv.innerHTML); //muestra todo el contenido
// console.log(mainDiv.innerText); //muestra solo el texto

// //otra opción

// let mainDiv2 = document.querySelector(".main-div")
// console.log(mainDiv2)




// 1.3. Por etiqueta
/**
 * 1. Seleccionar el elemento por su etiqueta "img"
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de los atributos src y alt por consola
 */

// let img = document.getElementsByTagName("img")[0]
// console.log(img)

// //Sleccionar todas las img 

// let img2 = document.querySelectorAll("img")




// 1.4. Por querySelector
/**
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 * 3. Seleccionar el div por su clase main-div 
 * 4. Mostrar su contenido en consola
 * 5. Seleccionar el elemento por su etiqueta "img"
 * 6. Mostrar su contenido en consola
 * 7. Mostrar el contenido de los atributos src y alt por consola
 */


// //1.
// let titulo = document.querySelector("#titulo");
// console.log(titulo);

// //3.

// let mainDiv = document.querySelector(".main-div");
// console.log(mainDiv);

// //5.

// let img = document.querySelector("img");
// console.log(img);

// //7.
// console.log(img.src);
// console.log(img.alt);




