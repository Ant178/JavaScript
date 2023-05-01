//Funcion flecha/anonima
/*const fecha= ()=> new Date();
console.log(fecha);

//Funcion anonima con parametros
const sumarTres= (x)=> x+3;
console.log(sumarTres(4));

//Concatenar
const cont = (arr1,arr2)=>arr1.concat(arr2);

console.log(cont([1,2],[3,4]));

//Concatenar -> mas codigo
const sumar = (a,b)=>{
    let num = 6;
    return a+b+num;
};
console.log(sumar(9,8));
//Para convertir a funciones flecha solo se quita "function"
//Se agrega "=>" despues de los parametros
*/
const incrementar = (num,valor=1)=>num+valor; //Omitir argumento
console.log(incrementar(5,3));