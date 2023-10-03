//controladores
//Schema Hacienda
const Hacienda = require("../models/hacienda");

//Obetener Haciendas
const haciendasGet = async(req, res) => {
    //Traer los registros
    const haciendas = await Hacienda.find();
    //Mostrar la cantidad de haciendas (total)
    const total = await Hacienda.countDocuments();
    //respuesta
    res.json({
        total,
        haciendas
    });
}
//Obtener Hacienda(por ID)
const haciendaGet = async(req, res) => {
    //Traer un solo guerrero por Id
    const { id } = req.params;
    //Buscar el Guerrero
    const hacienda = await Hacienda.findById( id );
    //respuesta
    res.json( hacienda );
}
//Crear un guerrero
const haciendasPost = async(req, res) => {
    //body
    const body = req.body;
    //Crear el registro
    const hacienda = new Hacienda( body );
    //Guardarlo en la BD
    await hacienda.save();
    //respuesta
    res.json( hacienda );
}
//Actualizar un Guerrero
const haciendasPut = async(req, res) => {
    //Id
    const { id } = req.params;
    //body, quitamos el _id para que no pueda ser modificado en el BODY
    const {_id, ...resto} = req.body;
    //Actualizar el registro
    const hacienda = await Hacienda.findByIdAndUpdate( id, resto, {
        new: true
    });
    //respuesta
    res.json( hacienda );
    
}
//Eliminar un Guerrero
const haciendasDelete = async(req, res) => {
    //id
    const { id } = req.params;
    //Eliminar registro
    const hacienda = await Hacienda.findByIdAndDelete( id, {
        new: true
    });
    //respuesta
    res.json({
        status: 200,
        msg: 'Hacienda Eliminada',
        hacienda
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