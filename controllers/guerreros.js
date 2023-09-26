//controladores
//Schema guerrero
const Guerrero = require("../models/guerrero");

const guerrerosGet = async(req, res) => {
    //respuesta
    res.json({
        msg: 'GET GUERREROS - CONTROLADOR'
    });
}
const guerreroGet = async(req, res) => {
    //respuesta
    res.json({
        msg: 'GET GUERRERO - CONTROLADOR'
    });
}
const guerrerosPost = async(req, res) => {
    //body
    const body = req.body;
    //Crear el registro
    const guerrero = new Guerrero( body );
    //Guardarlo en la BD
    await guerrero.save();
    //respuesta
    res.json( guerrero );
}
const guerrerosPut = async(req, res) => {
    //Id
    const { id } = req.params;
    //body, quitamos el _id para que no pueda ser modificado en el BODY
    const {_id, ...resto} = req.body;
    //Actualizar el registro
    const guerrero = await Guerrero.findByIdAndUpdate( id, resto, {
        new: true
    });
    //respuesta
    res.json( guerrero );
    
}
const guerrerosDelete = async(req, res) => {
    //id
    const { id } = req.params;
    //Eliminar registro
    const guerrero = await Guerrero.findByIdAndDelete( id, {
        new: true
    });
    //respuesta
    res.json({
        status: 200,
        msg: 'Guerrero Eliminado',
        guerrero
    });
}
//exports
module.exports = {
    guerrerosGet,
    guerreroGet,
    guerrerosPost,
    guerrerosPut,
    guerrerosDelete
}