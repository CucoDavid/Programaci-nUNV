import promptSync from "prompt-sync";
const prompt = promptSync();
const cliente = prompt("Ingrese el nombre del cliente: ");
const plato = prompt("Ingrese el nombre del plato:");
const precioPlato = Number(prompt("Ingrese el precio del plato:"));
const cantidad = Number(prompt("Ingrese la cantidad de platos que desea comprar:"));
const total = precioPlato * cantidad;
console.log(`
                ================================================================
                        Hola ${cliente} gracias por su compra.  
                        Nombre del plato: ${plato} - $${precioPlato}
                        Cantidad de platos: ${cantidad}
                        Total a pagar: $${total}
                ================================================================`);
