//Asignar las propiedades de un objeto a variables
/*const usuario={
    nombre:"Gino Smith",
    edad:34
};
const{nombre,edad}=usuario;//Nombre de variables que quiero crear = objeto

let coordenadas={
    x:4,
    y:6,
    z:12
};

const {x,y,z}=coordenadas;
console.log(x,y,z);

//Objetos anidados
const usuario={
    johnDoe:{
        edad:27,
        correo: "johnDoe@gmail.com"
    }
};

const {johnDoe:{edad: edadUsr,correo: Correousr}}=usuario;
console.log(edadUsr,Correousr);

//Objetos anidados
const pron={
    "ayer":{
        minima:61,
        maxima:75
    },
    "hoy":{
        minima:64,
        maxima:74
    },
    "mañana":{
        minima:68,
        maxima:80
    }
};
const {hoy:{minima:minH,maxima:maxH}}=pron; //Objetos {}, anidado {valor:{}}
console.log(minH,maxH);

//Arreglos
let a,b;
[a,,,,b]=[1,2,3,2,1]; // saltar posiciones solo con espacios vacios
console.log(a,b);

//Operador rest
let a,b,arr;
[a,b,...arr]=[1,2,3,4,5,6,7];
console.log(a,b,arr);
const initialArray=[1,2,3,4,5,6,7,8];
function removeElem(array){
    const [, , ,...newArray]=array;
    return newArray;
}
const arrayfinal= removeElem(initialArray);
console.log(arrayfinal);

//Pasar Objeto como Argumento
let newCliente={
    nombre:"Jane",
    edad: 24,
    nacionalidad:"Mexicana",
    ubicacion: "Mexico"
};

let actualizarPerfil=({nombre,nacionalidad})=>{
    console.log(nombre,nacionalidad);
}
actualizarPerfil(newCliente);
*/
let estadisticas={
    max:56.78,
    desviacion:4.34,
    mediana:34.54,
    moda:27.83,
    min:-0.75,
    promedio:35.85
}
let mitad=({max,min})=>(max+min)/2.0;
console.log(mitad(estadisticas));