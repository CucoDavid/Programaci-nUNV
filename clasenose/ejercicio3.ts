const producto = {
    nombre: "Cuaderno",
    precio: 2.50
}

function disponible(producto: { nombre: string; precio: number }): string {
    return producto.nombre + " Disponible";

}

console.log(disponible(producto));
