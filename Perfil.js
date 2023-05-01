let contactos=[{
    "nombre":"Nora",
    "apellido":"Nav",
    "numero": "0543236543",
    "gustos":["Pizza","Programacion"]
},
{
    "nombre":"Harry",
    "apellido":"Potter",
    "numero": "0994372684",
    "gustos":["Hogwarts","Magia"]
},
{
    "nombre":"Sherlock",
    "apellido":"Holmes",
    "numero": "0487345643",
    "gustos":["Casos interesantes","Violín"]
}
]

function perfil(nombre,propiedad){
    for(let i=0;i<contactos.length;i++){
        if(contactos[i].nombre===nombre){
            return contactos[i][propiedad]||"La propiedad no existe";
        }
    }
    return "El contacto no esta en la lista";
}

let r= perfil("Harry","gustos");
console.log(r);