"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function facturaL(numero, precio, mensaje, descuento, subtotal, total) {
    return `    
                ++++++++++++++++Factura++++++++++++++
                
                cliente: ${cliente}
                Cantidad de productos: ${numero}
                Precio Unitario:${precio}
                método de pago: ${mensaje}
                descuento: ${descuento}%
                subtotal: $${subtotal}
                total: $${total} 
                
                ++++++++++++++++++++++++++++++++++++++++++++++++`;
}
const cliente = prompt("Ingrese el nombre del cliente:");
const numero = parseInt(prompt("Ingrese la cantidad de productos que desea pagar: "));
const precio = parseFloat(prompt("Ingrese el precio unitario: "));
const metodoPago = prompt("Ingrese el método de pago (efectivo, tarjeta, transferencia): ");
const mensaje = metodoPago.toLowerCase() === "efectivo" ? "Efectivo" : metodoPago.toLowerCase() === "tarjeta" ? "Tarjeta" : "Transferencia";
const option = prompt("Aplicaras descuento (s/n):");
let descuento = 0;
if (option.toLowerCase() === "s") {
    descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (0-100):"));
    descuento = descuento / 100;
}
else {
    descuento = 0;
}
let subtotal = numero * precio;
let total = subtotal - (subtotal * descuento);
console.log(facturaL(numero, precio, mensaje, descuento * 100, subtotal, total));
