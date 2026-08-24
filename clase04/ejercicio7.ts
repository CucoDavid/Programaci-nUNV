import promptSync from "prompt-sync";
const prompt = promptSync();

const visitante: string = prompt("Ingrese el nombre completo del visitante: ");
const residencia: string = prompt("Ingrese el departamento de prosedencia: ");
const acompañante: number = Number(prompt("Ingrese la cantidad de acompañantes: "));


console.log(`
    ===============================================================================================================================
    Hola bievenido ${visitante} al parque nacionala ti y al grupo de personas que te acompaña, que son ${acompañante} personas.
    Nos complace tenerlos en nuestro parque esperemos que su visita desde ${residencia} sea de su agrado y 
    que disfruten de la naturaleza y de la fauna que tenemos en nuestro parque.
    ================================================================================================================================
    
    `)