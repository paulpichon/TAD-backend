//Aqui se cuentan sobre los 4 señorios de Tlaxcala

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
const senoriosPost = (req, res) => {
    // Respuesta
    res.json({
        msg: 'POST API'
    });
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