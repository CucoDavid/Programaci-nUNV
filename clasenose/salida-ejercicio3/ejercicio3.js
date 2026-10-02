"use strict";
const producto = {
    nombre: "Cuaderno",
    precio: 2.50
};
function disponible(producto) {
    return producto.nombre + " Disponible";
}
console.log(disponible(producto));
