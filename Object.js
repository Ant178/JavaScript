//Objetos en JS-> Se asigna el valor con : y se separa por ,(coma)
/*let miPerro={
    "nombre":"Popeye",
    "edad":1,
    "peso":35,
    "raza": "Bullterrie"
};
console.log(miPerro.raza);
let miCuaderno={
    "color":"verde",
    "categoria":3,
    "numero de paginas":200,
    "numero de hojas":100
};
console.log(miCuaderno["numero de hojas"]); //Con corchetes se puede acceder a valores de variables que tienen espacio

let result={
    1:"juan",
    2:"angel",
    3:"jesus",
    4:"miguel"
};
let posicion=4;
result[posicion];
console.log(result[posicion]); //Accediendo desde una variable 
// Para crear nuevas propiedades solo se asgina "variable.nueva_propieda= valor"
// Para borrar se utiliza la propiedad "delete objeto.propiedad"

function searchElement(symbol){
    let s={
        "Al":"Aluminio",
        "S":"Azufre",
        "Cl":"Cloro",
        "He":"Helio",
        "B":"Boro",
        "Li":"Litio"
    };
    return s[symbol];
}

console.log(searchElement("S"));
*/
//Verificar propiedades
var miCuaderno={
    "color":"verde",
    "categoria":3,
    "precio":5
}

console.log(miCuaderno.hasOwnProperty("color")); //Verificar si tiene la propiedad
console.log(miCuaderno.hasOwnProperty("tipo")); //Verificar si tiene la propiedad