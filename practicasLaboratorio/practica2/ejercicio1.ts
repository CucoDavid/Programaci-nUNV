import PromptSync from "prompt-sync";
const prompt = PromptSync();
function personajes(
    nombre:string,poder?:string,arma:string="arco"
):void{
    console.log(`persona: ${nombre} Poder:${poder ??"Sin poder"} arma: ${arma}`)
}

personajes("spiderman",undefined,"telaranas")