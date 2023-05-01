//Metodos
/*let persona={
    nombre:"Juan", 
    presentarse(){ //Se pueden definir funciones dentro de los objetos
        return `Hola mi nombre es ${this.nombre}`;
    }
};
console.log(persona.presentarse());

//Clase
class TransbordadorEspacial{
    constructor(planeta){ //Funcion que se llama automaticamente (parametro)
        this.planeta=planeta;
    }
}
let zeus=new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);
let apolo= new TransbordadorEspacial("Marte");
console.log(apolo.planeta);
*/
class Mascota{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}

let miMascota= new Mascota("Popeye",1);
let tuMascota= new Mascota("Paloma",5);
console.log(miMascota,tuMascota);