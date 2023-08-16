//Aqui se cuentan sobre los 4 señorios de Tlaxcala
//importar el schema de senorio
const Senorio = require('../models/senorio');

//controllers
//GET Señorios
const senoriosGet = (req, res) => {
    // Respuesta
    res.json({
        msg: 'GET ALL API'
    });
}
//GET Señorio por ID
const senorioGet = (req, res) => {
    // Respuesta
    res.json({
        msg: 'GET API'
    });
}
//POST
const senoriosPost = async(req, res) => {
    //body
    const senorioBody = req.body;
    console.log(senorioBody);
    //crear el señorio
    const senorio = new Senorio( senorioBody );
    //Guardar en la base de datos
    await senorio.save();
    // Respuesta
    res.json( senorio );
}
//PUT
const senoriosPut = (req, res) => {
    // Respuesta
    res.json({
        msg: 'PUT API'
    });
}
//DELETE
const senoriosDelete = (req, res) => {
    // Respuesta
    res.json({
        msg: 'DELETE API'
    });
}
//exports
module.exports = {
    senoriosGet,
    senorioGet,
    senoriosPost,
    senoriosPut,
    senoriosDelete
}