import promptSync from "prompt-sync";
const prompt = promptSync();
const peso: number = parseFloat(prompt("Ingrese su peso en kilogramos: "));
const altura: number = parseFloat(prompt("Ingrese su altura en metros: "));

const imc: number = peso / (altura ** 2);
if (imc <18.5){
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es bajo`);

} else if (imc >= 18.5 && imc <= 25.0 ) {
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es normal`);
} else if (imc > 25.0 && imc >= 30.0) {
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es alto`);
}else{
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es obesidad`);
}