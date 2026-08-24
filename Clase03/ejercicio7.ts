const desc: number = 0.12;
const tpago: string ="tarjeta";
const resD:boolean = tpago === "tarjeta" ? true : false;
const monto:number = 60;

/*const aplica: string = !resD ? "Aplica descuento de: " + (monto * desc).toFixed(2) : "No aplica descuento";*/
const aplica: string = resD === true && monto >= 50 ? "Aplica descuento de:" + (monto- (monto * desc)).toFixed(2) : "No aplica descuento";
const pagar: string = (monto-(monto * desc)).toFixed(2) ;

console.log("El descuento aplicado es del "+" "+ (desc *100).toFixed(0) + "%, el monto de la transaccion es de: " + monto.toFixed(2) + " " + aplica);
console.log("El monto a pagar es de: " + pagar);