//Getters -> Metodos que permiten obtener valor de una propiedad privada
//Setters -> Actualizar el valor 
class Libro{
    constructor(autor){
        this._autor=autor; //El guion bajo dice que no se deberia cambiar el valor (desarrolladores)       
    }
    get autor(){ //Esta protegido el autor
        //console.log("Getter");
        return this._autor;
    }
    set autor(nuevoAutor){
        console.log("Setter");
        this._autor=nuevoAutor;
    }
}

let libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor="Juan Antonio";
console.log(libro.autor);
