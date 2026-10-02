let array1: number[] = [1, 2, 3, 4, 5];

let array2: number[] = [6, 7, 8, 9, 10];
let array3: number[] = array2.concat(...array1).sort((a, b) => a - b);

console.log(array3);

//for each y map 

let numerospordos = array1.map((numero) => { return numero * 2 })
console.log(numerospordos);

let numerospares = array1.map((numero) => { if (numero % 2 == 0) { return "par" } else { "impar" } });
console.log(numerospares)