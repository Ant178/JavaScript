//Primera forma
/*let crearPersona=(nombre,edad,idioma)=>{
    return{
        nombre:nombre,
        edad:edad,
        idioma:idioma,
    };
};*/ 
//Segunda forma
let persona=(nombre,edad,idioma)=>({nombre,edad,idioma}) //Las llaves indican que queremos retornar un objeto

console.log(persona("Juan",28,"español"));
