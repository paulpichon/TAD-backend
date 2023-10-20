//Modelo Hacienda
const Hacienda = require("../models/hacienda");

//Obetener Haciendas
const haciendasGet = async(req, res) => {
    //obtener registro haciendas
    //Se muestran todos los registros
    const haciendas = await Hacienda.find();
    //respuesta
    res.json({
        haciendas
    });
}
//Obtener Hacienda(por ID)
const haciendaGet = async(req, res) => {
    //id params
    const { id } = req.params;
    //obtener hacienda por ID
    const hacienda = await Hacienda.findById( id );
    //respuesta
    res.json( hacienda );
}
//Crear un hacienda
const haciendasPost = async(req, res) => {
    //body
    //desestructuramos img para convertirlo a un string con JSON.stringify()
    const body = req.body;
    //crear la hacienda
    const hacienda = new Hacienda( body );
    //guardar la hacienda
    await hacienda.save();
    //respuesta
    res.json( hacienda );
}
//Actualizar una hacienda
const haciendasPut = async(req, res) => {
    //params
    //id
    const { id } = req.params;
    //body
    //desestructuramos img para poder convertirlo a un JSON
    const { img, ...resto } = req.body;
    //actualizar la Hacienda
    const hacienda = await Hacienda.findByIdAndUpdate( id, resto, {
        //respuesta actualizada
        new: true
    });

    //respuesta
    res.json( hacienda );
}
//Eliminar una hacienda
const haciendasDelete = async (req, res) => {
    //id params
    const { id } = req.params;
    //eliminar la hacienda
    const hacienda = await Hacienda.findByIdAndDelete( id );
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