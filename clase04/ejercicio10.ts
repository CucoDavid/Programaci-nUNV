import promptSync from "prompt-sync"; 
const prompt = promptSync();
let colones: number = 8.75;
const dolares: number= Number(prompt("Ingresa la cantidad de dolares que deseas convertir"));
const result: number = dolares * colones;

console.log(`
    
    =====================================================================================
        La cantidad de dolares que ingresaste es: $${dolares}
        El valor utilizado para la conversion es:  ₡${colones} valor original del colon

        El resultado obtenido es de:  ₡${result}, colones convertidos a dolares
    ======================================================================================
    
    
    `)


