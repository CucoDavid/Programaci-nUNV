function identidad<T>(valor: T): T {
    return valor;
}

const dui = identidad<string>("01234567-8");
const carnet = identidad<number>(2024001);
const solvencia = identidad<boolean>(true);

const textoInferido = identidad("UNIVO");
const numeroInferido = identidad(100);

console.log("DUI:", dui);
console.log("Carnet:", carnet);
console.log("Solvencia:", solvencia);