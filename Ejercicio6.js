// // EJERCICIO 6
// function contarVocales(frase) {
//     /* Retornar el número de vocales (a, e, i, o, u) en una cadena de texto. */
//     // PISTA: Vas a tener que usar un for para recorrer el string, y un if analizar si un caracter es igual alguna una de las vocales...

//     // Escribi tu codigo aca abajo:

// }
let frase = prompt("Ingrese una palabra","Hola")
let vocales = prompt("Ingrese una vocal (a, e, i, o, u)","a")
console.log(
    frase.indexOf(vocales) == -1
    ? `La vocal "${vocales}" no existe en la frase.`
    : `La vocal "${vocales}" existe en la frase.`
)
