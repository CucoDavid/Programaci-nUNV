import promptSync from "prompt-sync";
const prompt = promptSync();

const cliente: string = prompt("Ingrese el nombre del cliente:");

const producto:string= prompt("Ingrese el nombre del producto:");
const cantidad: number = Number(prompt("Ingrese la cantidad que consumiste:"));
const precio: number = Number(prompt("Ingrese el precio del producto:"));

const total: number = cantidad * precio;

console.log(`================================================================`);
console.log(`Gracias por su compra ${cliente}`);
console.log(`Producto: ${producto}`);
console.log(`Cantidad consumida: ${cantidad}`);
console.log(`Precio unitario: $${precio}`);
console.log(`Total a pagar: $${total}`);
console.log(`================================================================`);