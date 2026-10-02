import promptSync from "prompt-sync";
const prompt = promptSync();
function paquetes(entero) {
    //vaya mi funcion evalua que pues si hay un numero igual a 1 o 0 entonces pues aplique su factorial
    if (entero === 0 || entero === 1) {
        return 1;
    }
    return entero * paquetes(entero - 1);
}
const paquete = parseInt(prompt("Ingresa un numero entero positivo"));
if (!Number.isInteger(paquete) || paquete < 0) {
    console.log("Tenes que ingresar un numero entero positivo para poder continuar");
}
else {
    const factor = paquetes(paquete);
    console.log(`El factorial de ${paquete}, es ${factor}`);
}
//# sourceMappingURL=ejercicio1.js.map