import promptSync from "prompt-sync";
const prompt = promptSync();
const name: string = prompt("Ingrese su nombre: ");

const option: string = prompt(`
    Que tipo de cliente es usted, ${name}?
    1. Cliente regular
    2.Estudiante
    3.Docente
    `);

let tipocliente: string = "";
let cantidaadPr = 0;
let descuento = 0;
let entrada: string = "";
let precio: number = 0;
let totalSinds: number = 0;
let total: number = 0;
let productoname: string = "";
let productos: string = "";

switch (option) {
    case "1":
        tipocliente = "Regular"
        while (entrada !== "fin") {
            productoname = prompt("Ingrese el nombre del producto: ");
            precio = parseFloat(prompt("Ingrese el precio del producto: "));
            totalSinds += precio;
            entrada = prompt(" escriba 'fin' para terminar: ").toLowerCase();
            cantidaadPr++;
            productos += `${productoname} -> precio unitario: $${precio.toFixed(2)}\n`;
        }
        descuento = totalSinds * 0.0;
        total = totalSinds - descuento;

        console.log(`
            ==========Factura=============
            Cliente: ${name}
            tipo de cliente:${tipocliente}
            ===============================
            -----------Productos-----------
                    ${productos}

            Cantidad de productos: ${cantidaadPr}
            ------------------------------------
            Descuento aplicado: $${descuento}
            Total Sin Descuento: $${totalSinds}
            Total a pagar: $${total.toFixed(2)}`);
        break;
    case "2":
        tipocliente = "Estudiante"
        while (entrada !== "fin") {
            productoname = prompt("Ingrese el nombre del producto: ");
            precio = parseFloat(prompt("Ingrese el precio del producto: "));
            totalSinds += precio;
            entrada = prompt(" escriba 'fin' para terminar: ").toLowerCase();
            cantidaadPr++;
            productos += `${productoname} -> precio unitario: $${precio.toFixed(2)}\n`;
        }
        descuento = totalSinds * 0.5;
        total = totalSinds - descuento;

        console.log(`
            ==========Factura=============
            Cliente: ${name}
            tipo de cliente:${tipocliente}
            ===============================
            -----------Productos-----------
                    ${productos}

            Cantidad de productos: ${cantidaadPr}
            ------------------------------------
            Descuento aplicado: $${descuento}
            Total Sin Descuento: $${totalSinds}
            Total a pagar: $${total.toFixed(2)}`);
        break;

    case "3":
        tipocliente = "Docente"
        while (entrada !== "fin") {
            productoname = prompt("Ingrese el nombre del producto: ");
            precio = parseFloat(prompt("Ingrese el precio del producto: "));
            totalSinds += precio;
            entrada = prompt(" escriba 'fin' para terminar: ").toLowerCase();
            cantidaadPr++;
            productos += `${productoname} -> precio unitario: $${precio.toFixed(2)}\n`;
        }
        descuento = totalSinds * 0.10;
        total = totalSinds - descuento;

        console.log(`
            ==========Factura=============
            Cliente: ${name}
            tipo de cliente:${tipocliente}
            ===============================
            -----------Productos-----------
                    ${productos}

            Cantidad de productos: ${cantidaadPr}
            ------------------------------------
            Descuento aplicado: $${descuento.toFixed(2)}
            Total Sin Descuento: $${totalSinds.toFixed(2)}
            Total a pagar: $${total.toFixed(2)}`);
        break;
    default:
        console.log("Opción no válida");
        break;
}