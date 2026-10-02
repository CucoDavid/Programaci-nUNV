function gestor<T>(arg:T[]):T | undefined{

    return arg[0] ;
}

let name = gestor<string>(["lola","lol","chancho"]);
let correlativo= gestor<number>([1,2,3]);

console.log(`Nombre ${name}, Numero correlativo ${correlativo}`);
