//Constante -> constant
//No se puede modificar el valor
/*const myConstant=35;
console.log(myConstant);
myConstant=12; //error 

function areacir(radio){
    const PI=3.14;
    if(radio<0){
        return undefined;
    }
    return PI*(radio**2);
}
console.log(areacir(10));
*/
//Inmutar objetos -> method freeze
let colores={
    "verde":1,
    "azul":2,
    "negro":3,
    "blanco":4
}
Object.freeze(colores);
colores.verde="4";
