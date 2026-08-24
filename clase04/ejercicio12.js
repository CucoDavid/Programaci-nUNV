import PromptSync from "prompt-sync";
const prompt = PromptSync();
const pasajes = Number(prompt("Cuanto gastas en pasajes para ir a la universidad y regresar a casa."));
const clases = Number(prompt("Cuantos dias a la semana vas a clases"));
const gasto = pasajes * clases;
console.log(`
    ==================================================
    Vas ${clases} dias a clases, y cada dia gastas $${pasajes}

    mmmm Haciendo un pequeño calculo gastas $${gasto} por los dias que asistes a la universidad
    `);
