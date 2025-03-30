

    // ESTAS SON LAS SOLUCIONES, NO LAS COPIES, UTILIZA MIS SOLUCIONES PARA COMPARARLAS CON LAS TUYAS Y TRATAR DE OPTIMIZAR TU CODIGO UNA VEZ HAYAS RESUELTO TODOS LOS EJERCICIOS!!!



// EJERCICIO 1

function dividirPorTres(num) {
    /* Retornar el argumento num dividido por 3. */
    // Escribi tu codigo aca abajo

    return num / 3;
};


// EJERCICIO 2

function promedioEntreDos(num1, num2) {
    /* Retornar el promedio entre los dos argumentos (num1 y num2). */
    // Escribi tu codigo aca abajo:

    return (num1 + num2) / 2;
};


// EJERCICIO 3

function promedioEntreCuatro(num1, num2, num3, num4) {
    /* Retornar el promedio entre los 4 argumentos pasados por parametro */
    // Escribi tu codigo aca abajo:
    return (num1 + num2 + num3 + num4) / 4;
};

// EJERCICIO 4
function cuadradoDeUnNumero(num) {
    /* Retornar el cuadrado del número pasado por parámetro. */
    // NOTA: Podes googlear la formula para elevar un numero al cuadrado ;)

    // Escribi tu codigo aca abajo:
    return num * num;
}


//EJERCICIO 5
function sumaEntreDosNumeros(num1, num2) {
    /* Retornar la suma de todos los números enteros entre num1 y num2, incluyendo ambos. */
    // NOTA: Leer bien el enunciado, solo numeros enteros!!

    // Escribi tu codigo aca abajo:
    let suma = 0;
    for (let i = num1; i <= num2; i++) {
        suma += i;
    }
    return suma;
}



// EJERCICIO 6
function contarVocales(frase) {
    /* Retornar el número de vocales (a, e, i, o, u) en una cadena de texto. */
    // PISTA: Vas a tener que usar un for para recorrer el string, y un if analizar si un caracter es igual alguna una de las vocales...

    // Escribi tu codigo aca abajo:
    let contador = 0;
    string = frase.toLowerCase(); //Este metodo lo usamos para que todo el texto ahora sea en letra minuscula, ya que cuando comparamos con cada vocal, si el string pasado por parametro tiene algun caracter en mayuscula, no va a ser igual a la vocal en minuscula que comparamos en el if.

    for(let i = 0; i < string.length; i++) {
      if(string[i] == "a" || string[i] == "e" || string[i] == "i" ||
         string[i] == "o" || string[i] == "u") {
        contador++;
      }
    }

    return contador;
}


// EJERCICIO 7
function invertirCadena(cadena) {
    /* Retornar la cadena invertida. Por ejemplo, si la entrada es "Hola", la salida debe ser "aloH". */
    // NOTA: Vas a tener que googlear como invertir una string en javascript ;)

    // Escribi tu codigo aca abajo:
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;

}

// EJERCICIO 8

// Crear una función llamada fizzBuzz(max) que tome un número e imprima cada número desde 0 hasta el máximo (no incluido), que ademas sea divisible por 3 o 5, pero no por ambos.

// Escribi tu codigo aca abajo, a partir de ahora en los ejercicios las funciones las vas a tener que crear vos.

function fizzBuzz(max) {
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}


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
