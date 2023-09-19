//Aqui se cuenta la historia de Tlaxcala, se contara de 2 formas
//1.- Version extendida
//2.- Version resumen
//importar modelo Historia
const Historia = require("../models/historia");
//controllers
//GET
const historiasGet = async(req, res) => {
    //Obtener las historias
    const [ total, historias ] = await Promise.all([
        //total de registros(historias)
        Historia.countDocuments( {estado_visible: true } ),
        //Get Historias
        Historia.find( { estado_visible: true })
    ]);
    //respuesta
    res.json({
        total,
        historias
    });
}
//POST
const historiasPost = async(req, res) => {
    //body
    const { titulo, img_bandera, img_escudo, texto, estado_visible, tipo_historia } = req.body;
    //mongoose
    const historia = new Historia({ titulo, img_bandera, img_escudo, texto, estado_visible, tipo_historia });
    //guardar el registro en la BD
    await historia.save();
    //respuesta del servidor
    res.json(historia);
}
//PUT
const historiasPut = async(req, res) => {
    //Modificar el contenido del POST
    //ID a modificar
    const { id } = req.params;
    //Body
    const { _id, ...historiaActualizada } = req.body;
    //Actualizar 
    const historia = await Historia.findByIdAndUpdate( id, historiaActualizada, {
        //regresar la respuesta actualizada
        new: true
    });
    //respuesta
    res.json( historia );
}
//DELETE
const historiasDelete = async(req, res) => {
    //Eliminar historia
    //ID Historia
    const { id } = req.params;
    //Eliminar Historia: se va cambiar el estado_visible de true a false
    const historia = await Historia.findByIdAndUpdate( id, { estado_visible: false }, {
        //mostrar la respuesta actualizada
        new: true
    });
    //Respuesta
    res.json( historia );
}
//exports
module.exports = {
    historiasGet,
    historiasPost,
    historiasPut,
    historiasDelete
}