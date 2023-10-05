//Schema model de Historia
const Historia = require("../models/historia");
//Schema model de Señorio
const Senorio = require("../models/senorio");
//Schema model guerrero
const Guerrero = require("../models/guerrero");
//Modelo Hacienda
const Hacienda = require("../models/hacienda");

//Funcion para validar que el ID de la Historia exista en la BD
const validarIdHistoria = async( id = '') => {
    //Buscar ID en la BD
    const existeIdHistoria = await Historia.findById(id);
    //si no existe el ID mostramos un mensaje
    if ( !existeIdHistoria ) {
        //Mensaje
        throw new Error(`La historia con el ID: ${ id } no existe en la BD`);
    }
}
//Funcion para validar el ID del señorio
const validarIdSenorio = async( id = '' ) => {
    //Buscar el ID en la BD
    const existeIdSenorio = await Senorio.findById( id );
    //Si no existe el ID mostrar una alerta
    if ( !existeIdSenorio ) {
        //Mensaje
        throw new Error(`El señorio con ID: ${ id } no existe en la BD`);
    }
}
//Funcion para validar el ID del guerrero
const validarIdGuerrero = async( id = '' ) => {
    //buscar ID en la BD
    const existeIdGuerrero = await Guerrero.findById( id );
    //Si no existe el ID mostrar alerta
    if ( !existeIdGuerrero ) {
        throw new Error(`El guerrero con ID: ${ id } no existe en la BD`);
    }
}
//Funcion para validar el ID de la Hacienda
const validarIdHacienda = async ( id = '') => {
    //buscar Hacienda por ID
    const existeIdHacienda = await Hacienda.findById( id );
    //si no existe el ID mostramos una alerta
    if ( !existeIdHacienda ) {
        throw new Error(`La hacienda con ID: ${ id } no existe`);
    }
}
//exports
module.exports = {
    validarIdHistoria,
    validarIdSenorio,
    validarIdGuerrero,
    validarIdHacienda
}