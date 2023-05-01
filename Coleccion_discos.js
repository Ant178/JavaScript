let coleccionDisco={
    7853:{
        tituloAlbum:"Bee Gees Greatest",
        artista:"Bee Gees",
        canciones: ["Stayin Alive"]
    },
    5439:{
        tituloAlbum:"ABBA Gold"
    }
};

function updateDiscos(discos,id,propiedad,valor){
    if(valor==""){
        delete discos[id][propiedad];
    }else if (propiedad==="canciones"){
        discos[id][propiedad]=discos[id][propiedad]||[];
        discos[id][propiedad].push(valor);
    }else{
        discos[id][propiedad]=valor;
    }
}
console.log(coleccionDisco[5439].canciones);
updateDiscos(coleccionDisco,5439,"canciones","Mamma mia");
console.log(coleccionDisco[5439].canciones);