//Aqui se cuenta la historia de Tlaxcala, se contara de 2 formas
//1.- Version extendida
//2.- Version resumen

//controllers
const historiasGet = (req, res) => {
    res.json({
        msg:'GET API - CONTROLLERS'
    });
}
const historiasPost = (req, res) => {
    res.json({
        msg:'POST API - CONTROLLERS'
    });
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