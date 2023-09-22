//controladores

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
    //respuesta
    res.json({
        msg: 'POST GUERREROS - CONTROLADOR'
    });
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