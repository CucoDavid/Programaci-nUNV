import promptSync from "prompt-sync";
const prompt = promptSync();

const numero:number = parseInt(prompt("Ingresa un numero entero"));
function comprobar(numero:number):boolean{
    return numero %2 === 0;
}

console.log(`El numero ${numero} es par: ${comprobar(numero)}`);