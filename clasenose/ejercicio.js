let precio = 40;
function duplicado(precio) {
    let duplicado = 0;
    return duplicado = precio * 2;
}
//Que fue lo que hice pues basicamente tome el precio original lo mande a la funcion duplicado y lo multiplique por 2 para obtener el precio duplicado, luego lo retorne y lo imprimi en consola.
//lo que paso fue que el precio original no cambia por que a la funcion mando una copia del precio original y no el precio original en si, por lo tanto el precio original sigue siendo el mismo y el precio duplicado es el que se multiplico por 2.
console.log(`Precio original: $${precio}`);
console.log(`Precio duplicado: $${duplicado(precio)}`);
export {};
//# sourceMappingURL=ejercicio.js.map