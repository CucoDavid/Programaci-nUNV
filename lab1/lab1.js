import promptSync from "prompt-sync";
const prompt = promptSync();
let total = 0;
let descuento = 0;
let subtotal = 0;
let descuentoAplicado = 0;
const name = prompt("Ingresa tu nombre completo:").trim();
if (name === "" || name === null) {
    console.log("El nombre no puede estar vacio");
}
const nameproductos = prompt("Ingresa el nombre del producto:").trim().toLowerCase();
if (nameproductos === "" || nameproductos === null) {
    console.log("El nombre del producto no puede estar vacío");
}
const precioUnitario = parseFloat(prompt("Ingresa el precio unitario del producto:"));
if (isNaN(precioUnitario) || precioUnitario <= 0) {
    console.log("El precio unitario debe ser un número mayor a 0");
}
const cantidad = parseFloat(prompt("Ingresa la cantidad del producto:"));
if (isNaN(cantidad) || cantidad <= 0) {
    console.log("La cantidad debe ser un número mayor a 0");
}
const tipodecliente = prompt("Ingresa el tipo de cliente (a, b, c):").toUpperCase();
//Comienza validacion de los clientes y calculo de los descuentos
if (tipodecliente === "A") {
    //aca hago lo de calcular el precio de los productos antes de los descuentos
    descuentoAplicado = 0.10 * 100;
    subtotal = precioUnitario * cantidad;
    descuento = subtotal * 0.10;
    total = subtotal - descuento;
}
else if (tipodecliente === "B") {
    //aca hago lo de calcular el precio de los productos antes de los descuentos
    descuentoAplicado = 0.5 * 100;
    subtotal = precioUnitario * cantidad;
    descuento = subtotal * 0.15;
    total = subtotal - descuento;
}
else if (tipodecliente === "C") {
    //aca hago lo de calcular el precio de los productos antes de los descuentos
    descuentoAplicado = 0.0 * 100;
    subtotal = precioUnitario * cantidad;
    descuento = subtotal * 0.0;
    total = subtotal - descuento;
}
else {
    console.log("El tipo de cliente ingresado no es valido. Por favor ingrese a, b o c.");
}
console.log(`
    
    ========================================
        SISTEMA DE CÁLCULO DE VENTA
    ========================================
    Nombre del cliente: ${name}
    Nombre del producto: ${nameproductos}
    precio unitario: $${precioUnitario.toFixed(2)}
    cantidad: ${cantidad}
    Tipo de cliente: ${tipodecliente}

    
    ----------Comprobante de venta-----------
    Cliente: ${name}
    Producto: ${nameproductos}
    Precio unitario: $${precioUnitario.toFixed(2)}
    cantidad: ${cantidad}
    tipo de cliente: ${tipodecliente}
    Subtotal: $${subtotal.toFixed(2)}
    Descuento aplicado: ${descuentoAplicado}%
    Cantidad descontada: $${descuento.toFixed(2)}
    Total a pagar: $${total.toFixed(2)}
    ------------------------------------------
    `);
