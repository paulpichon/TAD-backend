//Aqui se cuentan sobre los 4 señorios de Tlaxcala
//Router Express
const { Router } = require('express');
//express validator
const { check } = require('express-validator');
//express-validator
const { validarCampos } = require('../middlewares/validar-campos');
// Validar ID del señorio
const { existeIdSenorio } = require('../helpers/db-validators');
// Importar controladores
const { senoriosGet, 
        senorioGet,
        senoriosPost, 
        senoriosPut, 
        senoriosDelete, 
    } = require('../controllers/senorios');
//Asignar Router a una variable
const router = Router();

//GET ALL
router.get('/', senoriosGet);
//GET 
router.get('/:id', [
    // Verificar el ID
    check('id', 'El ID no es valido').isMongoId(),
    // Verificar que el ID exista en la BD
    check('id').custom( existeIdSenorio ),
    //funcion para validar los campos
    validarCampos
], senorioGet);
//POST
router.post('/', [  
    //nombre del señorio
    check('nombre', 'El campo nombre es obligatorio').trim().notEmpty(),
    //imagen del señorio
    check('imagen', 'El campo imagen es obligatorio').trim().notEmpty(),
    //ubicacion del señorio
    check('ubicacion', 'El campo ubicacion es obligatorio').trim().notEmpty(),
    //historia antigua del señorio
    check('historia_antigua', 'El campo historia_antigua es obligatorio').trim().notEmpty(),
    //economia y comercio del señorio
    check('economia_comercio', 'El campo economia_comercio es obligatorio').trim().notEmpty(),
    //participacion en conflictos del señorio
    check('participacion_conflictos', 'El campo participacion_conflictos es obligatorio').trim().notEmpty(),
    //alianza con los españoles de cada señorio
    check('alianza_españoles', 'El campo alianza_españoles es obligatorio').trim().notEmpty(),
    //el señorio en la epoca colonial
    check('epoca_colonial', 'El campo epoca_colonial es obligatorio').trim().notEmpty(),
    //funcion para validar los campos
    validarCampos
], senoriosPost);
//PUT
router.put('/:id', [
    // Verificar el ID
    check('id', 'El ID no es valido').isMongoId(),
    // Verificar que el ID exista en la BD
    check('id').custom( existeIdSenorio ),
    //nombre del señorio
    check('nombre', 'El campo nombre no puede estar vacio').optional().trim().notEmpty(),
    //imagen del señorio
    check('imagen', 'El campo imagen no puede estar vacio').optional().trim().notEmpty(),
    //ubicacion del señorio
    check('ubicacion', 'El campo ubicacion no puede estar vacio').optional().trim().notEmpty(),
    //historia antigua del señorio
    check('historia_antigua', 'El campo historia_antigua no puede estar vacio').optional().trim().notEmpty(),
    //economia y comercio del señorio
    check('economia_comercio', 'El campo economia_comercio no puede estar vacio').optional().trim().notEmpty(),
    //participacion en conflictos del señorio
    check('participacion_conflictos', 'El campo participacion_conflictos no puede estar vacio').optional().trim().notEmpty(),
    //alianza con los españoles de cada señorio
    check('alianza_españoles', 'El campo alianza_españoles no puede estar vacio').optional().trim().notEmpty(),
    //el señorio en la epoca colonial
    check('epoca_colonial', 'El campo epoca_colonial no puede estar vacio').optional().trim().notEmpty(),
    //funcion para validar los campos
    validarCampos
], senoriosPut);
//DELETE
router.delete('/:id', [
    // Verificar el ID
    check('id', 'El ID no es valido').isMongoId(),
    // Verificar que el ID exista en la BD
    check('id').custom( existeIdSenorio ),
    //funcion para validar los campos
    validarCampos
], senoriosDelete);
//exports
module.exports = router;
