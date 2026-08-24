import promptSync from "prompt-sync";
const promp = promptSync();

const name: string = promp("Ingresa el Nombre del estudiante:")
const promedio: string =    promp("Ingrese el promedio del estudiante");

const conversion:number = parseFloat(promedio);

const promedioredondo: number = Math.round(conversion);

console.log(`
    
    =========================================================
    El estudiante ${name}, tiene un promedio inicial de ${promedio},
    aproximando el promedio al numero mas sercano queda en ${promedioredondo}.

    `)