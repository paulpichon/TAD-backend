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
    //Schema
    const guerrero = new Guerrero( body );
    //Guardarlo en la BD
    await guerrero.save();
    //respuesta
    res.json( guerrero );
}
const guerrerosPut = async(req, res) => {
    //respuesta
    res.json({
        msg: 'PUT GUERREROS - CONTROLADOR'
    });
}
const guerrerosDelete = async(req, res) => {
    //respuesta
    res.json({
        msg: 'DELETE GUERREROS - CONTROLADOR'
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