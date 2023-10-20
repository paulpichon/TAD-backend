//Cervezas artesanales de Tlaxcala
//importar el schema de la cerveza
const Cerveza = require('../models/cerveza');

//controllers
//GET Señorios
const cervezasGet = async(req, res) => {
    //respuesta
    res.json({
        msg: 'GET(S) API'
    });
}
//GET Señorio por ID
const cervezaGet = async(req, res) => {
    //respuesta
    res.json({
        msg: 'GET API'
    });
}
//POST
const cervezasPost = async (req, res) => {
    //body
    const body = req.body;
    //crear la cerveza
    const cerveza = new Cerveza( body );
    //guardar el registro en la BD
    await cerveza.save();
    //respuesta
    res.json( cerveza );
}
//PUT
const cervezasPut = async(req, res) => {
    //respuesta
    res.json({
        msg: 'PUT API'
    });
}
//DELETE
const cervezasDelete = async(req, res) => {
    //respuesta
    res.json({
        msg: 'DELETE API'
    });
}
//exports
module.exports = {
    cervezasGet,
    cervezaGet,
    cervezasPost,
    cervezasPut,
    cervezasDelete
}