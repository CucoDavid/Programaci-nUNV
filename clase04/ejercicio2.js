import promptSync from "prompt-sync";
const prompt = promptSync();
const nombreProducto1 = prompt("Ingrese el nombre del producto1:");
const precioProducto1 = Number(prompt("Ingrese el precio del producto1:"));
const nombreProducto2 = prompt("Ingrese el nombre del producto2:");
const precioProducto2 = Number(prompt("Ingrese el precio del producto2:"));
const nombreProducto3 = prompt("Ingrese el nombre del producto3:");
const precioProducto3 = Number(prompt("Ingrese el precio del producto3:"));
const total = precioProducto1 + precioProducto2 + precioProducto3;
console.log(`  
                ================================================================
                        Resumen de la compra
                ================================================================
                        producto1: ${nombreProducto1} -$ ${precioProducto1}
                        producto2: ${nombreProducto2} - $${precioProducto2}
                        producto3: ${nombreProducto3} - $${precioProducto3}
    
                        precio total de los productos: $${total}
    
                ================================================================
    
    `);
