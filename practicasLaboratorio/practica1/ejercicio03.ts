import PromptSync from "prompt-sync";
const prompt = PromptSync();

const name:string = prompt("Ingrese su nombre: ");
const option:string = prompt(`
    ingrese una opción sobre su cargo laboral:
    1.Contador
    2.Tecnico
    3.Mecanico
    4.Desarrollador
    `);


    function cargoLaboral(option:string):string{
        switch(option){
            case "1":
                return `Hola ${name}, su cargo laboral es Contador`;
            case "2":
                return `Hola ${name}, su cargo laboral es Tecnico`;
            case "3":
                return `Hola ${name}, su cargo laboral es Mecanico`;
            case "4":
                return `Hola ${name}, su cargo laboral es Desarrollador`;
            default:
                return `Hola ${name}, opción no válida`;
        }
    }

    console.log(cargoLaboral(option));