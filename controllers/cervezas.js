//Aqui se cuentan sobre los 4 señorios de Tlaxcala
//importar el schema de senorio
const Senorio = require('../models/senorio');

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
const cervezasPost = async(req, res) => {
    //respuesta
    res.json({
        msg: 'POST'
    });
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