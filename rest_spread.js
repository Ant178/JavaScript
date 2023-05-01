// Operador rest
//Pasar cualquier numero de argumentos a una funcion
/*function myFunction(...args){ //Se utilizan tres puntos(...)
    console.log(args);
}
myFunction([1,2,3],[4,5,6]);
//myFunction(1,2,3,1,47,98,7,5);

const sumar=(...args)=>{
    return args.reduce((a,b)=>a+b,0); //Se pasa una funcion flecha como argumento
};
*/
// Operador spread -> Los descompone en sus elementos individuales
const numeros = [1,2,3];
function sumar(x,y,z){
    return x+y+z;
}
console.log(sumar(...numeros)); // Se usa la llamada a la funcion