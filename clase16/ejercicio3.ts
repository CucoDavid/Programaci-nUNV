import promptSync from "prompt-sync";
const prom = promptSync();

function cadena(entero:number):number{
    if (entero === 0) {
        return 0;
    }

    return cadena(entero-1) + cadena(entero - 2);
}

const numero: number= parseInt(prom("Ingresa un numero entero positivo"));

let sumado: number = cadena(numero);
console.log(numero);
