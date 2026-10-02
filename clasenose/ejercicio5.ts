/* const preciosA: number[] = [2.50, 3.00, 4.00];

function aumentarPreciosA(precios: number[]): void {
    precios.forEach((precio, indice) => {
        precios[indice] = precio + 0.25;
    });
}

console.log("Antes A:", preciosA);

aumentarPreciosA(preciosA);

console.log("Después A:", preciosA); */



const preciosB: number[] = [2.50, 3.00, 4.00];

function aumentarPreciosB(precios: number[]): number[] {
    return precios.map((precio) => precio + 0.25);
}

console.log("Antes B:", preciosB);

const nuevosPrecios = aumentarPreciosB(preciosB);

console.log("Despues B:", nuevosPrecios);
