import PrompSync from "prompt-sync";
const prompt = PrompSync();


function facturaL(numero: number,
    precio: number,
    mensaje: string,
    descuento: number,
    subtotal: number,
    total: number): string {

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



const cliente: string = prompt("Ingrese el nombre del cliente:");

const numero: number = parseInt(prompt("Ingrese la cantidad de productos que desea pagar: "));
const precio: number = parseFloat(prompt("Ingrese el precio unitario: "));

const metodoPago: string = prompt("Ingrese el método de pago (efectivo, tarjeta, transferencia): ");

const mensaje = metodoPago.toLowerCase() === "efectivo" ? "Efectivo" : metodoPago.toLowerCase() === "tarjeta" ? "Tarjeta" : "Transferencia";

const option: string = prompt("Aplicaras descuento (s/n):");
let descuento: number = 0;
if (option.toLowerCase() === "s") {
    descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (0-100):"));
    descuento = descuento / 100;
} else {
    descuento = 0;
}

let subtotal: number = numero * precio;
let total: number = subtotal - (subtotal * descuento);

console.log(facturaL(numero, precio, mensaje, descuento * 100, subtotal, total));