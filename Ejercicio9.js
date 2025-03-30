// EJERCICIO 9

// Crear una función llamada imprimirEntreIntervalos(min, max, step) que tome 3 números como parámetros. La función debe imprimir números entre el mínimo y el máximo en intervalos de paso.
// Para que te guies, algo asi deberia de darte la consola:
// Ejemplo:
// imprimirEntreIntervalos(0,15,5) => va a imprimir en consola: 0, 5, 10, 15

// Tu codigo aca abajo:

function imprimirEntreIntervalos(min, max, step) {
    for (let i = min; i <= max; i += step) {
        console.log(i);
    }
}
imprimirEntreIntervalos(0,15,5)