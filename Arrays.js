// Con las dos lineas se hace un comentario en una linea
/* De esta forma se hacen comentarios en bloques
   hasta que cierra con el siguiente símbolo */ 

/*var palabra=false; //Inicializar
console.log(palabra); // Imprimirla en consola

let nombre="Juan";
let apellido="Feliciano";
let nomCompleto= "Juan " + "Feliciano";
console.log(nombre+" "+apellido);
console.log(nomCompleto);

//Longitud de una cadena -> variable.length
let r= "Primera cadena";
console.log(r.length);

//Corchetes en JavaScript -> []
let cadena= "JavaScript";
for(let i=0;i<cadena.length;i++)
    console.log(cadena[i]);

//Arrays -> tipo lista en JS
let array=['Hola mundo',25,64];
console.log(array[0]);
let students = ["Juan","Antonio","Brenda","Jesus"];
console.log(students[1]);

//Arrays anidados -> Poner corchetes en los corchetes xD
let lista=[["Juan",97],["Maria",84]];
console.log(lista[0]);
let precios= [["Camisa",10,1],["Playera",15,2],["Celular",250,3]];
console.log(precios[0][2]); //Se accede con dos corchetes

//Método push -> insertar cosas en un arreglo (al final)
let estacion=["Primavera","Verano","Otoño"];
console.log(estacion);
estacion.push("Invierno");
console.log(estacion);

//Metodo pop -> eliminar el top del array
let array=["Primavera","Verano","Otoño"];
console.log(array);
console.log(array.pop());
console.log(array);

//Metodo shift -> eliminar el primer elemento del array
let array=["Primavera","Verano","Otoño"];
let est=array.shift();
console.log(array);
console.log(est);
*/
//Metodo unshift -> agregar un elemento al principio del array
let array=["Primavera","Verano","Otoño"];
array.unshift("Invierno");
console.log(array);
