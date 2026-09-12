import PromptSync from "prompt-sync";

const prompt = PromptSync();

// Obtener precio del arreglo
function obtenerPrecioArreglo(codigo: number): number {
    if (codigo === 1) {
        return 25;
    } else if (codigo === 2) {
        return 45;
    } else if (codigo === 3) {
        return 80;
    } else {
        return 0;
    }
}

// Obtener nombre del arreglo
const obtenerNombreArreglo = (codigo: number): string => {
    if (codigo === 1) {
        return "Arreglo básico";
    } else if (codigo === 2) {
        return "Arreglo temático";
    } else if (codigo === 3) {
        return "Arco de globos";
    } else {
        return "Código inválido";
    }
};

// Validar cantidad
function esCantidadValida(cantidad: number): boolean {
    return Number.isInteger(cantidad) && cantidad > 0;
}

// Calcular subtotal
function calcularSubtotal(precio: number, cantidad: number): number {
    return precio * cantidad;
}

// Calcular descuento
function calcularDescuento(subtotal: number, porcentaje: number = 0): number {

    if (porcentaje < 0 || porcentaje > 25) {
        porcentaje = 0;
    }

    return subtotal * (porcentaje / 100);
}

// Calcular entrega
function calcularEntrega(entrega: boolean, departamento?: string): number {

    if (!entrega) {
        return 0;
    }

    if (departamento === "san miguel") {
        return 3;
    } else if (departamento === "la unión") {
        return 5;
    } else if (departamento === "usulután") {
        return 6;
    } else {
        return 8;
    }
}

// Calcular total
function calcularTotal(
    subtotal: number,
    descuento: number,
    entrega: number
): number {
    return subtotal - descuento + entrega;
}

// Mostrar factura
function mostrarFactura(
    nombre: string,
    arreglo: string,
    cantidad: number,
    precio: number,
    subtotal: number,
    descuento: number,
    entrega: number,
    total: number
): void {


    console.log(`
        ========== FACTURA ========== 
        | Cliente: ${nombre} 
        | Arreglo: ${arreglo} 
        | Cantidad: ${cantidad} 
        | Precio unitario: $${precio.toFixed(2)} 
        | Subtotal: $${subtotal.toFixed(2)} 
        | Descuento: $${descuento.toFixed(2)} 
        | Costo de entrega: $${entrega.toFixed(2)} 
        | TOTAL A PAGAR: $${total.toFixed(2)} 
        | ===========================
        `);

}


// ============================
// PROGRAMA PRINCIPAL
// ============================

let nombre: string;

do {
    nombre = prompt("Ingrese el nombre del cliente: ");

    if (nombre === "" || !isNaN(Number(nombre))) {
        console.log("Ingrese un nombre válido.");
    }

} while (nombre === "" || !isNaN(Number(nombre)));

// Validar código

console.log(`
    
    ===== TIPOS DE ARREGLO =====
    
    codigo:| Descripcion:    | precio:
        1  |Arreglo básico   | $25.00
        2  |Arreglo temático | $45.00
        3  |Arco de globos   | $80.00
    `);

let codigo: number;

do {
    codigo = Number(prompt("Ingrese el código del arreglo: "));

    if (codigo < 1 || codigo > 3) {
        console.log("Código inválido.");
    }

} while (codigo < 1 || codigo > 3);

// Validar cantidad
let cantidad: number;

do {
    cantidad = Number(prompt("Ingrese la cantidad de arreglos: "));

    if (!esCantidadValida(cantidad)) {
        console.log("Cantidad inválida. Debe ser un entero mayor que cero.");
    }

} while (!esCantidadValida(cantidad));


// Validar descuento
let porcentaje: number;

do {
    porcentaje = Number(
        prompt("Ingrese el porcentaje de descuento (0-25): ")
    );

    if (porcentaje < 0 || porcentaje > 25) {
        console.log("Descuento inválido. Debe estar entre 0 y 25.");
    }

} while (porcentaje < 0 || porcentaje > 25);


// Preguntar por entrega
let respuestaEntrega: string;

do {
    respuestaEntrega = prompt(
        "¿Necesita entrega a domicilio? (si/no): "
    ).toLowerCase();

    if (respuestaEntrega !== "si" && respuestaEntrega !== "no") {
        console.log("Respuesta inválida. Escriba si o no.");
    }

} while (respuestaEntrega !== "si" && respuestaEntrega !== "no");


const necesitaEntrega: boolean = respuestaEntrega === "si";


// Departamento
let departamento: string | undefined;

if (necesitaEntrega) {

    departamento = prompt(
        `
        Escoge el departamento de entrega, ingrese el nombre del departamento:
        codigo:| Departamento:|Precio:
        1.     |San Miguel    |$3.00
        2.     |La Unión      |$5.00
        3.     |Usulután      |$6.00
        4.     |Otro          |$8.00
        5.     |Ninguno       |$0.00
        `
    ).toLowerCase();
}


// Procesos
const precio: number = obtenerPrecioArreglo(codigo);

const arreglo: string = obtenerNombreArreglo(codigo);

const subtotal: number = calcularSubtotal(
    precio,
    cantidad
);

const descuento: number = calcularDescuento(
    subtotal,
    porcentaje
);

const costoEntrega: number = calcularEntrega(
    necesitaEntrega,
    departamento
);

const total: number = calcularTotal(
    subtotal,
    descuento,
    costoEntrega
);


// Mostrar factura
mostrarFactura(
    nombre,
    arreglo,
    cantidad,
    precio,
    subtotal,
    descuento,
    costoEntrega,
    total
);