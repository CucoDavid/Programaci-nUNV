function invertirArreglo<T>(arreglo: T[]): T[] {
    return [...arreglo].reverse();
}

const codigosDespacho: string[] = ["DESP-001", "DESP-002", "DESP-003"];
const montosFactura: number[] = [25.50, 100.00, 12.25];

const codigosInvertidos = invertirArreglo(codigosDespacho);
const montosInvertidos = invertirArreglo(montosFactura);

console.log("Códigos originales:", codigosDespacho);
console.log("Códigos invertidos:", codigosInvertidos);

console.log("Montos originales:", montosFactura);
console.log("Montos invertidos:", montosInvertidos);