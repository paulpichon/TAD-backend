
const { validationResult } = require("express-validator")

//funcion para validar los campos
const validarCampos = ( req, res, next ) => {
    //errores
    const errores = validationResult( req );
    //Si existen errores mostrarlos
    if ( !errores.isEmpty() ) {
        return res.status( 404 ).json( errores );
    }
    //pasar al siqguiente middleware/funcion
    next();
}
//exports
module.exports = {
    validarCampos
}