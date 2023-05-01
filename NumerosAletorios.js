/*function num(lim_sup){
    //Numero aleatorio entre 0 y lim_sup
    return Math.floor(Math.random()*lim_sup);
}
let r=16;
for(let i=0;i<5;i++)
console.log(num(r));

//Limite superior y limite inferior
function rango(lim_sup,lim_inf){
    return Math.floor(Math.random()*(lim_sup-lim_inf+1)+lim_inf);
}
for(let i=0;i<10;i++)
console.log(rango(8,3));

//Operador ternario
function min(x,y){
    return x<y ? x: y; 
}
console.log(min(89,15));
*/
function comp(a,b){
    return a==b ? "a y b son iguales" 
           : a>b ? "a es mayor que b"
           : "b es mayor que a";
}
console.log(comp(7,8));