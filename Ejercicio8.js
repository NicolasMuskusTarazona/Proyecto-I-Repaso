// EJERCICIO 8

// Crear una función llamada fizzBuzz(max) que tome un número e imprima cada número desde 0 hasta el máximo (no incluido), que ademas sea divisible por 3 o 5, pero no por ambos.

// Escribi tu codigo aca abajo, a partir de ahora en los ejercicios las funciones las vas a tener que crear vos.
let max = 20
function fizzBuzz(max){
    for (let i = 0; i < max; i++) {
        if (i %3 || i %5){
            if(!(i %3 && i %5)){
                console.log("Numeros entre " + i)
            }
        }
    }
}
fizzBuzz(max)