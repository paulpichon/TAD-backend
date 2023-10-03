//Schema Hacienda
const Hacienda = require("../models/hacienda");

//Obetener Haciendas
const haciendasGet = async(req, res) => {
    //respuesta
    res.json({
        msg:'GET HACIENDAS - CONTROLADORES'
    });
}
//Obtener Hacienda(por ID)
const haciendaGet = async(req, res) => {
    //respuesta
    res.json({
        msg:'GET HACIENDA POR ID - CONTROLADORES'
    });
}
//Crear un hacienda
const haciendasPost = async(req, res) => {
    //respuesta
    res.json({
        msg:'POST HACIENDAS - CONTROLADORES'
    });
}
//Actualizar una hacienda
const haciendasPut = async(req, res) => {
    //respuesta
    res.json({
        msg:'PUT HACIENDAS - CONTROLADORES'
    });
}
//Eliminar una hacienda
const haciendasDelete = async(req, res) => {
    //respuesta
    res.json({
        msg:' HACIENDAS - CONTROLADORES'
    });
}
//exports
module.exports = {
    haciendasGet,
    haciendaGet,
    haciendasPost,
    haciendasPut,
    haciendasDelete
}