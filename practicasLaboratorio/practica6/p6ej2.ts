let array: number[] = [5, 12, 8, 20, 7, 15, 30, 9];

//comprueba si el numero 20 existe dentro del array
function verificarNumero(numero: number, arreglo: number[]): void {
    if (array.includes(numero)) {
        console.log(`El numero ${numero}`);
    } else {
        console.log(`El numero ${numero} no esta en el arreglo`);
    }
}

verificarNumero(20, array);

//Determina la posicion en el que se encuentra el numero 15

function verificarPosicion(numero: number, arreglo: number[]): void {
    if (arreglo.indexOf(numero)) {
        console.log(`El numero no esta en el arreglo`);
    } else {
        console.log(`El numero ${numero} es en el indice ${arreglo.indexOf(numero)}`);
    }
}

verificarPosicion(155, array);


//Encuentre el primer numero mayor a 10

let primerMayor = array.find((numero) => { return numero > 10 });

console.log(primerMayor);

//obtenga todos los numeros mayores 10
let numerosMayor = array.filter((numero) => { return numero > 10 });

console.log(numerosMayor);