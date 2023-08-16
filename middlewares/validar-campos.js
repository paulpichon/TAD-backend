//express validator
const { validationResult } = require("express-validator")
//funcion para validar los campos
const validarCampos = ( req, res, next ) => {
    //errores
    const errores = validationResult( req );
    //Si existen errores mostrarlos
    if ( !errores.isEmpty() ) {
        //mostrar errores
        return res.status( 404 ).json( errores );
    }
    //pasar al siguiente middleware/funcion
    next();
}
//exports
module.exports = {
    validarCampos
}