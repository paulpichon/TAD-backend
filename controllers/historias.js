//Aqui se cuenta la historia de Tlaxcala, se contara de 2 formas
//1.- Version extendida
//2.- Version resumen
//importar modelo Historia
const Historia = require("../models/historia");

//controllers
const historiasGet = (req, res) => {
    res.json({
        msg:'GET API - CONTROLLERS'
    });
}
const historiasPost = async(req, res) => {
    //body
    const { titulo, texto, estado_visible, tipo_historia } = req.body;
    //mongoose
    const historia = new Historia({ titulo, texto, estado_visible, tipo_historia });
    //guardar el registro en la BD
    await historia.save();
    //respuesta del servidor
    res.json({ historia });
}
const historiasPut = (req, res) => {
    res.json({
        msg:'PUT API - CONTROLLERS'
    });
}
const historiasDelete = (req, res) => {
    res.json({
        msg:'DELETE API - CONTROLLERS'
    });
}
//exports
module.exports = {
    historiasGet,
    historiasPost,
    historiasPut,
    historiasDelete
}