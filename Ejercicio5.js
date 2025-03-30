// //EJERCICIO 5
// function sumaEntreDosNumeros(num1, num2) {
//     /* Retornar la suma de todos los números enteros entre num1 y num2, incluyendo ambos. */
//     // NOTA: Leer bien el enunciado, solo numeros enteros!!
//     // Escribi tu codigo aca abajo:
// }
function sumaEntreDosNumeros(num1,num2){
    let sum = 0
    for (let i = num1; i <=num2; i++){
        sum += i
    }
    return sum
}
console.log(sumaEntreDosNumeros(5,10))