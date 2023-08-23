//Schema model de Historia
const Historia = require("../models/historia");
// Schema model de Señorio
const Senorio = require("../models/senorio");

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
// Validar el ID del senorio
const existeIdSenorio = async( id = '') => {
    // Buscar el ID en la BD
    const existeIdSenorio = await Senorio.findById( id );
    // Si no existe el ID
    if ( !existeIdSenorio ) {
        throw new Error(`El señorio con el ID: ${id} no existe en la BD`);
    }
}
//exports
module.exports = {
    validarIdHistoria,
    existeIdSenorio
}