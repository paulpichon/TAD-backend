//Schema model de Historia
const Historia = require("../models/historia")

//Funcion para validar que el ID de la Historia exista en la BD
const validarIdHistoria = async( id = '') => {
    //buscar ID en la BD
    const existeIdHistoria = await Historia.findById(id);
    //si no existe el ID mostramos un mensaje
    if ( !existeIdHistoria ) {
        //Mensaje
        throw new Error(`La historia con el ID: ${ id } no existe en la BD`);
    }
}
//exports
module.exports = {
    validarIdHistoria
}