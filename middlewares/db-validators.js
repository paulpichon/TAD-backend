
const { validationResult } = require("express-validator")

//funcion para validar los campos
const validarCampos = ( req, res, next ) => {
    //errores
    const errores = validationResult
}
//exports
module.exports = {
    validarCampos
}