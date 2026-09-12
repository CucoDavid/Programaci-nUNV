"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function resgistrarProductos(nombre, precio, categoria, monedas = "USD") {
    console.log(`
productos: ${nombre} | precio: $${precio} | categoria: ${categoria ?? "sin categoria"}| moneda: $${monedas} 
`);
}
let numeroProductos = Number(prompt("Ingrese el numeros de productos"));
for (let i = 1; i <= numeroProductos; i + 1) {
    let nombre = prompt("Ingresa el nombre del producto" + i);
    let precio = prompt("Ingrese el precio del producto" + i);
    let categoria = prompt("Ingrese la categoria del producto" + i);
    let moneda = prompt("Ingresa la moneda" + i);
    resgistrarProductos(nombre, precio, categoria, moneda);
}
