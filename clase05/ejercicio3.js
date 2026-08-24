import promptSync from "prompt-sync";
const promp = promptSync();
const name = promp("Ingresa el Nombre del estudiante:");
const promedio = promp("Ingrese el promedio del estudiante");
const conversion = parseFloat(promedio);
const promedioredondo = Math.round(conversion);
console.log(`
    =========================================================
    El estudiante ${name}, tiene un promedio inicial de ${promedio},
    aproximando el promedio al numero mas sercano queda en ${promedioredondo}.

    `);
//# sourceMappingURL=ejercicio3.js.map