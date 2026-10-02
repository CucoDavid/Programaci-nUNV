import promptSync from "prompt-sync";
const prom = promptSync();
function cadena(entero) {
    if (entero === 0) {
        return 0;
    }
    return cadena(entero - 1) + cadena(entero - 2);
}
const numero = parseInt(prom("Ingresa un numero entero positivo"));
let sumado = cadena(numero);
console.log(numero);
//# sourceMappingURL=ejercicio3.js.map